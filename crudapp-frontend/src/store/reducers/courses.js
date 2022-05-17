import * as at from "../actionsandthunks"

// initial state has courses as empty 
// after action GET_ALL_COURSES
// state will have data from api
const allCourses = (state=[], action) => {
switch (action.type) {
    case at.GET_ALL_COURSES:
        return action.payload;
    case at.ADD_COURSE:
        return [...state, action.payload]
    case at.DELETE_COURSE:
        return state.filter(course => course.id!==action.payload);
    case at.EDIT_COURSE:
        return state.map(course => { 
            return (
            course.id===action.payload.id ? action.payload : course
            );
        });
    default:
        return state;
}
};

export default allCourses;