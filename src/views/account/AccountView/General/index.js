import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid, makeStyles, LinearProgress } from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';
import useFetch from './../../../../hooks/useFetch';
import useState from './../../../../hooks/useState';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {}
}));

const General = ({ className, ...rest }) => {
  const [state, setState] = useState({});
  const classes = useStyles();
  const { user } = useAuth();
  const { runFetch, error, loading } = useFetch({
    path: '/get-user-account-parameters/',
    method: 'POST',
    onSuccess: async res => {
      //console.log(res);
      //await login(res.responseData);
      console.log(res);
      setState(res.responseData);
    },
    onError: err => {
      console.log(err);
    }
  });

  React.useEffect(() => {
    runFetch({
      userId: window.localStorage.getItem('accessToken')
    });
  }, []);

  return (
    <>
      {loading && <LinearProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <br />
      <Grid
        className={clsx(classes.root, className)}
        container
        spacing={3}
        {...rest}
      >
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <ProfileDetails user={state} />
        </Grid>
        <Grid item lg={8} md={6} xl={9} xs={12}>
          <GeneralSettings user={user} />
        </Grid>
      </Grid>
    </>
  );
};

General.propTypes = {
  className: PropTypes.string
};

export default General;
