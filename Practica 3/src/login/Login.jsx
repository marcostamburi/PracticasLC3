import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState("");

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    if (inputValue.includes("o") || inputValue.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUser(inputValue);
  };

  const registerHandler = () => {
    if (user.trim() === "" || user.includes("o") || user.includes("O")) {
      alert("Usuario inválido para la registración");
    } else {
      alert("Usuario registrado correctamente");
    }
  };

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        value={user}
        onChange={inputChangeHandler}
      />
      <button onClick={registerHandler}>Registrarse</button>
      <p>{user}</p>
    </div>
  );
};

export default Login;
