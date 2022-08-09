import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../enums/regex';
import { userSignin } from '../../modules/user/actions';

const Signin = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.user);

  const [input, setInput] = useState({ email: '', password: '', isValid: null });
  const [isValidButton, setIsValidButton] = useState(false);

  useEffect(() => {
    if (error && error.status == 400) {
      console.log('로그인에 실패했습니다');
    }
  }, [data, error]);

  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(input.email, input.password);
    }, 300);
    return () => {
      clearTimeout(timeid);
    };
  }, [input.email, input.password]);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setInput(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const onClickHandler = e => {
    setInput(prevState => {
      return { ...prevState, isValid: null };
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log('%c로그인', 'color: yellow; font-size: 14pt');

    if (!REGEX_EMAIL.test(input.email) || !REGEX_PASSWORD.test(input.password)) {
      setInput(prevState => {
        return { ...prevState, isValid: false };
      });
      return;
    }

    dispatch(userSignin(input));
  };

  const checkValidate = (email, password) => {
    const validation = email && password;
    setIsValidButton(validation);
  };

  return (
    <div className="auth-form-wrapper">
      <h1>로그인</h1>
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
