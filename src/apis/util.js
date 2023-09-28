export const createHTTPHeader = (authToken) => {
  const token = authToken === null ? 'test' : authToken;
  return {
    'x-swiftsell-token': `${token}`,
  };
};
