import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="password"
      placeholder="Contraseña"
      value={value}
      onChange={onChange}
      className="input password"
    />
  );
};

export default PasswordInput;
