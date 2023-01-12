import React, { Fragment } from 'react'
import data from "./user.json"

const ListBar = ({ name, username, email, phone, website, company }) => {
    
    console.log("tihs is listbarpage")
    console.log(name)
    
    
    const scndlist = [
        { title: "Company Name", data: company?.name },
        { title: "catchPhrase", data: company?.catchPhrase },
        { title: "bs", data: company?.bs },]
        const mylist = [
          { title: "Username", data:  username },
          { title: "email", data: email },
          { title: "phoneNumber", data: phone },
          { title: "website", data: website },
      ]
    return (
        <div className='flex flex-col  w-full items-center h-full justify-center'>
            <img className='rounded-full w-[48%]' src="https://avatars.githubusercontent.com/u/103462720?v=4" />
            {name} 
            <div className='flex flex-col gap-2 border-b border-gray-300 py-3'>
                {
                    mylist?.map((element, i) => {
                        return <div className='flex gap-3 items-center justify-center'>
                            
                             {element.title} 
                             <h1>Hello</h1>
                        
                        </div>
                    })
                }
 
            </div>
            <div className='flex flex-col gap-2 '>
                {
                    scndlist?.map((element, i) => {
                        return <div className='flex gap-5 items-center justify-center'>
                             {element.title}
                             <h1>hello</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

// const ListBar = ({users}) => {

//     // const mylist = [
//     //              { title: "Username", data:  username },
//     //              { title: "email", data: email },
//     //              { title: "phoneNumber", data: phone },
//     //              { title: "website", data: website },
//     //         ]

//     console.log("testing2")
//     console.log(users[0].name);
//     console.log("testing2")
//     return (
//       <>
//         {users?.map((user,i) => {
//           return (
            
//             <Fragment key={user.id}>
//               <h1>name:{user.name}</h1>
//               <h2>title:{user.email}</h2>
              
//             </Fragment>
          
//           );
//         })}
//       </>
//     );
//   };


// const ListBar = ({ users }) => {
//     return (
//       <div className="flex flex-col  w-full items-center h-full justify-center">
//         <img
//           className="rounded-full w-[48%]"
//           src="https://avatars.githubusercontent.com/u/103462720?v=4"
//           alt=""
//         />
//         <div className="flex flex-col gap-2  py-3">
//           {users.users.map((element, i) => {
//             return (
//               <div key={i} className="flex gap-3 items-center justify-center">
//                 id: {element.id}
//                 name: {element.name}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };
  
  export default ListBar;
