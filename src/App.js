import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import PlaylistCreate from "./pages/PlaylistCreate";
import SongAdd from "./pages/SongAdd";

import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route path="playlists" element={<Playlists />} />
        <Route path="addplaylist" element={<PlaylistCreate />} />
        <Route path="player/:id" element={<Player />} />
        <Route path="addsong/:id" element={<SongAdd />} />
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
