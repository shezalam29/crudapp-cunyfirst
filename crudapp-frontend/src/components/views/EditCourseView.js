import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const EditCourseView = (props) => {
    const { handleChange, handleSubmit, nameError } = props; 

    const helpertext = "Please fill in";

    return (
        <div>
        <h1>Edit Course</h1>
        <h3>*Instructor ID must exist in database if filled in*</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
              error={nameError}
              helperText={nameError && helpertext}
              required
              name="title"
              label="Title"
              style={{ width: "50%" }}
              onChange={(e) => handleChange(e)}
            />
        <TextField
              error={nameError}
              helperText={nameError && helpertext}
              required
              name="timeslot"
              label="Timeslot"
              style={{ width: "50%" }}
              onChange={(e) => handleChange(e)}
            />
        <TextField
              error={nameError}
              helperText={nameError && helpertext}
              required
              name="location"
              label="Location"
              style={{ width: "50%" }}
              onChange={(e) => handleChange(e)}
            />
        <TextField
              name="instructorId"
              label="Instructor ID"
              style={{ width: "50%" }}
              onChange={(e) => handleChange(e)}
            />
        <Button type = "submit">Submit Edit</Button>
        </form>  
        </div>
    )
}

export default EditCourseView;
