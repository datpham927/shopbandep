/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import ChatBotAIModal from "./ChatBotAIModal";

const ChatBoxAI = () => {
  const [isOpenBox, setIsOpenBox] = useState(false);
  return (
    <div className="fixed right-10 bottom-10 z-50">
      <div
        onClick={() => setIsOpenBox(true)}
        className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
        title="Nhấn để mở trợ lý"
      >
        <div className="w-16 h-16 rounded-full shadow-xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
          <img
            src="https://photo.salekit.com/uploads/fchat_5b4872d13803896dd77125af/logo1.png" // dùng ảnh bạn vừa up nếu cần
            alt="Assistant"
            className="w-12 h-12"
          />
        </div>
      </div>
      <ChatBotAIModal isOpenBox={isOpenBox} setIsOpenBox={setIsOpenBox} />
    </div>
  );
};

export default ChatBoxAI;
