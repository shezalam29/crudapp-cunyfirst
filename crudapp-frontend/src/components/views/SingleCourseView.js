import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SingleCourseView = ({ course, deleteCourse }) => {
  return (
    <div>      
      <h1>Course Title: {course.title}</h1>
      <h2>Timeslot: {course.timeslot}</h2>
      <h2>Location: {course.location}</h2>
      {course.instructor ? (
        <Link to={`/instructor/${course.instructor.id}`}>
          <h2>Instructor: {course.instructor.firstname} {course.instructor.lastname}</h2>
        </Link>
      ) : (
        <h2>STAFF</h2>
      )}
      <Link to={`/editcourse/`+ course.id}>
        <Button>Edit Course</Button>
      </Link>
      <Link to="/courses" >
        <Button onClick={() => deleteCourse(course.id)}>Delete Course</Button>
      </Link>
    </div>
  );
};

export default SingleCourseView;

