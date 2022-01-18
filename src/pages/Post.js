import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById, getUserById } from '../services/PostService';

const Post = () => {
  const { id } = useParams();
  const [post, setpost] = useState({})
  const [user, setuser] = useState({})

  useEffect(() => {
    getPostById(id).
      then(res => {
        setpost(res.data)
        getUserById(res.data.userId).then(res => setuser(res.data))
      })
  }, [])

  return (
    <div className="box p-5">
      <div style={{display:'flex',padding:'1%'}}>
        <img style={{borderRadius:'25px'}} width={50} height={50} src='https://picsum.photos/200' />
        <span style={{fontWeight:'bolder',color:'gray',paddingLeft:'15px'}}>{user.name}<br/><span style={{fontWeight:'lighter',fontSize:'12px'}}>01.01.2021</span></span>
      </div>
      <span>{post.title}</span>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
