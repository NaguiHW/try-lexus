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
