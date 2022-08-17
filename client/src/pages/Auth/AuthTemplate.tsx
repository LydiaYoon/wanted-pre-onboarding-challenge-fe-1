import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import * as layoutActions from '../../modules/layout/actions';
import AuthContainer from './AuthTemplate.style';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const AuthTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layoutActions.setHeaderTitle('Authentication'));
  }, []);

  return (
    <AuthContainer>
      <Header />
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AuthContainer>
  );
};

export default AuthTemplate;
