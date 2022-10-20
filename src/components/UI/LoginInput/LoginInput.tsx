import React, { useEffect, useRef } from 'react';
import {
  StyledFormControl,
  StyledInput,
  StyledLabel,
} from '@/components/Login/Style';

type InputRef = HTMLInputElement;

interface LoginInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  isValid: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const LoginInput = React.forwardRef<InputRef, LoginInputProps>(
  ({ label, type, id, value, isValid, onChange, onBlur }, ref) => {
    return (
      <StyledFormControl>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput
          ref={ref}
          type={type}
          id={id}
          value={value}
          isValid={isValid}
          onChange={onChange}
          onBlur={onBlur}
        />
      </StyledFormControl>
    );
  }
);

export default LoginInput;
