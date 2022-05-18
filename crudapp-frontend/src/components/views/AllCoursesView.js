import { Link } from "react-router-dom";
import { Button } from "@material-ui/core"


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
      <h2>Click the 'x' under a course to remove the course</h2>
      {allCourses.map((course) => {
      let title = course.title;
      return (
        <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <Button onClick={() => deleteCourse(course.id)} >X</Button>
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
        