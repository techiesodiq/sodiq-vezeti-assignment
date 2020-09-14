import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  makeStyles,
  Link,
  LinearProgress
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import useFetch from './../../../hooks/useFetch';

const useStyles = makeStyles(() => ({
  root: {}
}));

const JWTLogin = ({ className, ...rest }) => {
  const { runFetch, error, success, loading } = useFetch({
    uri: '/login/',
    method: 'POST',
    onSuccess: async res => {
      //console.log(res);
      await login(res.responseData);
    },
    onError: err => {
      console.log(err);
    }
  });
  const classes = useStyles();
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();

  return (
    <Formik
      initialValues={{
        email: 'demos@email.com',
        password: 'password1#',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        password: Yup.string()
          .max(255)
          .required('Password is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // await login(values.email, values.password);
          runFetch({
            ...values,
            typeEmailOrPhone: 'email'
          });

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
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
        <form
          noValidate
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          {loading && <LinearProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Login successful</Alert>}
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box mt={2}>
            <Box
              mt={2}
              mb={2}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Link
                component={RouterLink}
                to="/forget-password"
                variant="body2"
                color="textSecondary"
              >
                Forget password
              </Link>
            </Box>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

JWTLogin.propTypes = {
  className: PropTypes.string
};

export default JWTLogin;
