import React, { Component } from "react";
import { connect } from "react-redux";
import { getInstructorThunk, deleteInstructorThunk, editInstructorThunk, editCourseThunk} from "../../store/actionsandthunks";
import { SingleInstructorView } from "../views"

class SingleInstructorContainer extends Component {
  componentDidMount() {
    this.props.getInstructor(this.props.match.params.id);
  }

  removeCourse = async id => {
    let course = {
      id: id,
      instructorId: null
    }
    this.props.editCourse(course);
    this.props.getInstructor(this.props.match.params.id);
  }

  render() {
    return (
        <SingleInstructorView
        instructor={this.props.instructor}
        removeCourse = {this.removeCourse}
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
  };
};

export default connect(mapState, mapDispatch)(SingleInstructorContainer);