import React from 'react';
import Chat from '../../components/chat/Chat';

const AssistantChat = () => {
  return (
    <div className="w-full border-2 border-solid border-gray-300">
      <div className="w-full p-3">
        <div className="w-full py-3 flex flex-wrap justify-between items-baseline">
          <strong>Chat</strong>
        </div>
        <hr className="w-full border-b-2 border-solid border-gray-200" />
      </div>

      <div className="w-full p-3">
        <Chat />
      </div>
    </div>
  );
};

export default AssistantChat;