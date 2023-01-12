import React from "react";
import ListUser from "../Component/MainPageCom/ListUser";

const Home = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen">
      <div className='absolute top-0 w-full z-[-1]'>
        <div className='h-[20vh] bg-[#6337c8]'></div>
      </div>
      <ListUser />
    </div>
  );
};

export default Home;
