// actions.js
export const selectCity = (cityName) => ({
  type: "SELECT_CITY",
  payload: cityName,
});

export const setLoginStatus = (LoggedIn) => ({
  type: "LOGGED_IN",
  payload: LoggedIn,
});
