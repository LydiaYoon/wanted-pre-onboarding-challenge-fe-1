import React, { useEffect } from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthTemplate from './page/AuthTemplate';
import TodoTemplate from './page/TodoTemplate';
import * as authActions from './modules/auth/actions';
import { ALERT_MESSAGE, PAGE } from './enums/commonEnum';

const Router = () => {
  const dispatch = useDispatch();
  const authToken = JSON.parse(localStorage.getItem('authToken') as string);

  useEffect(() => {
    if (authToken) {
      dispatch(authActions.setAuthToken(authToken));
    }
  }, [authToken]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/todos" />} />

        <Route
          path="/auth/*"
          element={
            <ProtectedRoute
              isAllowed={!authToken || (!!authToken && !authToken.token)}
              redirectPath={PAGE.TODO_LIST}
              callback={() => alert(ALERT_MESSAGE.ALREADY_SIGN_IN)}
            >
              <AuthTemplate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/todos"
          element={
            <ProtectedRoute
              isAllowed={!!authToken && !!authToken.token}
              redirectPath={PAGE.SIGN_IN}
              callback={() => alert(ALERT_MESSAGE.REQUIRE_SIGN_IN)}
            >
              <TodoTemplate />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Router;

type ProtectedRouteProps = {
  isAllowed: boolean;
  redirectPath?: string;
  children?: JSX.Element;
  callback: () => void;
};

export const ProtectedRoute = ({ isAllowed, redirectPath = '/', children, callback }: ProtectedRouteProps) => {
  if (isAllowed) {
    return children ? children : <Outlet />;
  } else {
    callback();
    return <Navigate to={redirectPath} replace />;
  }
};
