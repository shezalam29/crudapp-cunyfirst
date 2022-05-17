import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button }from "@material-ui/core";

const EditInstructorView = (props) => {
    const {handleChange, handleSubmit, nameError} = props;
    const helpertext = "Please fill in";

    return (
        <div>
        <h1>Edit Instructor</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
              error={nameError}
              helperText={nameError && helpertext}
              required
              name="firstname"
              label="First Name"
              style={{ width: "50%" }}
              defaultValue={props.instructor.firstname}
              onChange={(e) => handleChange(e)}
            />
        <TextField
              error={nameError}
              helperText={nameError && helpertext}
              required
              name="lastname"
              label="Last Name"
              style={{ width: "50%" }}
              defaultValue={props.instructor.lastname}
              onChange={(e) => handleChange(e)}
            />
        <TextField
              name="department"
              label="Department"
              style={{ width: "50%" }}
              defaultValue={props.instructor.department}
              onChange={(e) => handleChange(e)}
            />
        <TextField
              name="imageUrl"
              label="imageUrl"
              style={{ width: "50%" }}
              defaultValue={props.instructor.imageUrl}
              onChange={(e) => handleChange(e)}
            />
        <Button type = "submit">Submit Edit</Button>
        </form>  
        </div>
    )
}

export default EditInstructorView;
