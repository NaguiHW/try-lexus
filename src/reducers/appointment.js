const initialState = {
  user_name: '',
  user_id: null,
  car_name: '',
  car_id: null,
  appointmentStatus: 'NOT_CREATED',
  appointments: [],
};

const appointment = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA': return {
      ...state,
      user_name: `${action.payload.user.first_name} ${action.payload.user.last_name}`,
      user_id: action.payload.user.id,
      car_name: action.payload.car.name,
      car_id: action.payload.car.id,
    };
    case 'BOOK_APPOINTMENT': return {
      ...state,
      appointmentStatus: 'CREATED',
    };
    case 'LOAD_APPOINTMENTS': return {
      ...state,
      appointmentStatus: 'NOT_CREATED',
      appointments: action.payload,
    };
    default: return state;
  }
};

export default appointment;
