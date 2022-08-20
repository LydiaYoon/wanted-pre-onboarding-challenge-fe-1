const AUTH_TOKEN_KEY = 'authToken';

export const isSignin = () => {
  const authToken = JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY) as string);
  return !!authToken && !!authToken.token;
};

export const setSignin = (token: string, persist: boolean) => {
  localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify({ token, persist }));
};

export const setSignout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
