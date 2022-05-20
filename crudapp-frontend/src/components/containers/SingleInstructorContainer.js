import React, { Component } from "react";
import { connect } from "react-redux";
import { getInstructorThunk, deleteInstructorThunk, editInstructorThunk, editCourseThunk, getAllCoursesThunk} from "../../store/actionsandthunks";
import { SingleInstructorView } from "../views"

class SingleInstructorContainer extends Component {
  componentDidMount() {
    this.props.getInstructor(this.props.match.params.id);
    this.props.getCourses();
  }

  render() {
    return (
        <SingleInstructorView
        instructor={this.props.instructor}
        removeCourse = {this.removeCourse}
        editCourse={this.props.editCourse}
        allCourses = {this.props.allCourses}
        deleteInstructor={this.props.deleteInstructor}
        deleteCourse={this.props.deleteCourse}
        editInstructor={this.props.editInstructor}
        />
    );
  }
}

const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses
  };
};

const mapDispatch = (dispatch) => {
  return {
    getInstructor: (id) => dispatch(getInstructorThunk(id)),
    deleteInstructor: (instructorId) => dispatch(deleteInstructorThunk(instructorId)),
    editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
    getCourses: () => dispatch(getAllCoursesThunk()),
  };
};

export default connect(mapState, mapDispatch)(SingleInstructorContainer);