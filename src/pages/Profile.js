import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/PostService';

const Profile = () => {
    const { id } = useParams();
    const [post, setpost] = useState({})
    const [user, setuser] = useState({})

    useEffect(() => {
        getUserById(id).then(res => setuser(res.data))

    }, [])
    return (
        <div className='box'>
            profile
        </div>
    )
}

export default Profile
