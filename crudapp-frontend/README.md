# CRUD App Final Frontend
CUNYFirst Clone 
Practical Web Dev '22

Group member(s): Shezan Alam Github username: shezalam29
Sources: 
https://github.com/mtlynch3/CSCI39548
https://github.com/mtlynch3/final-frontend

    
As a user I: 
- [x ] will land on a visually pleasing homepage by default, which allows navigation to view all courses and all instructors
can navigate to all instructors view, and
- [x ] see a list of all instructors in the database
- [x ] see an informative message if no instructors exist
- [x ] add a new instructor
- [x ] with a validated form displaying real-time error messages

can navigate to a single instructor view, and
- [x ] see details about a single instructor, including courses they teach (if any) 
- [x ] see an informative message if no courses belong to that instructor
- [x ] can navigate to single course view (see below)
- [x ] delete the instructor 
- [x ] edit instructor information 
    - [x ] with a validated form displaying real-time error messages

can navigate to all courses view, and
- [x ] see a list of all courses in the database
- [x ] see an informative message if no courses exist
- [x ] add a new course
    - [x ] with a validated form displaying real-time error messages

can navigate to a single course view, and
- [x ] see details about a single course, including the instructor
- [x ] should display “Staff” if the course is not assigned an instructor
- [x ] navigate to single instructor view of the course’s instructor
- [x ] delete the course
- [x ] edit the course’s information (including instructor )
- [x ] with a validated form displaying real-time error messages

Technical breakdown of requirements:

All instructors and All courses 

Database (Sequelize) 
- [x ] Write a `instructors` model with the following information:  
 
- [x ] firstname  
- [x ] lastname 
- [x ] department 
- [x ] imageUrl

- [x ] Write a `courses` model with the following information:
- [x ] title 
- [x ] timeslot
- [x ] location

- [x ] courses may be associated with at most one instructor
- [x ] instructors may be associated with many courses

- [x ] students may be associated with at most one campus
- [x ] campus may be associated with many students


API (Express, Sequelize)
- [x ] Write a route to serve up all courses
- [x ] Write a route to serve up all instructors

State management (Redux)
- [x ] Write a instructors sub-reducer to manage instructors in your Redux store
- [x ] Write a courses sub-reducer to manage courses in your Redux store

UI (React)
- [x ] Write a component to display a list of all instructors (just their names and images)
- [x ] Write a component to display a list of all courses (just their names)

Client-side routing (React-Router)
- [x ] Display the all-instructors component when the url matches `/instructors`
- [x ] Display the all-courses component when the url matches `/courses`
- [x ] Add links to the navbar that can be used to navigate to the all-instructors view and the all-courses view

Single course and Single instructor 

API (Express, Sequelize)
- [x ] Write a route to serve up a single instructor (based on their id), including that instructor’s courses
- [x ] Write a route to serve up a single course (based on its id), including that course's instructor

UI (React)
- [x ] Write a component to display a single instructor with the following information:
- [x ] The instructor's name, image, and department
- [x ] A list of all courses that instructor is assigned 
- [x ] Write a component to display a single course with the following information: 
- [x ] The course title, timeslot, and location
- [x ] The name of the instructor 


Client-side routing (React-Router)
- [x ] Display the appropriate instructor's info when the url matches `/instructors/:instructorId`
- [x ] Clicking on a instructor from the all-instructors view should navigate to show that instructor in the single-instructor view
- [x ] Display the appropriate course when the url matches `/courses/:courseId`
- [x ] Clicking on a course from the all-courses view should navigate to show that course in the single-course view
- [x ] Clicking on the name of a course in the single-instructor view should navigate to show that course in the single-course view
- [x ] Clicking on the name of a instructor in the single-course view should navigate to show that instructor in the single-instructor view

Editing a instructor and Editing a course 

API (Express, Sequelize)
- [x ] Write a route to edit a new instructor
- [x ] Write a route to edit a new course

UI (React)
- [x ] Write a component to display a form for editing an instructor’s information
- [x ] Display this component EITHER as part of the single-instructor view, or as its own view
- [x ] Submitting the form with should: 
- [x ] Make a request that causes the instructor to be updated in the database 
- [x ] Display the updates without needing to refresh the page

- [x ] Write a component to display a form for editing a course
- [x ] Display this component EITHER as part of the single-course view, or as its own view
- [x ] Submitting the form with a should:  
- [x ] Make a request that causes the course to be updated in the database 
- [x ] Display the updates without needing to refresh the page

Adding course and Adding instructor

API (Express, Sequelize)
- [x ] Write a route to add a new instructor
- [x ] Write a route to add a new course

UI (React )
- [x ] Write a component to display a form for adding a new instructor that contains inputs for at least the name and address.
- [x ] Display this component EITHER as part of the all-instructors view, or as its own view
- [x ] Submitting the form with a valid name/department should:  
- [x ] Make a request that causes the new instructor to be persisted in the database  
- [x ] Add the new instructor to the list of instructors without needing to refresh the page

- [x ] Write a component to display a form for adding a new course that contains inputs for at least title, timeslot, location
- [x ] Display this component EITHER as part of the all-courses view, or as its own view
- [x ] Submitting the form with a valid title, timeslot, location should:  
- [x ] Make a request that causes the new course to be persisted in the database  
- [x ] Add the new course to the list of courses without needing to refresh the page

Removing a instructor and Removing a course

API (Express, Sequelize)
- [x ] Write a route to remove a instructor (based on its id)
- [x ] Write a route to remove a course (based on their id)

UI (React)
- [x ] In the all-instructors view, include an `X` button next to each instructor
- [x ] Clicking the `X` button should:  
- [x ] Make a request that causes that instructor to be removed from database 
- [x ] Remove the instructor from the list of instructors without needing to refresh the page
- [x ] In the all-courses view, include an `X` button next to each course
- [x ] Clicking the `X` button should:  
- [x ] Make a request that causes that course to be removed from database  
- [x ] Remove the course from the list of courses without needing to refresh the page

To run the app without a database connection:

```
cd crudapp-frontend  
npm install        
npm start 


