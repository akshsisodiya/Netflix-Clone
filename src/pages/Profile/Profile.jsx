import React from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Plans from '../../components/Plans/Plans'

function Profile() {
    const user = useSelector(selectUser)
    return (
        <div className='profile-screen'>
            <Navbar />
            <div className="profile-screen-body">
                <h1>Edit Profile</h1>
                <div className="profile-screen-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                    <div className="profile-screen-details">
                        <h2>{user.email}</h2>
                        <div className="profile-screen-plans">
                            <h3>Plans (Currrent Plan: Premium)</h3>
                            <Plans />
                            <button onClick={() => auth.signOut()} className="profile-screen-signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile