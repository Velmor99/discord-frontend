import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageForm = ({mail, setMail, password, setPassword}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter email adress"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageForm;
