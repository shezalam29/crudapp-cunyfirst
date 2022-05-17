import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SingleInstructorView = ({ instructor, deleteInstructor, }) => {  
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
        <ul>
        {instructor.courses.map( course => {
          let title = course.title;
          return (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{title}
              </Link>
            </li>
          );
        }
        )
        }
        </ul>
        </div>
        )
      }
      <Link to= {`/editinstructor/` + instructor.id}>
        <Button>Edit Instructor</Button>
      </Link>
      <Link to="/instructors">
        <Button onClick={() => deleteInstructor(instructor.id)}>Delete</Button>
      </Link>
    </div>
  );
};

export default SingleInstructorView;