// import React, { useState } from 'react';
// import Logo from '../Logo/Logo';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     background: `url('path/to/background-image.jpg') no-repeat center center fixed`,
//     backgroundSize: 'cover',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     display: 'none',
//     [theme.breakpoints.down('sm')]: {
//       display: 'block',
//     },
//   },
//   title: {
//     flexGrow: 1,
//   },
//   navbarLink: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: 40,
//       color: "dark",
//     },
//     [theme.breakpoints.down('sm')]: {
//       marginTop: theme.spacing(10), // Adjust the value as needed
//     },
//     '& > a': {
//       textDecoration: 'none',
//       color: 'white',
//     },
//   },
//   excoLink: {
//     background: '#4DC8EB',
//     border: '2px solid #4DC8EB',
//     padding: '8px 16px',
//     borderRadius: '4px',
//     color: 'white',
//   },
//   menu: {
//     width: 250,
//   },
//   appBar: {
//     boxShadow: 'none',
//   },
//   menuIcon: {
//     color: 'white',
//   },
//   closeIcon: {
//     position: 'absolute',
//     top: theme.spacing(2),
//     right: theme.spacing(2),
//     color: 'black',
//     zIndex: 1,
//   },
//   closeIconContainer: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//   },
// }));

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const classes = useStyles();

//   const handleMenuOpen = () => {
//     setMenuOpen(true);
//   };

//   const handleMenuClose = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="sticky" className={classes.appBar} color="transparent">
//         <Toolbar>
//           <div className={classes.title}>
//             <Link to="/">
//               <Logo />
//             </Link>
//           </div>
//           <div className={classes.navbarLink}>
//             <Link to="/about">
//               <span>About us</span>
//             </Link>
//             <Link to="/blog">
//               <span>Blog</span>
//             </Link>
//             <Link to="/sermons">
//               <span>Sermon</span>
//             </Link>
//             <Link to="/online_giving">
//               <span>Online Giving</span>
//             </Link>
//             <Link to="/excos" className={classes.excoLink}>
//               <span>Meet Our Excos</span>
//             </Link>
//           </div>
//           <IconButton
//             edge="end"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMenuOpen}
//           >
//             <MenuIcon className={classes.menuIcon} />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
//         <div className={classes.closeIconContainer}>
//           <IconButton
//             className={classes.closeIcon}
//             color="inherit"
//             aria-label="close"
//             onClick={handleMenuClose}
//           >
//             <CloseIcon />
//           </IconButton>
//         </div>
//         <div className={classes.menu} role="presentation">
//           <List>
//             <ListItem button component={Link} to="/about">
//               <ListItemText primary="About us" />
//             </ListItem>
//             <ListItem button component={Link} to="/blog">
//               <ListItemText primary="Blog" />
//             </ListItem>
//             <ListItem button component={Link} to="/sermons">
//               <ListItemText primary="Sermon" />
//             </ListItem>
//             <ListItem button component={Link} to="/online_giving">
//               <ListItemText primary="Online Giving" />
//             </ListItem>
//             <ListItem button component={Link} to="/excos">
//               <ListItemText primary="Meet Our Excos" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default Navbar;

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute inset-x-0 top-0 z-50">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1697753724/rcf/rcf_logo_vgpnp5.svg"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:ml-6 text-right sm:block">
                  <div className="flex space-x-4">
                    <a href="/about" className="rounded-md hover:bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                      About Us
                    </a>
                    <a
                      href="/blog"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Blog
                    </a>
                    <a
                      href="/sermons"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Sermon
                    </a>
                    <a
                      href="/online_giving"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Online Giving
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <a
                      href="/"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                     Meet Our Excos
                    </a>
                  </button> */}
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-[#000000] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#000000]-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-500"
                  >
                    <a href="/excos">
                    Meet Our Excos
                    </a>
                    
                  </button>
                  
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Sermon
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Online Giving
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

