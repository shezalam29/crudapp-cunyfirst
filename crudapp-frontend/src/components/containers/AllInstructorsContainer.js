import { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllInstructorsThunk, deleteInstructorThunk } from '../../store/actionsandthunks';
import { AllInstructorsView } from "../views"

class AllInstructorsContainer extends Component {
    componentDidMount() {
        this.props.getAllInstructors();
      }

    render() {
      return (
      <AllInstructorsView
      allInstructors={this.props.allInstructors}
      deleteInstructor={this.props.deleteInstructor}
    />
    );
    }
}

function mapState(state) {
    return {
        allInstructors: state.allInstructors,
    };
};

function mapDispatch(dispatch){
    return {
        getAllInstructors: () => dispatch(getAllInstructorsThunk()),
        deleteInstructor: (instructorid) => dispatch(deleteInstructorThunk(instructorid)),
    };
};

export default withRouter(connect(mapState,mapDispatch)(AllInstructorsContainer))