import React from "react";

interface Props {
  onClick: () => void;
}

const LoginButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="login-button" onClick={onClick}>
      Ingresar
    </button>
  );
};

export default LoginButton;
