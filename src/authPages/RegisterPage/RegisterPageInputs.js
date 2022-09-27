import React from "react";
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({
  mail,
  setMail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return <>
    <InputWithLabel 
    value={mail}
    setValue={setMail}
    label="E-mail adress"
    type="text"
    placeholder="Enter e-mail adress"
    />
    <InputWithLabel 
    value={username}
    setValue={setUsername}
    label="Username"
    type="text"
    placeholder="Enter username"
    />
    <InputWithLabel 
    value={password}
    setValue={setPassword}
    label="Password"
    type="text"
    placeholder="Enter password"
    />
  </>;
};

export default RegisterPageInputs
