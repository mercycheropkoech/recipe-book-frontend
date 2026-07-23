import API from "./api";

export const registerUser = async (userData) => {
  const response = await API.post("register/", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await API.post("login/", credentials);

  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};