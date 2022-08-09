import { API, handleError } from '../Api';

export const postUserLogin = async ({ email, password }) => {
  // const response = await API.post('/users/login', { email, password })
  //   .then(res => res.data)
  //   .catch(e => handleError(e));

  const response = await API.post('/users/login', { email, password });
  return response;
};

export const postUserCreate = async ({ email, password }) => {
  const response = await API.post('/users/create', { email, password });
  return response;
};
