import React from 'react';
import useState from './useState';
export default function useFetch({ uri, method, onSuccess, onError }) {
  const [state, setState] = useState({
    loading: false,
    error: null,
    success: null
  });
  const runFetch = data => {
    setState({ loading: true, error: null, success: null });
    let stringData = '';
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
    if (method === 'POST') {
      data = { ...(data || {}), orgId: '728934' };
    }
    let options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' + btoa(`sodiq.akanmu001@gmail.com:FrewQ12Sdcv33aqEz!`)
      }
    };
    if (method === 'POST') {
      Object.assign(options, { body: JSON.stringify(data) });
    }
    fetch(
      `https://secure.vezeti.net/test-api/v3${uri}${
        method === 'GET' && stringData ? `?${stringData}` : ''
      }`,
      options
    )
      .then(r => {
        return r.json();
      })
      .then(res => {
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
