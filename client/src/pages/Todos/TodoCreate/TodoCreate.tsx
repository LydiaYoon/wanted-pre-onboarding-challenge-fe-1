import { SubmitHandler, useForm } from 'react-hook-form';
import { MdCancel, MdCreate } from 'react-icons/md';
import { useCreateTodo } from '../hooks/useCreateTodo';
import { useGetTodos } from '../hooks/useGetTodos';
import { useUpdateTodo } from '../hooks/useUpdateTodo';
import { TodoCreateContainer, TodoFormWrapper } from './TodoCreate.style';

type FormInputs = {
  title: string;
  content: string;
};

const TodoCreate = ({ id }: { id: string | null }) => {
  const authToken = JSON.parse(localStorage.getItem('authToken') as string);
  const todo = id ? useGetTodos() : null;
  const createMutate = useCreateTodo();
  const updateMutate = useUpdateTodo();

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
      if (id) {
        updateMutate({ ...data, id: id, authToken: authToken.token });
      } else {
        createMutate({ ...data, authToken: authToken.token });
      }
    }
  };

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
          placeholder="title"
          className={errors.title?.message ? 'error' : ''}
          defaultValue={!!todo && !Array.isArray(todo) ? todo.title : ''}
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
          defaultValue={!!todo && !Array.isArray(todo) ? todo.content : ''}
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
