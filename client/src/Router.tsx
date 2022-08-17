import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ALERT_MESSAGE, PAGE } from './enums/commonEnum';
import Auth from './pages/Auth';
import Todos from './pages/Todos';

const Router = () => {
  const authToken = JSON.parse(localStorage.getItem('authToken') as string);

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
              <Auth />
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
              <Todos />
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
