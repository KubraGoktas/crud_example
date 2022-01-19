import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/PostService';
import map from '../assets/img/google map.png'

const Profile = () => {
    const { id } = useParams();
    const [post, setpost] = useState({})
    const [user, setuser] = useState({})

    useEffect(() => {
        getUserById(id).then(res => setuser(res.data))
    }, [])

    return (
        <div className='box p-4'>
            <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='col' style={{ flexBasis: '50%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='name'>{user?.name}</span>
                        <span className='city'>{user?.address?.city}</span>
                    </div>
                    <div className='row'>
                        <span className='col-lg-4 user-info'>Username</span>
                        <span className='col-lg-6'>{user?.username}</span>
                    </div>
                    <div className='row'>
                        <span className='col-lg-4 user-info'>Email</span>
                        <span className='col-lg-6'>{user?.email}</span>
                    </div>
                    <div className='row'>
                        <span className='col-lg-4 user-info'>Phone</span>
                        <span className='col-lg-6'>{user?.phone}</span>
                    </div>
                    <div className='row'>
                        <span className='col-lg-4 user-info'>Website</span>
                        <span className='col-lg-6'>{user?.website}</span>
                    </div>
                    <div className='row'>
                        <span className='col-lg-4 user-info'>Company</span>
                        <span className='col-lg-6'>{user?.company?.name}</span>
                    </div>
                </div>
                <div className='col' style={{ flexBasis: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                    <img width={400} src={map} />
                </div>
            </div>
            <hr />
            <div className='pt-2' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='desc' style={{ width: '80%', textAlign: 'center',height:'50px' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ut ea nostrum numquam officiis quas commodi dolores nobis eaque veniam quos impedit sit,
                        eligendi architecto cum vitae minima suscipit cupiditate iure ratione asperiores rerum atque aperiam deserunt est.
                    </p>
                    <p className='show-more'>Show more</p>
                </div>

            </div>

        </div>
    )
}

export default Profile
