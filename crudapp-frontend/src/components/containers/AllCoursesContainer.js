import { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllCoursesThunk, deleteCourseThunk } from '../../store/actionsandthunks';
import { AllCoursesView } from "../views"

class AllCoursesContainer extends Component {
    componentDidMount() {
        this.props.getAllCourses();
      }

    render() {
      return (
      <AllCoursesView
      allCourses={this.props.allCourses}
      deleteCourse={this.props.deleteCourse}
    />
    );
    }
}

function mapState(state) {
    return {
        allCourses: state.allCourses,
    };
};

function mapDispatch(dispatch){
    return {
        getAllCourses: () => dispatch(getAllCoursesThunk()),
        deleteCourse: (instructorId) => dispatch(deleteCourseThunk(instructorId)),
    };
};

export default withRouter(connect(mapState,mapDispatch)(AllCoursesContainer))