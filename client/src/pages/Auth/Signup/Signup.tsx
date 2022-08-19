import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PAGE } from '../../../enums/commonEnum';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../../enums/regex';
import { useSignup } from '../api/useSignup';

type FormInputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const Signup = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const signupMutate = useSignup(() =>
    setError('email', { type: 'signupFailure', message: '이미 존재하는 유저입니다.' })
  );

  const onSubmit: SubmitHandler<FormInputs> = data => {
    if (isValid) {
      signupMutate(data);
    }
  };

  return (
    <div className="auth-form-wrapper">
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('email', {
            required: true,
            pattern: { value: REGEX_EMAIL, message: '잘못된 이메일 형식입니다.' },
          })}
          placeholder="email"
          className={errors.email?.message ? 'error' : ''}
        />
        {errors.email?.message && <p className="invalid">{errors.email.message}</p>}

        <input
          type="password"
          {...register('password', {
            required: true,
            pattern: { value: REGEX_PASSWORD, message: '비밀번호는 8~16자로 입력해주세요.' },
          })}
          placeholder="password"
          className={!errors.password && getValues('password') ? 'success' : errors.password?.message ? 'error' : ''}
        />
        {!errors.password && getValues('password') && <p className="valid">사용가능한 비밀번호 입니다.</p>}
        {errors.password?.message && <p className="invalid">{errors.password.message}</p>}

        <input
          type="password"
          {...register('passwordConfirm', {
            required: true,
            validate: {
              test: v => v === getValues('password') || '비밀번호를 다시 입력해주세요.',
            },
          })}
          placeholder="confirm password"
          className={
            !errors.passwordConfirm && getValues('passwordConfirm')
              ? 'success'
              : errors.passwordConfirm?.message
              ? 'error'
              : ''
          }
        />
        {!errors.passwordConfirm && getValues('passwordConfirm') && <p className="valid">비밀번호가 일치합니다.</p>}
        {errors.passwordConfirm?.message && <p className="invalid">{errors.passwordConfirm.message}</p>}

        <button className="button success" disabled={!isValid}>
          Sign in
        </button>
      </form>
      <div className="link">
        <Link to={PAGE.SIGN_IN}>로그인</Link>
      </div>
    </div>
  );
};

export default Signup;
