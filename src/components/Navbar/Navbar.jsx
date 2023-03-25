import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {

  let navMenu = props.navbarData.map(item =>
    <NavLink className={({ isActive }) => {
      const linkClasses = [s.navLink];
      if (isActive) linkClasses.push(s.active);
      return linkClasses.join(" ");
    }}
      to={item.to}>{item.text}</NavLink>)

  return (
    <div className={s.navbar}>
      {navMenu}
    </div>
  )
}
export default Navbar