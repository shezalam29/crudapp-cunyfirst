import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SingleInstructorView = (props) => {
  const {instructor, allCourses, deleteInstructor, editCourse} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);

  return (
    <div>      
      <h1>Instructor: {instructor.firstname} {instructor.lastname}</h1>
      <h2>Department: {instructor.department}</h2>
      <img src={instructor.imageUrl} alt= "portrait of instructor"/> 
      <p>*must refresh to see changes to assigned courses</p>
      {instructor.courses.length === 0 ? (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>

      <h2>No courses belong to this instructor </h2>

      <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <Button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>add</Button>
            </div>
          );
        })}</div>

      </div>
      
      ) : ( 
        // <div>
        // <h2>Courses:</h2>
        // <h3>Click the 'x' to unassign the course to this instructor</h3>
        // <ul>
        // {instructor.courses.map( course => {
        //   let title = course.title;
        //   return (
        //     <li key={course.id}>
        //       <Link to={`/course/${course.id}`}>{title}
        //       </Link>
        //       <Button onClick = {()=> removeCourse(course.id)}>x</Button>
        //     </li>
        //   );
        // }
        // )
        // }
        // </ul>
        // </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <Button onClick={() => editCourse({id:course.id, instructorId: null})}>remove</Button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <Button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>add</Button>
            </div>
          );
        })}</div>

      </div>
      )
      }


        <br></br>
        <br></br>

      <Link to= {`/editinstructor/` + instructor.id}>
        <Button>Edit Instructor</Button>
      </Link>
      <Link to="/instructors">
        <Button onClick={() => deleteInstructor(instructor.id)}>Delete Instructor</Button>
      </Link>
    </div>
  );
};

export default SingleInstructorView;