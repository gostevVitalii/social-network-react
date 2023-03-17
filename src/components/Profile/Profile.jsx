import React from 'react';
import Post from './Post/Post';
import s from './Profile.module.css';

const Profile = (props) => {
  let posts = props.data.posts.map(post => <Post text={post.text} />)

  return (
    <div className={s.profile}>
      <div>{props.data.avatar}</div>
      <div>{props.data.name}</div>
      <div> {props.data.description}</div>
      <div>{posts}</div>
    </div>
  )
}
export default Profile