import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

const FAQS = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
        >
          Frequently asked questions
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid
          container
          spacing={3}
          component="dl"
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Technical &amp; Licensing
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  What do we use for styling our components?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  We use Material-ui&apos;s hooks api as we think it’s
                  the best way of avoiding clutter.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Is Typescript available?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Yes, we have the Typescript version available for Standard Plus and Extended license.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Are you providing support for setting up my project?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Yes, we offer email support for all our customers &amp;
                  even skype meetings for our extended license customers.
                </Typography>
              </dd>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Design
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Are the design files (Sketch, Figma) included in the Standard License?
                </Typography>
              </dt>
              <dd>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  No, we offer the design source file only to Standard Plus and Extended License.
                </Typography>
              </dd>
            </Box>
          </Grid>
        </Grid>
      </Container> */}
      <Container>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex">
                {/* <Typography variant="h4" gutterBottom color="textPrimary">
                  GET IN TOUCH
                </Typography>
                <Divider variant="inset" component="li" />
                <br /> */}
                <List color="textSecondary">
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Email</Typography>
                      }
                      color="textSecondary"
                      color="white"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <PhoneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Phone</Typography>
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WhatsAppIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">WhatsApp</Typography>
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">
                          12D Wole Ariyo Street (office 33), off Admiralty Way,
                          Lekki Phase 1, Lagos
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex">
                {/* <Typography variant="h4" gutterBottom color="textPrimary">
                  QUICK LINKS
                </Typography>
                <Divider variant="inset" component="li" />
                <br /> */}
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">About</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Products</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Pricing</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={<Typography color="textPrimary">FAQ</Typography>}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Contact Us</Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex">
                {/* <Typography variant="h4" gutterBottom color="textPrimary">
                  RESOURCES
                </Typography>
                <Divider variant="inset" component="li" />
                <br /> */}
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Blog</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Learning</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">Tutorial</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">User Manual</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography color="textPrimary">
                          Terms and Conditions
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

FAQS.propTypes = {
  className: PropTypes.string
};

export default FAQS;
