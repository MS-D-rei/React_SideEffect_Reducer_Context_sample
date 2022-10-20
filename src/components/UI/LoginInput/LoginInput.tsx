import React from 'react';
import {
  StyledFormControl,
  StyledInput,
  StyledLabel,
} from '@/components/Login/Style';

interface LoginInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  isValid: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

function LoginInput({
  label,
  type,
  id,
  value,
  isValid,
  onChange,
  onBlur,
}: LoginInputProps) {
  return (
    <StyledFormControl>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
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

export default LoginInput;
