import { Link, useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";
import { signin } from "../services/auth";
import { useAppContext } from "../AppContextProvider";

const Login = () => {
  const { setData } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = event.target;

    try {
      const userLogin = {
        username: username.value,
        password: password.value
      };

      const response = await signin(userLogin);

      console.log("Resposta do servidor", response);

      setData({
        isLogged: true,
        token: response.data
      });

      navigate("/playlists");
    } catch (error) {
      // não conseguiu efetuar login
      alert("Erro ao efetuar login. Verifique suas credenciais.");
      console.log("Erro de login:", error);

      if (error.response) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Spacer size={3} />

        <Title title="Seja bem-vindo" subtitle="Faça o login abaixo" />

        <Spacer size={2} />

        <input
          className="input"
          placeholder="Nome de usuário"
          type="text"
          maxLength={120}
          name="username"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="Sua senha"
          type="password"
          maxLength={15}
          name="password"
          required
        />

        <Spacer size={1} />

        <button className="btn btnPrimary" type="submit">
          Acessar
        </button>

        <Spacer size={2} />

        <hr />

        <Link to="/register">
          <button className="btn btnPrimary">Criar conta</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
