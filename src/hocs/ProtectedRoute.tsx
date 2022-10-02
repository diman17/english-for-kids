import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

type ProtectedRouteProps = {
  children: JSX.Element;
};

function ProtectedRoute(props: ProtectedRouteProps) {
  const { children } = props;
  const isAdminAuth = useSelector(
    (state: RootState) => state.common.isAdminAuth,
  );

  if (!isAdminAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
