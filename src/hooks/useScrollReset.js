import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from './../contexts/Auth0Context';

const useScrollReset = () => {
  const { logout } = React.useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    console.log('logout');
    logout();
    console.log(logout);
  });

  return null;
};

export default useScrollReset;
