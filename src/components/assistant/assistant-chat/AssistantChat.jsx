import React from 'react';

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
        <p>Aquí estará un chat... De momento no está</p>
      </div>
    </div>
  );
};

export default AssistantChat;