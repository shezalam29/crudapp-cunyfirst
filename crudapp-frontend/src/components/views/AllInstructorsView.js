import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete";

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
      {allInstructors.map((instructor) => (
      <div key={instructor.id}>
        <Link to={`/instructor/${instructor.id}`}>
          <h1>{instructor.firstname} {instructor.lastname}</h1>
        </Link>
        <div onClick={() => deleteInstructor(instructor.id)}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
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
        