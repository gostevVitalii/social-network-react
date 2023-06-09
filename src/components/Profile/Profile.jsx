import React from 'react'
import Post from './Post/Post'
import s from './Profile.module.css'
import { newPostCreator, updateNewPostTextCreator } from '../../redux/profile-reducer'

const Profile = (props) => {
  let posts = props.profileData.posts.map(post => <Post text={post.text} />)
  let postText = React.createRef();

  let newPost = () => {
    props.dispatch(newPostCreator())
  }
  let onTextChange = () => {
    let text = postText.current.value
    props.dispatch(updateNewPostTextCreator(text))
  }
  return (
    <div className={s.profile}>
      <div>{props.profileData.avatar}</div>
      <div>{props.profileData.name}</div>
      <div> {props.profileData.description}</div>
      <textarea
        ref={postText}
        value={props.profileData.newPostText}
        onChange={onTextChange}
      />
      <button onClick={newPost}>New post</button>
      <div>{posts}</div>
    </div>
  )
}
export default Profile