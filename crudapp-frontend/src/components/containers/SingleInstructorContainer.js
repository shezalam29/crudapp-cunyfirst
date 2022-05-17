import React, { Component } from "react";
import { connect } from "react-redux";
import { getInstructorThunk, deleteInstructorThunk, editInstructorThunk,} from "../../store/actionsandthunks";
import { SingleInstructorView } from "../views"

class SingleInstructorContainer extends Component {
  componentDidMount() {
    this.props.getInstructor(this.props.match.params.id);
  }

  render() {
    return (
        <SingleInstructorView
        instructor={this.props.instructor}
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    getInstructor: (id) => dispatch(getInstructorThunk(id)),
    deleteInstructor: (instructorId) => dispatch(deleteInstructorThunk(instructorId)),
    editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
  };
};

export default connect(mapState, mapDispatch)(SingleInstructorContainer);