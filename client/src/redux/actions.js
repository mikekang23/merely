import { ADD_DASHBOARD } from './actionTypes';

export const addDashboard = (name) => {
  return {
    type: ADD_DASHBOARD,
    payload: {
      name
    }
  }
};
