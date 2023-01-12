import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/userContext'

function ListUser() {
    const UserBox = ({ name,id, handleClick }) => {
        const Title = ({ title }) => {
            return <p  > {title}</p >;
          };
        return (
            <>
                <Link to={`/user/${id}`}>
                
                <img className='rounded-full w-[10%]' src="https://avatars.githubusercontent.com/u/103462720?v=4" alt="" />
                <div className='text-md '>
                    <Title title={name} />
                </div>
                </Link>
            </>
        )
    
    }
    const { state: { userData } } = useContext(UserContext);
    const navigate = useNavigate()
     const handleClick = (id) => {
        navigate(`/${id}`)
    }
    const Title = ({ title }) => {
        return <p  > {title}</p >;
      };

    return (
        <div className="h-[108vh] shadow-2xl  rounded-[15px] bg-white ">
            <div className='w-full rounded-t-[15px] flex justify-center items-center h-[16vh] text-gray-600 text-xl'>
                <Title title="Select an account " />
            </div>
           
                {
                    userData?.map((el, i) => {
                        return <UserBox handleClick={handleClick} key={el.id} {...el} />
                    })
                }
            
        </div>
    )
}

export default ListUser