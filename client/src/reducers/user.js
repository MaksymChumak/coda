import types from '../types/user';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user || {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return { ...state, ...action.payload };
    case types.SIGNUP_FAILURE:
      return { ...state, error: action.payload };

    case types.LOGIN_SUCCESS:
      return { ...action.payload };
    case types.LOGIN_FAILURE:
      return { ...state, error: action.payload };

    case types.LOGOUT_SUCCESS:
      return {};
    case types.LOGOUT_FAILURE:
      return { ...state, error: action.payload };

    case types.FETCH_USER_SUCCESS:
      return { ...state, ...action.payload };
    case types.FETCH_USER_FAILURE:
      return {};

    default:
      return state;
  }
};

export default userReducer;
