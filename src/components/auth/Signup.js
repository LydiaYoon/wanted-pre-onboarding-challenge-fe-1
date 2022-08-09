import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../enums/regex';
import * as authActions from '../../modules/auth/actions';

const Signup = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.auth.user);

  const [inputEmail, setInputEmail] = useState({ value: '', isValid: null });
  const [inputPassword, setInputPassword] = useState({ value: '', isValid: null });
  const [inputPasswordCheck, setInputPasswordCheck] = useState({ isValid: null });
  const [isValidButton, setIsValidButton] = useState(false);

  useEffect(() => {
    if (data && data.message) {
      alert(data.message);
      window.location.href = '/';
    }
  }, [data]);

  useEffect(() => {
    if (error && error.response && error.response.data) {
      alert(error.response.data.details);
    }
  }, [error]);

  useEffect(() => {
    checkValidate(inputEmail.isValid, inputPassword.isValid, inputPasswordCheck.isValid);
  }, [inputEmail, inputPassword, inputPasswordCheck]);

  const onChangeEmailHandler = e => {
    const { value } = e.target;
    setInputEmail(prevState => {
      return { ...prevState, value: value, isValid: REGEX_EMAIL.test(value) };
    });
  };

  const onChangePasswordHandler = e => {
    const { value } = e.target;
    setInputPassword(prevState => {
      return { ...prevState, value: value, isValid: REGEX_PASSWORD.test(value) };
    });
  };

  const onChangePasswordCheckHandler = e => {
    const { value } = e.target;
    setInputPasswordCheck(prevState => {
      return {
        ...prevState,
        isValid: inputPassword.isValid && inputPassword.value === value,
      };
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!isValidButton) {
      return;
    }

    dispatch(authActions.signup({ email: inputEmail.value, password: inputPassword.value }));
  };

  const checkValidate = (email, passowrd, passwordCheck) => {
    const validation = email && passowrd && passwordCheck;
    setIsValidButton(validation);
  };

  return (
    <div className="auth-form-wrapper">
      <h1>회원가입</h1>
      <form className="auth-form" onSubmit={onSubmitHandler}>
        <input type="text" name="email" placeholder="email" onChange={onChangeEmailHandler} />
        {/* onChange에서 확인 불가능해서 주석처리 */}
        {/* {inputEmail.isValid && <p className="valid">사용가능한 이메일입니다.</p>} */}
        {inputEmail.isValid !== null && !inputEmail.isValid && <p className="invalid">잘못된 이메일 형식입니다.</p>}

        <input type="password" name="password" placeholder="password" onChange={onChangePasswordHandler} />
        {inputPassword.isValid && <p className="valid">사용가능한 비밀번호 입니다.</p>}
        {inputPassword.isValid !== null && !inputPassword.isValid && (
          <p className="invalid">비밀번호는 8~16자로 입력해주세요.</p>
        )}

        <input
          type="password"
          name="passwordCheck"
          placeholder="confirm password"
          onChange={onChangePasswordCheckHandler}
        />
        {inputPasswordCheck.isValid && <p className="valid">비밀번호가 일치합니다.</p>}
        {inputPasswordCheck.isValid !== null && !inputPasswordCheck.isValid && (
          <p className="invalid">비밀번호를 다시 입력해주세요.</p>
        )}

        <button className="success" disabled={!isValidButton}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
