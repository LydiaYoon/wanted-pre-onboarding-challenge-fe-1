import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { PAGE } from '../../../enums/commonEnum';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../../enums/regex';
import * as layoutActions from '../../../modules/layout/actions';

type InputType = {
  value: string;
  isValid: boolean | null;
};

const Signup = () => {
  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState<InputType>({ value: '', isValid: null });
  const [inputPassword, setInputPassword] = useState<InputType>({ value: '', isValid: null });
  const [inputPasswordCheck, setInputPasswordCheck] = useState<{ isValid: boolean | null }>({ isValid: null });
  const [isValidButton, setIsValidButton] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(layoutActions.setPage(PAGE.SIGN_IN));
  }, []);

  useEffect(() => {
    if (inputEmail.isValid != null && inputPassword.isValid != null && inputPasswordCheck.isValid != null) {
      checkValidate(inputEmail.isValid, inputPassword.isValid, inputPasswordCheck.isValid);
    }
  }, [inputEmail, inputPassword, inputPasswordCheck]);

  const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputEmail(prevState => {
      return { ...prevState, value: value, isValid: REGEX_EMAIL.test(value) };
    });
  };

  const onChangePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputPassword(prevState => {
      return { ...prevState, value: value, isValid: REGEX_PASSWORD.test(value) };
    });
  };

  const onChangePasswordCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputPasswordCheck(prevState => {
      return {
        ...prevState,
        isValid: inputPassword.isValid && inputPassword.value === value,
      };
    });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidButton) {
      return;
    }

    // TODO: 회원가입 Request
  };

  const checkValidate = (isEmailValid: boolean, isPasswordValid: boolean, isPasswordCheckValid: boolean) => {
    const validation: boolean = isEmailValid && isPasswordValid && isPasswordCheckValid;
    setIsValidButton(validation);
  };

  return (
    <div className="auth-form-wrapper">
      <h3>회원가입</h3>
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
