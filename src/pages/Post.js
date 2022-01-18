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
    <div className="box p-1">
      
    </div>
  )
}

export default Post
