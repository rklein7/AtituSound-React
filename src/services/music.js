import axiosInstance from "../utils/axiosInstance";

export const createMusic = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return await axiosInstance.post("/musics", data, config);
};
