import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <a href="/profile">profile</a>
      <a href="/messages">messages</a>
      <a href="#">music</a>
      <a href="#">news</a>
    </div>
  )
}
export default Navbar