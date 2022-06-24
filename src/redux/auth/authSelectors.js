const getUser = state => state.auth.user;
// const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getIsLoggedIn = state => !!state.auth.token; // приводит к булю (залогинен юзер или нет)
const getToken = state => state.auth.token;
const getLoading = state => state.auth.loading;
const getLoadingUser = state => state.auth.loadingUser;
const getError = state => state.auth.error;

export {
  getUser,
  // getUserName,
  getUserEmail,
  getIsLoggedIn,
  getToken,
  getLoading,
  getLoadingUser,
  getError,
};
