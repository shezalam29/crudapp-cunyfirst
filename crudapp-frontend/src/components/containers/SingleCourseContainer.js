import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourseThunk, deleteCourseThunk, editCourseThunk, } from "../../store/actionsandthunks";
import { SingleCourseView } from "../views"

class SingleCourseContainer extends Component {
  componentDidMount() {
    this.props.getCourse(this.props.match.params.id);
  }

  render() {
    return (
      <SingleCourseView
        course={this.props.course}
        deleteInstructor={this.props.deleteInstructor}
        deleteCourse={this.props.deleteCourse}
        editCourse={this.props.editCourse}
      /> 
    );
  }
}

const mapState = (state) => {
  return {
    course: state.course,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCourse: (id) => dispatch(getCourseThunk(id)),
    deleteCourse: (courseId) => dispatch(deleteCourseThunk(courseId)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
  };
};

export default connect(mapState, mapDispatch)(SingleCourseContainer);