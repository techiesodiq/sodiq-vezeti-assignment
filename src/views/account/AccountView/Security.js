import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
  LinearProgress
} from '@material-ui/core';
import wait from 'src/utils/wait';
import { Alert } from '@material-ui/lab';
import useFetch from './../../../hooks/useFetch';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Security = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const { runFetch, error, success, loading } = useFetch({
    uri: '/change-user-email/',
    method: 'POST',
    onSuccess: async res => {
      //console.log(res);
      //await login(res.responseData);
      enqueueSnackbar('Email updated', {
        variant: 'success'
      });
    },
    onError: err => {
      console.log(err);
    }
  });

  const {
    runFetch: pinRunFetch,
    error: pinError,
    success: pinSuccess,
    loading: pinLoading
  } = useFetch({
    uri: '/forgotpin/',
    method: 'POST',
    onSuccess: async res => {
      //console.log(res);
      //await login(res.responseData);
      enqueueSnackbar('Pin sent', {
        variant: 'success'
      });
    },
    onError: err => {
      console.log(err);
    }
  });

  return (
    <>
      <Formik
        initialValues={{
          currentEmail: '',
          newEmail: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          currentEmail: Yup.string()
            .min(1, 'Must be at least 1 characters')
            .max(255)
            .required('Required'),
          newEmail: Yup.string()
            .min(1, 'Must be at least 1 characters')
            .max(255)
            .required('Required')
        })}
        onSubmit={async (
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          try {
            // NOTE: Make API request
            runFetch({
              ...values,
              userId: window.localStorage.getItem('accessToken')
            });

            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Card className={clsx(classes.root, className)} {...rest}>
              <CardHeader title="Change Email" />
              <Divider />
              <CardContent>
                {loading && <LinearProgress />}
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
                <br />
                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <TextField
                      error={Boolean(
                        touched.currentEmail && errors.currentEmail
                      )}
                      fullWidth
                      helperText={touched.currentEmail && errors.currentEmail}
                      label="Current Email"
                      name="currentEmail"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.currentEmail}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <TextField
                      error={Boolean(touched.newEmail && errors.newEmail)}
                      fullWidth
                      helperText={touched.newEmail && errors.newEmail}
                      label="New Email"
                      name="newEmail"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.newEmail}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </CardContent>
              <Divider />
              <Box p={2} display="flex" justifyContent="flex-end">
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Change Email
                </Button>
              </Box>
            </Card>
          </form>
        )}
      </Formik>
      <br />
      <br />

      <Formik
        initialValues={{
          mobile: '',

          submit: null
        }}
        validationSchema={Yup.object().shape({
          mobile: Yup.string()
            .min(1, 'Must be at least 1 characters')
            .max(255)
            .required('Required')
        })}
        onSubmit={async (
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          try {
            // NOTE: Make API request
            pinRunFetch({
              ...values
            });

            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Card className={clsx(classes.root, className)} {...rest}>
              <CardHeader title="Recover Pin" />
              <Divider />
              <CardContent>
                {pinLoading && <LinearProgress />}
                {pinError && <Alert severity="error">{pinError}</Alert>}
                {pinSuccess && <Alert severity="success">{pinSuccess}</Alert>}
                <br />
                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <TextField
                      error={Boolean(touched.mobile && errors.mobile)}
                      fullWidth
                      helperText={touched.mobile && errors.mobile}
                      label="Mobile Number"
                      name="mobile"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="tel"
                      value={values.mobile}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </CardContent>
              <Divider />
              <Box p={2} display="flex" justifyContent="flex-end">
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Send
                </Button>
              </Box>
            </Card>
          </form>
        )}
      </Formik>
    </>
  );
};

Security.propTypes = {
  className: PropTypes.string
};

export default Security;
