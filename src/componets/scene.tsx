import React, { useState } from "react";
import { Scene, Entity } from "aframe-react";
import UsernameInput from "./user";
import PasswordInput from "./pass";
import LoginButton from "./logbt";

const LoginScene: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div className="scene-container">
      
      <Scene>
       
        <Entity
          primitive="a-sky"
          src="/img360.jpg"  
          rotation="0 -90 0"
        />

        
        <Entity primitive="a-camera" wasd-controls look-controls />
      </Scene>

    
      <div className="overlay">
        <UsernameInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginScene;
