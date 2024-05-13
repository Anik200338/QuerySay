import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const loaction = useLocation();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (!user) {
    return <Navigate to="/login" state={loaction?.pathname || '/'}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
