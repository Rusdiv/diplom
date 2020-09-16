import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';

export default function MyPosts(props) {

  const onAddPost = (values) => {
    props.addPost(values.postTitle, values.postBody)
  }

  return (
    <div>
      <h2 className={classes.title}>My Posts</h2>
      <AddPostFormRedux onSubmit={onAddPost}/>
      <ul>
        {props.postData.map( (post) => <Post name={post.name} key={post.id} text={post.text} likesCount={post.likesCount}/>)}
      </ul>
    </div>
  )
}


const AddPostForm = (props) => {
  return (
    <form className={classes.block} onSubmit={props.handleSubmit}>
      <Field type='text' component='input' name='postTitle' className={classes.inputTitle}  placeholder='Title'/>
      <Field type='text' component='textarea' name='postBody' className={classes.input}  placeholder='Text'/>
      <div className={classes.buttonBlock}>
        <button color='primary' className={classes.button}>New Post</button>
      </div>
    </form>
  )

}

const AddPostFormRedux = reduxForm({form:'addPostForm'})(AddPostForm)