import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from './../contexts/Auth0Context';

const useScrollReset = () => {
  const { logout } = React.useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default useScrollReset;
