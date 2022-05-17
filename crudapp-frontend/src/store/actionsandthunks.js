import axios from "axios";
// ACTION CREATORS
export const getAllInstructors = (instructors) => {
return {
type: GET_ALL_INSTRUCTORS,
payload: instructors,
};
};

export const getInstructor = (instructor) => {
return {
type: GET_INSTRUCTOR,
payload: instructor,
};
};

export const getAllCourses = (courses) => {
return {
type: GET_ALL_COURSES,
payload: courses,
};
};

export const getCourse = (course) => {
return {
type: GET_COURSE,
payload: course,
};
};

export const addCourse = (course) => {
return {
type: ADD_COURSE,
payload: course,
};
};

export const addInstructor = (instructor) => {
return {
type: ADD_INSTRUCTOR,
payload: instructor,
};
};

export const deleteCourse = (courseId) => {
return {
type: DELETE_COURSE,
payload: courseId,
};
};

export const deleteInstructor = (instructorId) => {
return {
type: DELETE_INSTRUCTOR,
payload: instructorId,
};
};

export const editCourse = (course) => {
return {
type: EDIT_COURSE,
payload: course,
};
};

export const editInstructor = (instructor) => {
return {
type: EDIT_INSTRUCTOR,
payload: instructor,
};
};


// THUNK CREATORS 
// res.data us array returned by api endpoint
// payload send to reducer 
export const getAllInstructorsThunk = () => async (dispatch) => {
try {
    let res = await axios.get(`/api/instructors`);
    dispatch(getAllInstructors(res.data));
} catch (err) {
    console.error(err);
}
};

export const getInstructorThunk = (id) => async (dispatch) => {
try {
    let res = await axios.get(`/api/instructors/${id}`);
    dispatch(getInstructor(res.data));
} catch (err) {
    console.error(err);
}
};

export const getAllCoursesThunk = () => async (dispatch) => {
try {
    let res = await axios.get(`/api/courses`);
    dispatch(getAllCourses(res.data));
} catch (err) {
    console.error(err);
}
};

export const getCourseThunk = (id) => async (dispatch) => {
try {
    let res = await axios.get(`/api/courses/${id}`);
    dispatch(getCourse(res.data));
} catch (err) {
    console.error(err);
}
};

export const addCourseThunk = (course) => async (dispatch) => {
try {
    let res = await axios.post(`/api/courses`, course);
    dispatch(addCourse(res.data));
    return res.data;
} catch (err) {
    console.error(err);
}
};


export const addInstructorThunk = (instructor) => async (dispatch) => {
try {
    let res = await axios.post(`/api/instructors`, instructor);
    dispatch(addInstructor(res.data));
    return res.data;
} catch (err) {
    console.error(err);
}
};

export const deleteCourseThunk = (courseId) => async (dispatch) => {
try {
    await axios.delete(`/api/courses/${courseId}`);
    dispatch(deleteCourse(courseId));
} catch (err) {
    console.error(err);
}
};

export const deleteInstructorThunk = (instructorId) => async (dispatch) => {
try {
    await axios.delete(`/api/instructors/${instructorId}`);
    dispatch(deleteInstructor(instructorId));
} catch (err) {
    console.error(err);
}
};

export const editCourseThunk = (course) => async (dispatch) => {
try {
    let updatedCourse = await axios.put(`/api/courses/${course.id}`, course);
    dispatch(editCourse(updatedCourse));
} catch (err) {
    console.error(err);
}
};

export const editInstructorThunk = (instructor) => async (dispatch) => {
try {
    let updatedInstructor = await axios.put(`/api/instructors/${instructor.id}`, instructor);
    dispatch(editInstructor(updatedInstructor));
} catch (err) {
    console.error(err);
}
};


// ACTION TYPES
export const GET_ALL_INSTRUCTORS = "GET_ALL_INSTRUCTORS";
export const ADD_INSTRUCTOR = "ADD_INSTRUCTOR";
export const DELETE_INSTRUCTOR = "DELETE_INSTRUCTOR";
export const EDIT_INSTRUCTOR = "EDIT_INSTRUCTOR";
export const GET_INSTRUCTOR = "GET_INSTRUCTOR";
export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const ADD_COURSE = "ADD_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const EDIT_COURSE = "EDIT_COURSE";
export const GET_COURSE = "GET_COURSE";