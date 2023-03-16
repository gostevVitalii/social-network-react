import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

let navLinks = [
  { to: '/profile', text: 'profile' },
  { to: '/messages', text: 'messages' },
  { to: '/news', text: 'news' },
]
let navMenu = navLinks.map(item =>
  <NavLink className={({ isActive }) => {
    const linkClasses = [s.navLink];
    if (isActive) linkClasses.push(s.active);

    return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
  }}
    to={item.to}>{item.text}</NavLink>)

const Navbar = (props) => {
  return (
    <div className={s.navbar}>
      {navMenu}
    </div>
  )
}
export default Navbar