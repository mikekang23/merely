import { ADD_DASHBOARD } from "../actionTypes";

const initialState = {
  allDashboards: []
};

export default function(state = initialState, action){
  switch (action.type){
    case ADD_DASHBOARD: {
      const { content } = action.payload;
      return {
        ...state,
        allDashboards: [
          ...state.allDashboards,
          {
            id: 3,
            name: content,
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        ]
      }
    }
    default: {
      return state;
    }
  }
}
