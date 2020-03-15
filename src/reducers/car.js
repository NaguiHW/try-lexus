const initialState = {
  cars: [],
};

const car = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARS': return { ...state, cars: action.payload };
    default: return state;
  }
};

export default car;
