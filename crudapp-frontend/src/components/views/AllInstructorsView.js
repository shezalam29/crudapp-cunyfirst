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
      <h2>Click the 'x' under an instructor to remove the instructor</h2>
      {allInstructors.map((instructor) => (
      <div key={instructor.id}>
        <Link to={`/instructor/${instructor.id}`}>
          <h1>{instructor.firstname} {instructor.lastname}</h1>
        </Link>
        <Button onClick={() => deleteInstructor(instructor.id)} >X</Button>
      </div>
      )
      )
      }
      <Link to={`/newinstructor`}>
          <Button> Add New Instructor </Button>
      </Link>  
    </div>
  );
};

export default AllInstructorsView;
        