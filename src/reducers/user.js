const initialState = {
  status: 'NOT_CONNECTED',
  user: {},
  error: 'NO_ERROR',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN': return { ...state, status: 'CONNECTED', user: action.payload.data.user };
    case 'LOGGED_OUT': return { ...state, status: 'NOT_CONNECTED', user: {} };
    case 'LOGGED_IN_ERROR': return { ...state, error: 'Something Went Wrong', user: {} };
    default: return state;
  }
};

export default user;
