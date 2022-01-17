import React from 'react';

const Chat = () => {
  return (
    <div className='w-full border-2 border-solid border-gray-200'>
      <div className="w-full flex flex-nowrap items-center border-b-2 border-solid border-gray-200 py-1 px-2">
        <div className="">
          <img className='w-14 rounded-full' src="https://pbs.twimg.com/media/E00dat2WUAM46L1.jpg" alt="" />
        </div>
        <div className="px-2 text-sm w-full"><span>Rafael Estrada</span></div>
        <div className="">
          <img className='w-10 rounded-full' src="https://icon-library.com/images/three-line-menu-icon/three-line-menu-icon-11.jpg" alt="" />
        </div>
      </div>

      <div className="w-full h-48 overflow-y-auto flex flex-col-reverse">

        <div className="px-2 py-1 w-full h-auto flex flex-wrap justify-end">
          <div className="rounded-bl-xl w-3/4 rounded-t-xl py-2 px-3 text-sm h-auto bg-gray-500 text-white">
            Globo de texto num 1
          </div>
        </div>
        <div className="px-2 py-1 w-full h-auto flex flex-wrap justify-start">
          <div className="rounded-br-xl w-3/4 rounded-t-xl py-2 px-3 text-sm h-auto bg-gray-500 text-white">
            Globo de texto num 2
          </div>
        </div>

      </div>

      <div className="w-full flex flex-nowrap border-t-2 border-solid border-gray-200 py-2 px-2">
        <input className='w-full rounded-l-full px-2 py-1 border-2 border-solid border-gray-200 text-sm' type="text" placeholder='escribe aquí...' />
        <button className='bg-gray-700 text-white text-sm px-2 py-1 rounded-r-full'>enviar</button>
      </div>
    </div>
  );
};

export default Chat;