import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const Features = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        {/* <Typography
          component="p"
          variant="overline"
          color="secondary"
          align="center"
        >
          Explore Devias Kit Pro
        </Typography> */}
        <Typography variant="h1" align="center" color="textPrimary">
          Why Choose Vezeti?
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Easy to Setup
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Join the league of professional multinationals and take
                    advantage of the benefits Vezeti offers businesses that want
                    the professional fit at affordable rates.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Very Affordable
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    With rates as low as 2,500 naira a month, Vezeti offers
                    best-in-class value for money. Where else can you get
                    world-class service for giveaway prices?
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>03</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Great Support
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    A key component of our operational doctrine is ensuring that
                    at all times, your value for money gained from our products
                    doesn’t decrease. We give continuous and technical support.
                  </Typography>
                  <Button
                    variant="outlined"
                    component="a"
                    href="https://sketch.cloud/s/q4a8e"
                    target="_blank"
                  >
                    SIGN UP FOR FREE
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
