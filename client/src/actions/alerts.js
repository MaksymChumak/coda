import types from '../types/alert';

const success = (message) => {
  return { type: types.SUCCESS, message };
}

const error = (message) => {
  return { type: types.ERROR ,message };
}

const clear = () => {
  return { type: types.CLEAR };
}

export const alertActions = {
  success,
  error,
  clear
};