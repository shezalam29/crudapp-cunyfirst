import { Link } from "react-router-dom";
import { Button, IconButton} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete";

const AllCoursesView = ({allCourses, deleteCourse}) => {
  if (!allCourses.length) {
    return (
      <div>
        <h1>No courses exist at the moment</h1>
        <Link to={`/newcourse`}>
          <Button> Add New Course </Button>
        </Link> 
      </div>
    )
  }

  return (
    <div>
      {allCourses.map((course) => {
      let title = course.title;
      return (
        <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <div onClick={() => deleteCourse(course.id)}>
            <IconButton>
            <DeleteIcon />
            </IconButton>
          </div>
        </div>
      );
      }
      )
      }
    <Link to={`/newcourse`}>
      <Button> Add New Course </Button>
    </Link>  
    </div>
  );
};

export default AllCoursesView;
        