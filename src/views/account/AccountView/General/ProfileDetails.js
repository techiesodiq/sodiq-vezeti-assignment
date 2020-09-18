import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

const ProfileDetails = ({ className, user, ...rest }) => {
  const classes = useStyles();

  function moneyFormat(price, sign = '₦') {
    const pieces = parseFloat(price)
      .toFixed(2)
      .split('');
    let ii = pieces.length - 3;
    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ',');
    }
    return sign + pieces.join('');
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography
            className={classes.name}
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.userFirstName} {user.userLastName}
          </Typography>
          <Typography color="textPrimary" variant="body1">
            Your balance:&emsp;
            {user.userAccountBalance && moneyFormat(user.userAccountBalance)}
            <Link component={RouterLink} to="/pricing">
              {user.tier}
            </Link>
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="text">
          Remove picture
        </Button>
      </CardActions>

      <br />
      <hr />
      <Box
        pt={1}
        pb={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <PhoneIcon />
        </Box>

        <Box ml={1}>
          <Typography
            color="textPrimary"
            variant="body1"
            style={{ textAlign: 'center' }}
          >
            {user.userPhoneNumber}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
