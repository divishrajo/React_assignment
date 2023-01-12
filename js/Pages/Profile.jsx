import React, { useContext } from 'react'
import ListBar from '../Component/Profilepage/ListBar'

import { Link,Route } from 'react-router-dom'
import { users } from "./data";

const Profile = () => {
  
    const AddressBar = ({ address }) => {
    
        const arr = [
            { title: "Street", data: address?.street },
            { title: "Suite", data: address?.suite },
            { title: "City", data: address?.city },
            { title: "Zipcode", data: address?.zipcode },]
           
            
        return (
            <div className='flex flex-col gap-4'>
                <div className='pl-9 mt-2'>
                   <h1>"Address:" </h1>
                </div>
                <div className='ml-[70px] flex flex-col gap-1'>
                    {
                        arr?.map((element, i) => {
                            return <div key={i} className='flex gap-3 items-center'>
                             {element.title} 
                               {element.data}
                            </div>
                        })
                    }
                </div>
                <div className='flex flex-col w-full justify-center items-center gap-1'>
                    <img className='w-[50%]' src="https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg" alt="" />
                </div>
            </div >
        )
    }

  console.log("Hello")
  console.log(users)
    return (
        <div>  <button className='mt-5 ml-5 rounded-[10px] px-4 py-2 text-white bg-[blue]'>
        <Link to={"/"}>Back</Link>
        </button>
        <div className='w-full  h-full flex mt-5'>
            <div className='border-r border-gray-300 h-full w-[40%]'>
                <ListBar users={users}/>
            </div> 
            <div className=' h-full w-[60%]'>
                <AddressBar></AddressBar>
            </div>
        </div>
        </div>
    )
}

export default Profile