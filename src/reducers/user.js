const initialState = {
  status: 'NOT_CONNECTED',
  user: {},
  error: 'NO_ERROR',
  errorMessage: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN': return { ...state, status: 'CONNECTED', user: action.payload.data.user };
    case 'LOGGED_OUT': return { ...state, status: 'NOT_CONNECTED', user: {} };
    case 'LOGIN_ERROR': return { ...state, errorMessage: 'Email or password incorrect' };
    case 'CREATE_ACCOUNT_ERROR': return { ...state, errorMessage: 'It was an error. Please check your information' };
    case 'RESET_ERROR': return { ...state, errorMessage: '' };
    case 'USER_ERROR': return { ...state, error: 'Something Went Wrong', user: {} };
    default: return state;
  }
};

export default user;
