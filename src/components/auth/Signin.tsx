import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../modules/auth/actions';
import { RootState } from '../../modules';
import axios from 'axios';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../enums/regex';

type InputType = {
  email: string;
  password: string;
  isValid: boolean | null;
};

const Signin = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state: RootState) => state.auth.user);

  const [input, setInput] = useState<InputType>({ email: '', password: '', isValid: null });
  const [isValidButton, setIsValidButton] = useState<boolean>(false);

  useEffect(() => {
    if (data && data.message) {
      alert(data.message);
      window.localStorage.setItem('authToken', data.token);
      // window.location.href = '/';
    }
  }, [data]);

  useEffect(() => {
    if (error && axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        alert(error.response.data.details);
      }
    }
  }, [error]);

  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(input.email, input.password);
    }, 300);
    return () => {
      clearTimeout(timeid);
    };
  }, [input.email, input.password]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const onClickHandler = () => {
    setInput(prevState => {
      return { ...prevState, isValid: null };
    });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!REGEX_EMAIL.test(input.email) || !REGEX_PASSWORD.test(input.password)) {
      setInput(prevState => {
        return { ...prevState, isValid: false };
      });
      return;
    }

    dispatch(authActions.signinAsync.request(input));
  };

  const checkValidate = (email: string, password: string) => {
    const validation: boolean = (email && password) as unknown as boolean;
    setIsValidButton(validation);
  };

  return (
    <div className="auth-form-wrapper">
      <h3>로그인</h3>
      <form className="auth-form" onSubmit={onSubmitHandler}>
        <input type="text" name="email" placeholder="email" onChange={onChangeHandler} onClick={onClickHandler} />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={onChangeHandler}
          onClick={onClickHandler}
        />
        {input.isValid !== null && !input.isValid && <p className="invalid">이메일 혹은 비밀번호가 잘못되었습니다.</p>}
        <button className="button" disabled={!isValidButton}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;