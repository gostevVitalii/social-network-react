import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
      <NavLink to="/messages" activeClassName={s.active}>messages</NavLink>
      {/* <a href="#">music</a>
      <a href="#">news</a> */}
    </div>
  )
}
export default Navbar