import { Link, useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Spacer } from "../components/Spacer";
import { signup } from "../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, passwordRepeat, username } = event.target;

    if (password.value !== passwordRepeat.value) {
      alert("Senha e repita sua senha não são iguais");
      return;
    }

    try {
      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
        username: username.value
      };

      await signup(newUser);

      alert("Cadastro realizado com sucesso!");
      // redirecionar o usuário pra tela de login
      navigate("/login");
    } catch (error) {
      alert("Erro ao efetuar seu cadastro, verifique os dados informados.");

      console.log("Erro de cadastro", error);

      if (error.response) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Spacer size={2} />

        <Title
          title="Vamos criar uma conta"
          subtitle="Preencha os dados abaixo"
        />

        <Spacer size={2} />

        <input
          className="input"
          placeholder="Nome Completo"
          type="text"
          maxLength={120}
          name="name"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="E-mail"
          type="email"
          maxLength={120}
          name="email"
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

        <input
          className="input"
          placeholder="Repita sua senha"
          type="password"
          maxLength={15}
          name="passwordRepeat"
          required
        />

        <Spacer size={1} />

        <input
          className="input"
          placeholder="Nome de usuário"
          type="text"
          maxLength={30}
          name="username"
          required
        />

        <Spacer size={1} />

        <button className="btn btnPrimary" type="submit">
          Criar conta
        </button>

        <Spacer size={2} />

        <hr />

        <Link to="/login">
          <button className="btn btnPrimary">Voltar para Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
