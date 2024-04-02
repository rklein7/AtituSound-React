import axiosInstance from "../utils/axiosInstance";

export const createPlaylist = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return await axiosInstance.post("/playlists", data, config);
};

export const getPlaylists = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return await axiosInstance.get("/playlists?name", config);
};

export const getPlaylist = async (uuid, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return await axiosInstance.get(`/playlists/${uuid}`, config);
};

export const addSongToPLaylist = async (playlistUuid, songUuid, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return await axiosInstance.post(
    `/playlists/${playlistUuid}/addmusic?musicUuid=${songUuid}`,
    {},
    config
  );
};
