import React from 'react';
import useState from './useState';
export default function useFetch({ path, method, onSuccess, onError }) {
  const [state, setState] = useState({
    loading: false,
    error: null,
    success: null
  });

  const runFetch = data => {
    setState({ loading: true, error: null, success: null });
    let stringData = '';

    //Prepare data for get request
    //sample output name=test&password=password
    if (method === 'GET') {
      if (data) {
        Object.keys(data).map((key, index) => {
          stringData = `${key}=${data[key]}`;
          if (Object.key(data).length - 1 !== index) {
            stringData = `${stringData}&`;
          }
          return key;
        });
      }
    }

    //Add orgId to incoming payload because it must be all the request
    if (method === 'POST') {
      data = { ...(data || {}), orgId: '728934' };
    }

    //Basic authentication and setup data fetch.
    let options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' + btoa(`sodiq.akanmu001@gmail.com:FrewQ12Sdcv33aqEz!`)
      }
    };

    //stringify incoming payload for the api request
    //sample data "{name: \'test\', password: \'passowrd\'}"
    if (method === 'POST') {
      Object.assign(options, { body: JSON.stringify(data) });
    }

    //execute fetch operation
    fetch(
      `https://secure.vezeti.net/test-api/v3${path}${
        method === 'GET' && stringData ? `?${stringData}` : ''
      }`,
      options
    )
      .then(r => {
        return r.json();
      })
      .then(res => {
        //check for success response
        if (res.responseCode === '00') {
          setState({
            loading: false,
            success: res.responseMessage,
            error: null
          });
          if (onSuccess) {
            onSuccess(res);
          }
        } else {
          //error response
          setState({
            error: res.responseMessage,
            loading: false,
            success: null
          });
          if (onError) {
            onError(res);
          }
        }
      })
      .catch(err => {
        //Unauthorize or network error
        setState({
          error: 'Network Connectivity Error',
          loading: false,
          success: null
        });
        if (onError) {
          onError(err);
        }
      });
  };

  return { runFetch, ...state };
}
