import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Testimonials = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" color="textPrimary">
          Testimonials
        </Typography>
        <br />
        <br />
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          &quot;Easy. This is the one word I would use to describe my experience
          with Vezeti.
          <br />
          At no point did I have to feel anxious.&quot;
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/static/home/olivier.png" />
          <Box ml={2}>
            <Typography variant="body1" color="textPrimary">
              Desmond Onoriose
              <Typography
                color="textSecondary"
                display="inline"
                component="span"
              >
                , COO of Platinum Index Data Ltd.
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string
};

export default Testimonials;
