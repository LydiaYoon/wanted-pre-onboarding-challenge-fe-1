import { clientApi, handleError } from '../Api';

const authAPI = {
  signin: async body => {
    const response = await clientApi.post('/users/login', body);
    return response.data;
  },

  signup: async body => {
    const response = await clientApi.post('/users/create', body);
    return response.data;
  },
};

export default authAPI;
