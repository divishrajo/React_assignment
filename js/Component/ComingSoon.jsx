import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  return (
    
   
       <div >
         <button className='mt-5 ml-5 rounded-[10px] px-4 py-2 text-white bg-[blue]'>
        <Link to={"/"}>Back</Link>
        </button>
       <div className='flex items-center justify-center'>
      <h1 className='text-[50px] font-[1000]'>Coming Soon</h1>

    </div>
    </div>
  )
}

export default ComingSoon