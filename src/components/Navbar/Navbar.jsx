import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

let navLinks = [
  { to: '/profile', text: 'profile' },
  { to: '/messages', text: 'messages' },
  { to: '/news', text: 'news' },
]
let navMenu = navLinks.map(item => <NavLink to={item.to} activeClassName={s.active}>{item.text}</NavLink>)

const Navbar = (props) => {
  return (
    <div className={s.navbar}>
      {navMenu}
    </div>
  )
}
export default Navbar