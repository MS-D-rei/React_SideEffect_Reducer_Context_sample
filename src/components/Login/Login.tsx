import { useEffect, useState } from 'react';
import {
  StyledCardLogin,
  StyledLabel,
  StyledInput,
  StyledFormControl,
  StyledAlignCenter,
} from '@/components/Login/Style';
import { StyledButton } from '@/components/UI/Button/StyledButton';

function Login(props: { onLogin: Function }) {
  const [emailPassword, setEmailPassword] = useState({
    email: '',
    password: '',
  });
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsValidForm(
        !!emailPassword.email.match(emailRegEx) &&
          emailPassword.password.length >= 8
      );
      console.log('setTimeout works');
    }, 500);

    
    return () => {
      clearTimeout(identifier);
      console.log('Clean up');
    };
  }, [emailPassword]);

  const emailRegEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailPassword((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
    // setIsValidForm(
    //   !!event.target.value.match(emailRegEx) &&
    //     emailPassword.password.trim().length >= 8
    // );
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailPassword((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
    // setIsValidForm(
    //   !!emailPassword.email.match(emailRegEx) &&
    //     event.target.value.trim().length >= 8
    // );
  };

  const validateEmailHandler = () => {
    setIsValidEmail(!!emailPassword.email.match(emailRegEx));
    // setIsValidForm(isValidEmail && isValidPassword);
  };

  const validatePasswordHandler = () => {
    setIsValidPassword(emailPassword.password.trim().length >= 8);
    // setIsValidForm(isValidEmail && isValidPassword);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onLogin(emailPassword.email, emailPassword.password);
  };

  return (
    <StyledCardLogin>
      <form onSubmit={submitHandler}>
        <StyledFormControl>
          <StyledLabel htmlFor="email">E-Mail</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            value={emailPassword.email}
            isValid={isValidEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </StyledFormControl>
        <StyledFormControl>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            value={emailPassword.password}
            isValid={isValidPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </StyledFormControl>
        <StyledAlignCenter>
          <StyledButton disabled={!isValidForm}>Login</StyledButton>
        </StyledAlignCenter>
      </form>
    </StyledCardLogin>
  );
}

export default Login;
