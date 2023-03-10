import React from 'react'
import {  useParams } from 'react-router-dom'
import ProfileDown from '../MenuDd/ProfileDown'

const ProfileBar = () => {
    
    const { id } = useParams()
    const Title = ({ title }) => {
        return <p  > {title}</p >;
      };
    return (
        
       
        <div className='flex h-full items-center justify-between '>
            <div className=' text-[20px] text-gray-500'>
                <Title title={window.location.pathname == `/${id}/` || window.location.pathname == `/${id}` ? "Profile" : window.location.pathname.substring(3)} />
            </div>
            <ProfileDown />
        </div>
      
    )
}

export default ProfileBar