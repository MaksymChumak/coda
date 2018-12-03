import types from '../types/user';
import { history } from '../store';
import { userService } from '../services/user';


export const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: types.LOGIN_REQUEST, user } }
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
}

export const logout = () => {
    userService.logout();
    return { type: types.LOGOUT };
}

export const register = (user) => {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
        .then(
            user => {
                dispatch(success());
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(user) { return { type: types.REGISTER_REQUEST, user } }
    function success(user) { return { type: types.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: types.REGISTER_FAILURE, error } }
}
