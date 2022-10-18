export const emailRegEx =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export interface ReducerEmailState {
  value: string;
  isValid: boolean;
}

export enum ReducerEmailActionTypes {
  USER_INPUT = 'USER_INPUT',
  INPUT_BLUR = 'INPUT_BLUR',
}

export interface ReducerEmailAction {
  type: ReducerEmailActionTypes;
  payload: string;
}

export const emailReducer = (state: ReducerEmailState, action: ReducerEmailAction): ReducerEmailState => {
  switch (action.type) {
    case ReducerEmailActionTypes.USER_INPUT:
      return {
        value: action.payload,
        isValid: !!action.payload.match(emailRegEx),
      };

    case ReducerEmailActionTypes.INPUT_BLUR:
      return { value: state.value, isValid: !!state.value.match(emailRegEx) };
    
    default:
      return { value: '', isValid: false }
  }
};
