import Axios from 'axios';

export const CHECK_STATUS = () => dispatch => {
  Axios.get('http://localhost:3030/logged_in', { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        dispatch({ type: 'LOGGED_IN', payload: response });
      } else if (!response.data.logged_in) {
        dispatch({ type: 'LOGGED_OUT', response });
      }
    })
    .catch(error => {
      dispatch({ type: 'USER_ERROR', error });
    });
};

export const LOGIN = userData => dispatch => {
  const user = {
    email: userData.email,
    password: userData.password,
  };
  Axios.post('http://localhost:3030/sessions', { user }, { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        dispatch({ type: 'LOGGED_IN', payload: response });
      } else {
        dispatch({ type: 'LOGIN_ERROR' });
      }
    })
    .catch(error => {
      dispatch({ type: 'USER_ERROR', error });
    });
};

export const LOGOUT = () => dispatch => {
  Axios.delete('http://localhost:3030/logout', { withCredentials: true })
    .then(response => {
      dispatch({ type: 'LOGGED_OUT', response });
    })
    .catch(error => {
      dispatch({ type: 'USER_ERROR', error });
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
  Axios.post('http://localhost:3030/registrations', { user }, { withCredentials: true })
    .then(response => {
      if (response.data.status === 'created') {
        dispatch({ type: 'LOGGED_IN', payload: response });
      }
    })
    .catch(error => {
      dispatch({ type: 'CREATE_ACCOUNT_ERROR', error });
    });
};

export const RESET_ERROR = () => ({
  type: 'RESET_ERROR',
});

export const GET_CARS = type => dispatch => {
  Axios.get(`http://localhost:3030/cars/${type}`)
    .then(response => {
      dispatch({ type: 'GET_CARS', payload: response.data.cars });
    })
    .catch(error => {
      dispatch({ type: 'GET_CAR_ERROR', error });
    });
};

export const GET_CAR = id => dispatch => {
  Axios.get(`http://localhost:3030/car/${id}`)
    .then(response => {
      dispatch({ type: 'GET_CAR', payload: response.data.car });
    })
    .catch(error => {
      dispatch({ type: 'GET_CAR_ERROR', error });
    });
};

export const ADD_DATA_APPOINTMENT = (user, car) => ({
  type: 'ADD_DATA',
  payload: { user, car },
});

export const BOOK_APPOINTMENT = bookData => dispatch => {
  Axios.post('http://localhost:3030/appointments', bookData, { withCredentials: true })
    .then(response => {
      dispatch({ type: 'BOOK_APPOINTMENT', response });
    });
};

export const LOAD_APPOINTMENTS = id => dispatch => {
  Axios.get(`http://localhost:3030/appointments/${id}`, { withCredentials: true })
    .then(response => {
      dispatch({ type: 'LOAD_APPOINTMENTS', payload: response.data.appointments });
    });
};
