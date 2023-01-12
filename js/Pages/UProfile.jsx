import React, { useContext, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import ProfileBar from '../Component/Profilepage/ProfileBar'
import Navbar from '../Utils/Navbar'
import Profile from './Profile'

function UProfile() {

  const { id } = useParams()
  console.log('user',id)
  
  return (

    
    <div className='w-screen h-screen  flex  overflow-x-hidden'>
     <Navbar/>
      <div className='flex flex-col w-full'>
        <div className='h-[13vh]  w-[100%] border-b border-gray-300'>
          <ProfileBar />
        </div>
        <div className={`${window.location.pathname === `/user/${id}` || window.location.pathname === `/user/${id}/` ? 'block' : "hidden"} `}>
          <Profile />
        </div>
        <Outlet />
      </div>
    </div >
    
  )
}

export default UProfile