import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Dialog,
  DialogContentText,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button
} from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));
let counter = 0;
const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { history } = useHistory();
  const [interval, setIntervalState] = React.useState({});
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    let interval = setInterval(() => {
      counter++;

      //after 10 sec logout
      if (counter === 10) {
        handleLogout();
      }
      if (counter === 5) {
        setOpen(true);
      }
    }, 1000);

    return () => {
      try {
        clearInterval(interval);
      } catch (e) {}
    };
  }, []);

  const handleLogout = async () => {
    console.log('logout');
    try {
      await logout();
      history.push('/');
    } catch (err) {
      // console.error(err);
      // enqueueSnackbar('Unable to logout', {
      //   variant: 'error'
      // });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  //on click return counter to zero
  const handleClick = async () => {
    counter = 0;
  };
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  React.useEffect(() => {
    counter = 0;
  }, []);

  return (
    <div className={classes.root} onClick={handleClick}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Logout Warning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will be logged out in the next 5 sec. Click close to cancel
            logout.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;
