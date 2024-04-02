import { Link, useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";
import { useAppContext } from "../AppContextProvider";
import { createPlaylist } from "../services/playlist";

const PlaylistCreate = () => {
  const { data } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { name, publicOrPrivate } = event.target;

      const playlistObject = {
        name: name.value,
        public_share: publicOrPrivate.value ? true : false
      };

      await createPlaylist(playlistObject, data.token);
      navigate("/playlists");
    } catch (error) {
      alert("Erro ao cadastrar playlist!");

      console.log("Error", error);

      if (error.response) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Title title="Crie sua playlist" subtitle="Preencha os campos abaixo" />

        <Spacer />

        <input
          className="input"
          placeholder="Nome da playlist"
          type="text"
          maxLength={120}
          name="name"
          required
        />

        <input type="hidden" name="publicOrPrivate" value={true} />

        <Spacer size={1} />

        <button className="btn btnPrimary" type="submit">
          Criar playlist
        </button>

        <Spacer size={2} />

        <hr />

        <Link to="/playlists">
          <button className="btn btnPrimary">Voltar</button>
        </Link>
      </form>
    </div>
  );
};

export default PlaylistCreate;
