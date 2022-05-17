import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseThunk, getCourseThunk } from '../../store/actionsandthunks';

class EditCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          location: "", 
          instructorId: null, 
          redirect: false, 
          redirectId: null,
          nameError: false,
        };
    }

    componentDidMount(){
      this.props.getCourse(window.location.pathname.slice(-1));
      this.setState({
        title: this.props.course.title,
        timeslot: this.props.course.timeslot,
        location: this.props.course.location,
        instructorId: this.props.course.instructorId,
        redirect: false,
        redirectId: null
        });  
    }

     handleChange = event => {
       this.setState({
         [event.target.name]: event.target.value
       });
     }

    handleSubmit = async event => {
      event.preventDefault();

      let editedCourse = {
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: this.state.instructorId,
          id: window.location.pathname.slice(-1),
      };
     
      await this.props.editCourse(editedCourse);

      this.setState({
        title: "",
        timeslot: "",
        location: "",
        instructorId: null, 
        redirect: true, 
        redirectId: window.location.pathname.slice(-1),
      });
  }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }

        return (
          <EditCourseView 
            editCourse = {this.props.editCourse}
            getCourse = {this.props.getCourse}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            nameError={this.state.nameError}      
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
    return({
        editCourse: (course) => dispatch(editCourseThunk(course)),
        getCourse: (course) => dispatch(getCourseThunk(course)),
    })
}

export default connect(mapState, mapDispatch)(EditCourseContainer);

