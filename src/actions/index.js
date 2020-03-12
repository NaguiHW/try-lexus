import Axios from 'axios';

export const CHECK_STATUS = () => dispatch => {
  Axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        dispatch({ type: 'LOGGED_IN', payload: response });
      } else if (!response.data.logged_in) {
        dispatch({ type: 'LOGGED_OUT', response });
      }
    })
    .catch(error => {
      dispatch({ type: 'LOGGED_IN_ERROR', error });
    });
};

export const LOGIN = userData => dispatch => {
  const user = {
    email: userData.email,
    password: userData.password,
  };
  Axios.post('http://localhost:3000/sessions', { user }, { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        dispatch({ type: 'LOGGED_IN', payload: response });
      }
    })
    .catch(error => {
      dispatch({ type: 'LOGGED_IN_ERROR', error });
    });
};

export const LOGOUT = () => dispatch => {
  Axios.delete('http://localhost:3000/logout', { withCredentials: true })
    .then(response => {
      dispatch({ type: 'LOGGED_OUT', response });
    })
    .catch(error => {
      dispatch({ type: 'LOGGED_OUT_ERROR', error });
    });
};

export const CREATE_ACCOUNT = userData => dispatch => {
  const user = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    password: userData.password,
    password_confirmation: userData.passwordConfirmation,
  };
  Axios.post('http://localhost:3000/registrations', { user }, { withCredentials: true })
    .then(response => {
      if (response.data.status === 'created') {
        dispatch({ type: 'LOGGED_IN', payload: response });
      }
    })
    .catch(error => {
      console.log("Error: ", error);
    });
};
