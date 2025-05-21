// import React, { useState } from 'react'
import Header from "./Header";
// import SideBar from './SideBar'
import Body from "./Body";

const Home = () => {
  // const [categoryCode, setCategoryCode] = useState('')
  return (
    <div className="flex flex-col sm:gap-4 gap-6 w-full h-full">
      <Header />
      <div className="flex w-full sm:px-0 sm:gap-2 gap-6 px-4  h-[calc(100%-70px)]">
        {/* <SideBar setCategoryCode={setCategoryCode} categoryCode={categoryCode} /> */}
        <Body />
      </div>
    </div>
  );
};

export default Home;
