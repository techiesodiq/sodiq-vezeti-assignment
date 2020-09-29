import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  browseButton: {
    marginLeft: theme.spacing(2)
  }
}));

const CTA = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        {/* <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Ready to start building?
        </Typography>
        <Typography
          variant="h1"
          align="center"
          color="secondary"
        >
          Download Devias Material Kit today.
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            color="secondary"
            component="a"
            href="https://material-ui.com/store/items/devias-kit-pro"
            variant="contained"
          >
            Get the kit
          </Button>
        </Box> */}

        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box display="flex">
                <iframe
                  src="https://www.youtube.com/embed/xGCz1hzAe-Y"
                  width="600"
                  height="405"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex">
                <Box ml={2}>
                  <br /> <br />
                  <br />
                  <Typography variant="h1" gutterBottom color="textPrimary">
                    Never Miss A Business Call For As <br /> Low As ₦2,500/Month
                  </Typography>
                  <br />
                  <Typography variant="h3" gutterBottom color="textPrimary">
                    Pay ₦24,000 Yearly And Save 20% On Discount
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Join the league of professional multinationals and take
                    advantage of the benefits Vezeti offers businesses that want
                    the professional fit at affordable rates.
                  </Typography>
                  <br />
                  <Button
                    color="primary"
                    variant="outlined"
                    component="a"
                    href="https://sketch.cloud/s/q4a8e"
                    target="_blank"
                  >
                    SIGN UP TODAY
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

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
