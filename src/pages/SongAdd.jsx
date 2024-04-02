import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";
import { addSongToPLaylist, getPlaylist } from "../services/playlist";
import { useAppContext } from "../AppContextProvider";
import { createMusic } from "../services/music";

const SongAdd = () => {
  const { id } = useParams();
  const { data } = useAppContext();
  const [playlist, setPLaylist] = useState({ name: "", uuid: id });
  const navigate = useNavigate();

  useEffect(() => {
    async function getPLaylistInfo() {
      try {
        const response = await getPlaylist(id, data.token);
        console.log(response);
        setPLaylist(response.data);
      } catch (error) {
        console.log("erro ao pegar info da playlist", error);
      }
    }

    getPLaylistInfo();
  }, []);

  const handleSongAdd = async (event) => {
    event.preventDefault();
    try {
      const { name, url, artist } = event.target;

      const songData = {
        name: name.value,
        duration: "PT3M30S",
        url: url.value,
        artist: {
          uuid: artist.value
        }
      };

      const response = await createMusic(songData, data.token);

      const addSongResponse = await addSongToPLaylist(
        id,
        response.data.uuid,
        data.token
      );

      console.log("add musica", addSongResponse);

      navigate(`/player/${id}`);
    } catch (error) {
      alert("Erro ao cadastrar música");

      console.log("erro ao cadastrar musica", error);

      if (error.response) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSongAdd}>
        <Title title="Adicionar música" subtitle={playlist.name} />

        <Spacer />

        <input
          className="input"
          placeholder="Nome da música"
          type="text"
          maxLength={120}
          name="name"
          required
        />

        <Spacer />

        <input
          className="input"
          placeholder="Artista"
          type="text"
          name="artist"
          value="b971a525-9d23-4bf3-85f5-82e05ef939ea"
          required
        />

        <Spacer />

        <input
          className="input"
          placeholder="Código Youtube"
          type="text"
          name="url"
          required
        />

        <Spacer />

        <button className="btn btnPrimary" type="submit">
          Adicionar música
        </button>

        <Spacer size={2} />

        <hr />

        <Link to={`/player/${playlist.uuid}`}>
          <button className="btn btnPrimary">Voltar</button>
        </Link>
      </form>
    </div>
  );
};

export default SongAdd;
