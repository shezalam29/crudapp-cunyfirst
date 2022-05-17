import {GET_INSTRUCTOR} from "../actionsandthunks";

const initialState = {
    courses:[]
  };

const instructor = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTOR:
      return action.payload;
    default:
      return state;
  }
};

export default instructor;