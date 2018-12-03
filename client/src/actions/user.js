import { SubmissionError } from 'redux-form';
import types from '../types/user';

import api from '../utils/api';
import { history } from '../store';

export const login = (values, dispatch) => (
  api.post('/auth/login', {
    user: values,
  })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));

      return dispatch({type: types.LOGIN_SUCCESS, payload: response.data});
    })
    .catch((error) => {
      dispatch({type: types.LOGIN_FAILURE});
      throw new SubmissionError({
        _error: error.response.data.error,
      });
    })
);


export const logout = () => dispatch => (
  api.delete('/auth/logout')
    .then(() => {
      localStorage.removeItem('user');
      history.push('/');
      return dispatch({type: types.LOGOUT_SUCCESS});
    })
    .catch(error => dispatch({type: types.LOGOUT_FAILURE, payload: error}))
);