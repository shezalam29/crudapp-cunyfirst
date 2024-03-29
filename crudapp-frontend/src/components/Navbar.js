import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  pagetitle: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Trebuchet MS', 
    fontSize: '50px', 
    color: 'darkblue'
  },
  appBar:{
    backgroundColor: '#CBC3E3',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" elevation={15} className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.pagetitle}>
            CUNYFirst Course Planning
          </Typography>
          <Link to={'/'} >
            <Button variant="outlined" style={{marginRight: '10px'}}>
              Home
            </Button>
          </Link>
          <Link to={'/instructors'} >
            <Button variant="outlined" backgroundcolor="black" style={{marginRight: '10px'}}>
              Instructors
            </Button>
          </Link>
          <Link to={'/courses'} >
            <Button variant="outlined">
              Courses
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default Navbar;
