import { Link } from "react-router-dom";
import { Button } from "@material-ui/core"

const AllInstructorsView = ({ allInstructors, deleteInstructor }) => {
  if (!allInstructors.length) {
    return (
      <div>
        <h1>No instructors exist at the moment</h1>
        <Link to={`/newinstructor`}>
          <Button> Add New Instructor </Button>
        </Link> 
      </div>
    )
  }

  return (
    <div>
      <h1>Instructors</h1>
      <h4>Click the 'x' under an instructor to delete the instructor</h4>
      {allInstructors.map((instructor) => (
      <div key={instructor.id}>
        <Link to={`/instructor/${instructor.id}`}>
          <h2>{instructor.firstname} {instructor.lastname}</h2>
        </Link>
        <p>Instructor Database ID: {instructor.id}</p>
        <Button variant ="outlined" size="small" onClick={() => deleteInstructor(instructor.id)}>x</Button>
      </div>
      )
      )
      }
      <br>
      </br>
      <Link to={`/newinstructor`}>
          <Button> Add New Instructor </Button>
      </Link>  
    </div>
  );
};

export default AllInstructorsView;
        