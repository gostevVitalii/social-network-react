import React from 'react';
import Post from './Post/Post';
import s from './Profile.module.css';

const Profile = (props) => {
  let posts = props.data.posts.map(post => <Post text={post.text} />)
  let postText = React.createRef();
  let newPost = () => {
    let postMessage = postText.current.value;
    alert(postMessage)
  }
  return (

    <div className={s.profile}>
      <div>{props.data.avatar}</div>
      <div>{props.data.name}</div>
      <div> {props.data.description}</div>
      <textarea ref={postText} cols="30" rows="2"></textarea>
      <button onClick={newPost}>New post</button>
      <div>{posts}</div>
    </div>
  )
}
export default Profile