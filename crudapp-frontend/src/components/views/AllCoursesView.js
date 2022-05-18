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
      <h1>Courses</h1>
      <h4>Click the 'x' under a course to delete the course</h4>
      {allCourses.map((course) => {
      let title = course.title;
      return (
        <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h2>{title}</h2>
          </Link>
          <p>Course Database ID: {course.id}</p>
          <Button variant ="outlined" size="small" onClick={() => deleteCourse(course.id)}>x</Button>
        </div>
      );
      }
      )
      }
      <br>
      </br>
    <Link to={`/newcourse`}>
      <Button> Add New Course </Button>
    </Link>  
    </div>
  );
};

export default AllCoursesView;
        