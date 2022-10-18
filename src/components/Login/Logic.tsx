export const emailRegEx =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

interface ReducerEmailPasswordState {
  value: string;
  isValid: boolean;
}

export enum ReducerEmailPasswordActionTypes {
  USER_INPUT = 'USER_INPUT',
  INPUT_BLUR = 'INPUT_BLUR',
}

interface ReducerEmailPasswordAction {
  type: ReducerEmailPasswordActionTypes;
  payload: string;
}

export const emailReducer = (
  state: ReducerEmailPasswordState,
  action: ReducerEmailPasswordAction
): ReducerEmailPasswordState => {
  switch (action.type) {
    case ReducerEmailPasswordActionTypes.USER_INPUT:
      return {
        value: action.payload,
        isValid: !!action.payload.match(emailRegEx),
      };

    case ReducerEmailPasswordActionTypes.INPUT_BLUR:
      return { value: state.value, isValid: !!state.value.match(emailRegEx) };

    default:
      return { value: '', isValid: false };
  }
};

export const passwordReducer = (
  state: ReducerEmailPasswordState,
  action: ReducerEmailPasswordAction
): ReducerEmailPasswordState => {
  switch (action.type) {
    case ReducerEmailPasswordActionTypes.USER_INPUT:
      return {
        value: action.payload,
        isValid: action.payload.length >= 8,
      };
    case ReducerEmailPasswordActionTypes.INPUT_BLUR:
      return {
        value: state.value,
        isValid: state.value.length >= 8,
      };

    default:
      return { value: '', isValid: false };
  }
};
