import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as layoutActions from '../../modules/layout/actions';
import * as authActions from '../../modules/auth/actions';
import { RootState } from '../../modules';
import axios from 'axios';
import { PAGE } from '../../enums/commonEnum';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../enums/regex';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(layoutActions.setPage(PAGE.SIGN_IN));
  }, []);

  useEffect(() => {
    if (data && data.message) {
      alert(data.message);
      // navigate(PAGE.TODO_LIST);
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
        <Link to={PAGE.SIGN_UP}>회원가입</Link>
      </form>
    </div>
  );
};

export default Signin;
