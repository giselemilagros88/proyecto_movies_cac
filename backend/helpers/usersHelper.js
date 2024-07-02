export const parseUser = (data) => {
  const user = {
    ...data,
    isAdmin: parseInt(data.isAdmin),
  };
  return user;
};
