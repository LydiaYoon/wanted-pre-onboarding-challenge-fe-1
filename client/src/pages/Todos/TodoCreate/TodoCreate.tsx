import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdCancel, MdCreate } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import { ErrorResponse } from '../../../api/Api';
import todoAPI, { TodoData, TodoParam, TodoResponse } from '../../../api/todo/todoApi';
import { TodoCreateContainer, TodoFormWrapper } from './TodoCreate.style';

type FormInputs = {
  title: string;
  content: string;
};

const TodoCreate = () => {
  const authToken = JSON.parse(localStorage.getItem('authToken') as string);
  const [searchParams] = useSearchParams();
  const todoId = searchParams.get('id');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    if (isValid && authToken.token) {
      console.log(data);
      console.log(authToken.token);
      mutate({ ...data, authToken: authToken.token }, { onSuccess, onError });
    }
  };

  const onSuccess = (response: TodoResponse<TodoData>) => {
    console.log(response);
    //navigator('/');
  };

  const onError = ({ response }: AxiosError<ErrorResponse>) => {
    console.log(response?.data.details);
  };

  const { mutate } = useMutation<TodoResponse<TodoData>, AxiosError<ErrorResponse>, TodoParam>(todoAPI.create);

  return (
    <TodoCreateContainer>
      <TodoFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('title', {
            required: 'Please write title',
            minLength: {
              value: 1,
              message: 'Must write at least one letter.',
            },
          })}
          autoFocus
          placeholder="title"
          className={errors.title?.message ? 'error' : ''}
        />

        <textarea
          {...register('content', {
            required: 'Please write content.',
            minLength: {
              value: 1,
              message: 'Must write at least one letter.',
            },
          })}
          placeholder="content"
          className={errors.content?.message ? 'error' : ''}
        />

        <button type="submit" className="success" disabled={!isDirty && isValid}>
          Submit <MdCreate />
        </button>
        <button type="reset" className="warning" onClick={() => reset()}>
          Reset <MdCancel />
        </button>
      </TodoFormWrapper>
    </TodoCreateContainer>
  );
};

export default TodoCreate;
