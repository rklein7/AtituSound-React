import axiosInstance from "../utils/axiosInstance";

export const signup = async (data) => {
  return await axiosInstance.post("/auth/signup", data);
};

export const signin = async (data) => {
  return await axiosInstance.post("/auth/signin", data);
};
