import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: `url('path/to/background-image.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  title: {
    flexGrow: 1,
  },
  navbarLink: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      color: 'white',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10), // Adjust the value as needed
    },
    '& > a': {
      textDecoration: 'none',
      color: 'white',
    },
  },
  excoLink: {
    background: '#4DC8EB',
    border: '2px solid #4DC8EB',
    padding: '8px 16px',
    borderRadius: '4px',
    color: 'white',
  },
  menu: {
    width: 250,
  },
  appBar: {
    boxShadow: 'none',
  },
  menuIcon: {
    color: 'white',
  },
  closeIcon: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: 'black',
    zIndex: 1,
  },
  closeIconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="transparent">
        <Toolbar>
          <div className={classes.title}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={classes.navbarLink}>
            <Link to="/about">
              <span>About us</span>
            </Link>
            <Link to="/blog">
              <span>Blog</span>
            </Link>
            <Link to="/sermons">
              <span>Sermon</span>
            </Link>
            <Link to="/online_giving">
              <span>Online Giving</span>
            </Link>
            <Link to="/excos" className={classes.excoLink}>
              <span>Meet Our Excos</span>
            </Link>
          </div>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
        <div className={classes.closeIconContainer}>
          <IconButton
            className={classes.closeIcon}
            color="inherit"
            aria-label="close"
            onClick={handleMenuClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.menu} role="presentation">
          <List>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About us" />
            </ListItem>
            <ListItem button component={Link} to="/blog">
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button component={Link} to="/sermons">
              <ListItemText primary="Sermon" />
            </ListItem>
            <ListItem button component={Link} to="/online_giving">
              <ListItemText primary="Online Giving" />
            </ListItem>
            <ListItem button component={Link} to="/excos">
              <ListItemText primary="Meet Our Excos" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
