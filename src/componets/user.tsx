import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Usuario"
      value={value}
      onChange={onChange}
      className="input username"
    />
  );
};

export default UsernameInput;
