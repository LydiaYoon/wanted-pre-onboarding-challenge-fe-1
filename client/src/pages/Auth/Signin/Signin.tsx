import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ErrorResponse } from '../../../api/Api';
import authAPI, { AuthParam, AuthResponse } from '../../../api/auth/authApi';
import { PAGE } from '../../../enums/commonEnum';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../../enums/regex';

type FormInputs = {
  email: string;
  password: string;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    if (isValid) {
      mutate(data);
    }
  };

  const onSuccess = (response: AuthResponse) => {
    console.log(response);
    //navigator('/');
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    console.log(response?.data.details);
    setError('password', { type: 'signinFailure', message: '이메일 혹은 비밀번호가 잘못되었습니다.' });
  };

  const { mutate } = useMutation<AuthResponse, AxiosError<ErrorResponse>, AuthParam>(
    (user: AuthParam) => authAPI.signin(user),
    { onSuccess, onError }
  );

  return (
    <div className="auth-form-wrapper">
      <h3>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('email', {
            required: true,
            pattern: { value: REGEX_EMAIL, message: '잘못된 이메일 형식입니다.' },
          })}
          placeholder="email"
        />
        {errors.email?.message && <p className="invalid">{errors.email.message}</p>}

        <input
          type="password"
          {...register('password', {
            required: true,
            pattern: { value: REGEX_PASSWORD, message: '비밀번호는 8~16자입니다.' },
          })}
          placeholder="password"
        />
        {errors.password?.message && <p className="invalid">{errors.password.message}</p>}

        <button className="button" disabled={!isValid}>
          Sign in
        </button>
      </form>
      <div className="link">
        <Link to={PAGE.SIGN_UP}>회원가입</Link>
      </div>
    </div>
  );
};

export default Signin;
