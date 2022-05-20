import { Link } from "react-router-dom";
import { Button } from "@material-ui/core"
  
const HomePageView = () => {
    return (
      <div>
            <h2> Click to view courses and instructors offered at CUNY - Hunter College </h2>
                    <Link to="/instructors">
                      <Button>Instructors</Button>
                    </Link>
                    <Link to="/courses">
                      <Button>Courses</Button>
                    </Link>
                    <br></br>
            <img src="https://www.cuny.edu/wp-content/uploads/sites/4/media-assets/skyline-1200x627_CUNY_Logo.jpg"  style={{
              marginTop: "20px",
              height: "auto",
              width:"auto",
              marginLeft: "auto"

            }}alt="cunylogo alt" />

      </div>
    );
  };

  export default HomePageView;

//
//
//