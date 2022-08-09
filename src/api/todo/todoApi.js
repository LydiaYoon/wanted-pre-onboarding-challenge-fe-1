import { clientApi } from '../Api';

const todoAPI = {
  getAll: async authToken => {
    const response = await clientApi.get('/todos', {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },

  getById: async ({ id, authToken }) => {
    const response = await clientApi.get(`/todos/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },

  create: async ({ title, content, authToken }) => {
    const response = await clientApi.post(
      '/todos',
      { title, content },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    return response.data;
  },

  update: async ({ title, content, authToken }) => {
    const response = await clientApi.put(
      '/todos',
      { title, content },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    return response.data;
  },

  delete: async ({ id, authToken }) => {
    const response = await clientApi.delete(`/todos/${id}`, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  },
};

export default todoAPI;

// TodoObj
// {
//   title,
//   content,
//   id,
//   createdAt,
//   updatedAt,
// };
