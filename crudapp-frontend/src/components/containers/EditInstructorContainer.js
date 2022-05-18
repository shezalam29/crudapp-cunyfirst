import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  EditInstructorView  from '../views/EditInstructorView';
import { editInstructorThunk, getInstructorThunk} from '../../store/actionsandthunks';

class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "", 
          imageUrl: "",
          redirect: false, 
          redirectId: null,
          nameError: null,
          id: null,
        };
    }

    componentDidMount() {
        this.props.getInstructor(window.location.pathname.slice(-1));
        this.setState({
            firstname: this.props.instructor.firstname,
            lastname: this.props.instructor.lastname,
            department: this.props.instructor.department,
            imageUrl: this.props.instructor.imageUrl,
            redirect: false,
            redirectId: null,
            id: this.props.instructor.id
          })
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let editedInstructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            id: window.location.pathname.slice(-1)
        };
        
        await this.props.editInstructor(editedInstructor);

        this.setState({
          firstname: "",
          lastname: "",
          department: "",
          imageUrl: "",
          redirect: true, 
          redirectId: window.location.pathname.slice(-1)
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <EditInstructorView 
            instructor = {this.props.instructor}
            editInstructor = {this.props.editInstructor}
            getInstructor = {this.props.getInstructor}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            nameError={this.state.nameError}
            removeCourse = {this.removeCourse}
            addCourse = {this.addCourse}
            allCourses = {this.allCourses}
          
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
    return({
      editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
      getInstructor: (id) => dispatch(getInstructorThunk(id)),
    })
}

export default connect(mapState, mapDispatch)(EditInstructorContainer);