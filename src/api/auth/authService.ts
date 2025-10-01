export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setAccessToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  window.location.href = "/";
};
