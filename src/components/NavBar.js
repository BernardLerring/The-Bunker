import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import thebunker from "../assets/thebunker.png";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { 
  useCurrentUser, 
  useSetCurrentUser, 
} from '../contexts/CurrentUserContext';
import Avatar from "./Avatar";
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink 
    className={styles.NavLink} 
    activeClassName={styles.Active} 
    to="/posts/create"
  >
    <i className ="fas fa-plus-circle"></i>Add Post
  </NavLink>
  );
  const loggedInIcons = (
  <>
      <NavLink 
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/feed"
    >
      <i className ="fas fa-stream"></i>Feed
    </NavLink>
    <NavLink 
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/liked"
    >
      <i className ="fas fa-heart"></i>Liked
    </NavLink>
    <NavLink 
      className={styles.NavLink} 
      to="/"
      onClick={handleSignOut}
    >
      <i className ="fas fa-door-closed"></i>Sign Out
    </NavLink>
    <NavLink 
      className={styles.NavLink} 
      to={`/profiles/${currentUser?.profile_id}`}
    >
      <Avatar src={currentUser?.profile_image} text="Profile" height={45} />
    </NavLink>
  </>
  );
  const loggedOutIcons = ( 
  <> 
    <NavLink 
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/signin"
    >
      <i className ="fas fa-door-open"></i>Sign In
    </NavLink>
    <NavLink 
      to="/signup"
      className={styles.NavLink} 
      activeClassName={styles.Active}
    >
      <i className="fas fa-user-plus"></i>Sign Up
    </NavLink>
  </>
  );

  return <Navbar expanded={expanded} className= {styles.NavBar} expand="md" fixed="top">
    <Container>
      <NavLink to="/">
        <Navbar.Brand>
          <img src = {thebunker} alt="site logo" height = "120"/>
        </Navbar.Brand>
      </NavLink>
      {currentUser && addPostIcon}
  <Navbar.Toggle 
  ref={ref}
  onClick= {() => setExpanded(!expanded)} 
  aria-controls="basic-navbar-nav" 
  />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
        <i className="fas fa-golf-ball"></i>Home
        </NavLink>
      {currentUser ? loggedInIcons : loggedOutIcons}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  };

export default NavBar;