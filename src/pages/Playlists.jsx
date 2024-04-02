import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardItem } from "../components/CardItem";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";

import { useAppContext } from "../AppContextProvider";
import { getPlaylists } from "../services/playlist";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const { data } = useAppContext();

  useEffect(() => {
    async function getPlaylistsOnLoad() {
      try {
        const response = await getPlaylists(data.token);

        setPlaylists(response.data.content);
      } catch (error) {
        alert("Não foi possível buscar as playlists do usuário");
        console.log(error);

        if (error.response) {
          console.log(error.response.status);
        }
      }
    }

    getPlaylistsOnLoad();
  }, []); // dispara um código no load do componente

  return (
    <>
      <Title title="Minhas playlists" />

      <Spacer />

      {playlists.map((item) => (
        <CardItem
          linkTo={`/player/${item.uuid}`}
          title={item.name}
          key={item.uuid}
        />
      ))}

      <Link to="/addplaylist">
        <button style={{ width: 180 }} className="btn btnPrimary">
          Criar playlist
        </button>
      </Link>
    </>
  );
};

export default Playlists;
