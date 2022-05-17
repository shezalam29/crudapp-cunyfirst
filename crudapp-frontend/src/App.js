import "./App.css";
import * as React from "react";
import { Switch, Route } from "react-router-dom";

import {
    AllCoursesContainer,
    AllInstructorsContainer,
    SingleCourseContainer,
    SingleInstructorContainer,
    HomePageContainer,
    NewCourseContainer,
    NewInstructorContainer,
    EditCourseContainer,
    EditInstructorContainer
} from "./components/containers";
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <div className= "App">
        <Navbar />
        <Switch> 
            <Route exact path="/" component={HomePageContainer} />

            <Route exact path = "/instructors" component={AllInstructorsContainer} />
            <Route exact path = "/instructor/:id" component={SingleInstructorContainer} />
            <Route exact path = "/editinstructor/*" component={EditInstructorContainer} />
            <Route exact path = "/newinstructor" component={NewInstructorContainer} />
    
            <Route exact path = "/courses" component={AllCoursesContainer} />
            <Route exact path = "/course/:id" component={SingleCourseContainer} />
            <Route exact path = "/editcourse/*" component={EditCourseContainer} />
            <Route exact path = "/newcourse" component={NewCourseContainer} />
        </Switch>
        </div>
    )

}

export default App 