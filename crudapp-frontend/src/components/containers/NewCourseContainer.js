import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCourseView from '../views/NewCourseView';
import { addCourseThunk } from '../../store/actionsandthunks';

class NewCourseContainer extends Component {
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

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            instructorId: this.state.instructorId
        };
        
        let newCourse = await this.props.addCourse(course);

        this.setState({
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: null, 
          redirect: true, 
          redirectId: newCourse.id
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
          <NewCourseView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            nameError={this.state.nameError}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCourse: (course) => dispatch(addCourseThunk(course)),
    })
}

export default connect(null, mapDispatch)(NewCourseContainer);