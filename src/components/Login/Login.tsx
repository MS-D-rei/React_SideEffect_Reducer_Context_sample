import { useContext, useEffect, useReducer, useState } from 'react';
import {
  StyledCardLogin,
  StyledLabel,
  StyledInput,
  StyledFormControl,
  StyledAlignCenter,
} from '@/components/Login/Style';
import { StyledButton } from '@/components/UI/Button/StyledButton';
import {
  ReducerEmailPasswordActionTypes,
  emailReducer,
  passwordReducer,
} from '@/components/Login/Logic';
import { useAuthCtx } from '@/store/auth-context';

function Login() {
  // const [emailPassword, setEmailPassword] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [isValidEmail, setIsValidEmail] = useState(false);
  // const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setIsValidForm(
  //       !!emailPassword.email.match(emailRegEx) &&
  //         emailPassword.password.length >= 8
  //     );
  //     console.log('setTimeout works');
  //   }, 500);

  //   return () => {
  //     clearTimeout(identifier);
  //     console.log('Clean up');
  //   };
  // }, [emailPassword]);
  
  const { isValid: isValidEmail } = emailState;
  const { isValid: isValidPassword } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsValidForm(isValidEmail && isValidPassword);
      console.log('setTimeout works');
    }, 500);

    return () => {
      clearTimeout(identifier);
      console.log('Clean up');
    };
  }, [isValidEmail, isValidPassword])

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setEmailPassword((prevState) => ({
    //   ...prevState,
    //   email: event.target.value,
    // }));
    dispatchEmail({
      type: ReducerEmailPasswordActionTypes.USER_INPUT,
      payload: event.target.value,
    });
    // setIsValidForm(
    //   !!event.target.value.match(emailRegEx) &&
    //     emailPassword.password.trim().length >= 8
    // );
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // setEmailPassword((prevState) => ({
    //   ...prevState,
    //   password: event.target.value,
    // }));
    dispatchPassword({
      type: ReducerEmailPasswordActionTypes.USER_INPUT,
      payload: event.target.value,
    });
    // setIsValidForm(
    //   !!emailPassword.email.match(emailRegEx) &&
    //     event.target.value.trim().length >= 8
    // );
  };

  const validateEmailHandler = () => {
    // setIsValidEmail(!!emailPassword.email.match(emailRegEx));
    dispatchEmail({
      type: ReducerEmailPasswordActionTypes.INPUT_BLUR,
      payload: '',
    });
  };

  const validatePasswordHandler = () => {
    // setIsValidPassword(emailPassword.password.trim().length >= 8);
    dispatchPassword({
      type: ReducerEmailPasswordActionTypes.INPUT_BLUR,
      payload: '',
    });
  };

  const authCtx = useAuthCtx();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // props.onLogin(emailPassword.email, emailPassword.password);
    authCtx.onLogin?.(emailState.value, passwordState.value);
  };

  return (
    <StyledCardLogin>
      <form onSubmit={submitHandler}>
        <StyledFormControl>
          <StyledLabel htmlFor="email">E-Mail</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            value={emailState.value}
            isValid={emailState.isValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </StyledFormControl>
        <StyledFormControl>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            value={passwordState.value}
            isValid={passwordState.isValid}
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
