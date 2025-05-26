import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import ChatBoxAI from "../../components/chatbotAI";
import Sidebar from "./SideBar";
import { PRODUCTS } from "../../config/product";

const Home = () => {
  const [categoryCode, setCategoryCode] = useState(0);
  return (
    <div className="flex flex-col sm:gap-4 gap-6 w-full h-full">
      <Header />
      <div className="flex w-full sm:px-0 sm:gap-2 gap-6 px-4  h-[calc(100%-70px)]">
        <Sidebar
          setCategoryCode={setCategoryCode}
          categoryCode={categoryCode}
        />
        <Body products={PRODUCTS[categoryCode]} />
      </div>
      <ChatBoxAI />
    </div>
  );
};

export default Home;
