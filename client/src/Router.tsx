import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Todos from './pages/Todos';
import { routes } from './routes/routes';
import { isSignin } from './utils/authUtil';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to={routes.todos} />} />

        <Route
          path="/auth/*"
          element={
            <ProtectedRoute isAllowed={!isSignin()} redirectPath={routes.todos}>
              <Auth />
            </ProtectedRoute>
          }
        />

        <Route
          path="/todos"
          element={
            <ProtectedRoute isAllowed={isSignin()} redirectPath={routes.signin}>
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
};

export const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }: ProtectedRouteProps) => {
  if (isAllowed) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
};
