import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [displayedUsername, setDisplayedUsername] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setDisplayedUsername(value); 
  };

  const handleRegister = () => {
    if (username.trim() === "" || /[oO]/.test(username)) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Ingrese su username"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{displayedUsername}</p> 
    </div>
  );
};

export default Login;
