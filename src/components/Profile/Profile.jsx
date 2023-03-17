import React from 'react';
import Post from './Post/Post';
import s from './Profile.module.css';

const Profile = (props) => {
  let posts = props.data.posts.map(post => <Post text={post.text} />)

  return (
    <div className={s.profile}>
      {props.data.avatar}
      {props.data.name}
      {props.data.description}
      {posts}

    </div>
  )
}
export default Profile