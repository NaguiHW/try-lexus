const initialState = {
  cars: [],
  car: {},
};

const car = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARS': return { ...state, cars: action.payload };
    case 'GET_CAR': return { ...state, car: action.payload };
    default: return state;
  }
};

export default car;
