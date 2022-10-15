import styled from 'styled-components';
import { StyledCard } from '@/components/UI/Card/StyledCard';

export const StyledCardLogin = styled(StyledCard)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;

  @media (min-width: 768px) {
    .control {
      align-items: center;
      flex-direction: row;
    }
  }
`;

export const StyledFormControl = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
`;

interface InputProps {
  isValid: boolean;
}

export const StyledInput = styled.input<InputProps>`
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-color: ${(props) => (props.isValid ? '#ccc' : 'red')}
  background: ${(props) => (props.isValid ? 'transparent' : '#f6dbfc')}

  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;

export const StyledAlignCenter = styled.div`
  text-align: center;
`;
