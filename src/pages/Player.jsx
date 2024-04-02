import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Title } from "../components/Title";
import { YouTubePlayer } from "../components/YoutubePlayer";
import { Spacer } from "../components/Spacer";

import styles from "./Player.module.css";
import { getPlaylist } from "../services/playlist";
import { useAppContext } from "../AppContextProvider";

export default function Player() {
  const { id } = useParams();
  const [songPosition, setSongPosition] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  const { data } = useAppContext();

  useEffect(() => {
    async function getPlaylistInfo() {
      try {
        const response = await getPlaylist(id, data.token);
        console.log("response", response);
        setPlaylist(response.data);
      } catch (error) {
        console.log("getPlaylist Error", error);
      }
    }

    getPlaylistInfo();
  }, []);

  const handleForward = () => {
    if (songPosition === playlist.musics.length - 1) {
      return;
    }

    setSongPosition(songPosition + 1);
  };

  const handleReverse = () => {
    if (songPosition === 0) {
      return;
    }

    setSongPosition(songPosition - 1);
  };

  // TODO 01: criar uma visualização caso a playlist não seja encontrada
  // exemplo: uuid 250 não foi encontrado
  // Utilize renderização condicional

  // TODO 02: criar uma visualização caso a playlist esteja vazia
  // exemplo: uuid == 1 mas o objeto songs está vazio (length === 0)
  // Utilize renderização condicional

  return (
    <>
      {!playlist.musics && <div>Carregando...</div>}

      {playlist.musics && playlist.musics.length === 0 && (
        <div>
          Nenhuma música cadastrada na playlist <strong>{playlist.name}</strong>
        </div>
      )}

      {playlist.musics && playlist.musics.length > 0 && (
        <>
          <Title
            title={playlist.name}
            subtitle={`${playlist.musics.length} músicas`}
          />

          <Spacer />

          <YouTubePlayer videoId={playlist.musics[songPosition].url} />

          <Title
            title={playlist.musics[songPosition].name}
            subtitle={playlist.musics[songPosition].artist.name}
          />

          <div className={styles.musicControl}>
            <Spacer />
            <strong>{`Música ${songPosition + 1} de ${
              playlist.musics.length
            }`}</strong>

            <div>
              <button
                disabled={songPosition === 0}
                className={`${styles.btnControl} ${styles.reverse}`}
                onClick={handleReverse}
              >
                <img
                  src="https://files.jaison.com.br/atitusound/reverse.svg"
                  alt=""
                />
              </button>

              <button
                disabled={songPosition === playlist.musics.length - 1}
                className={`${styles.btnControl} ${styles.forward}`}
                onClick={handleForward}
              >
                <img
                  src="https://files.jaison.com.br/atitusound/forward.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </>
      )}

      <Spacer />

      <Link to={`/addsong/${id}`}>
        <button className="btn btnPrimary">Adicionar música</button>
      </Link>
    </>
  );
}
