import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom"

const SingleInstructorView = (props) => {
  const history = useHistory();
  const {instructor, removeCourse, allCourses, deleteInstructor} = props;
  return (
    <div>      
      <h1>Instructor: {instructor.firstname} {instructor.lastname}</h1>
      <h2>Department: {instructor.department}</h2>
      <img src={instructor.imageUrl} alt= "portrait of instructor"/> 
      {instructor.courses.length === 0 ? (
      <h2>No courses belong to this instructor </h2>
      ) : ( 
        <div>
        <h2>Courses:</h2>
        <h3>Click the 'x' to unassign the course to this instructor</h3>
        <ul>
        {instructor.courses.map( course => {
          let title = course.title;
          return (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{title}
              </Link>
              <Button onClick = {()=> removeCourse(course.id)}>x</Button>
            </li>
          );
        }
        )
        }
        </ul>
        </div>
        )
      }
        <br></br>
        <div>
          <Button onClick = {()=>{
            history.push('/newcourse',{instructorId: instructor.id})
          }}>Add new course</Button>
        </div>
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