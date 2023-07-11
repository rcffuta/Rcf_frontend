import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  icon: {
    color: '#fff',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
  },
  circularIcon: {
    borderRadius: '50%',
    background: 'linear-gradient(180.31deg, rgba(8, 64, 104, 0.37) -1.09%, rgba(0, 62, 107, 0.96) 59.07%)',
    padding: theme.spacing(0.5),
    width: theme.spacing(2.5), 
    height: theme.spacing(2.5), 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  return (
    <div className={classes.root}>
      <FacebookIcon
        className={`${classes.icon} ${classes.circularIcon}`}
        fontSize="small"
        onClick={handleFacebookClick}
      />
      <InstagramIcon
        className={classes.icon}
        fontSize="small"
        onClick={handleInstagramClick}
      />
    </div>
  );
};

export default Footer;
