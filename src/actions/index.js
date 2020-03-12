import Axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const CHECK_STATUS = () => dispatch => {
  Axios.get('http://localhost:3000', { withCredentials: true })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
