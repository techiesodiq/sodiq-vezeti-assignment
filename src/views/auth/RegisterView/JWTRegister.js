import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  makeStyles,
  LinearProgress
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import useFetch from './../../../hooks/useFetch';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {}
}));

const JWTRegister = ({ className, ...rest }) => {
  const { runFetch, error, success, loading } = useFetch({
    path: '/signup/',
    method: 'POST',
    onSuccess: async res => {
      console.log(res);
      await register(res.responseData);
    },
    onError: err => {
      console.log(err);
    }
  });

  const classes = useStyles();
  const { register } = useAuth();
  const isMountedRef = useIsMountedRef();

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        mobile: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        firstName: Yup.string()
          .max(255)
          .required('First Name is required'),
        lastName: Yup.string()
          .max(255)
          .required('Last Name is required'),
        mobile: Yup.string()
          .max(255)
          .required('Mobile is required'),
        password: Yup.string()
          .min(7)
          .max(255)
          .required('Password is required'),
        policy: Yup.boolean().oneOf([true], 'This field must be checked')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          runFetch({
            ...values
          });
          //await register(values.email, values.name, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
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
        <form
          noValidate
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          {loading && <LinearProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Login successful</Alert>}
          <TextField
            error={Boolean(touched.firstName && errors.firstName)}
            fullWidth
            helperText={touched.firstName && errors.firstName}
            label="First Name"
            margin="normal"
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.lastName && errors.lastName)}
            fullWidth
            helperText={touched.lastName && errors.lastName}
            label="Last Name"
            margin="normal"
            name="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
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
            error={Boolean(touched.mobile && errors.mobile)}
            fullWidth
            helperText={touched.mobile && errors.mobile}
            label="Mobile"
            margin="normal"
            name="mobile"
            onBlur={handleBlur}
            onChange={handleChange}
            type="tel"
            value={values.mobile}
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
          <Box alignItems="center" display="flex" mt={2} ml={-1}>
            <Checkbox
              checked={values.policy}
              name="policy"
              onChange={handleChange}
            />
            <Typography variant="body2" color="textSecondary">
              I have read the{' '}
              <Link component="a" href="#" color="secondary">
                Terms and Conditions
              </Link>
            </Typography>
          </Box>
          {Boolean(touched.policy && errors.policy) && (
            <FormHelperText error>{errors.policy}</FormHelperText>
          )}
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

JWTRegister.propTypes = {
  className: PropTypes.string
};

export default JWTRegister;
