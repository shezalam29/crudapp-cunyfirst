import {GET_COURSE} from "../actionsandthunks"
 
const initialState = {
    instructor: {},
};

const course = (state = initialState, action) => {
switch (action.type) {
    case GET_COURSE:
        return action.payload;
    default:
        return state;
    }
};

export default course;