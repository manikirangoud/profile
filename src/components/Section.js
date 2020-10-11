import React, { useState }  from 'react';

function Section() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-2 ml-3 mr-3 p-3 border rounded bg-white"> 
      <h1 className="text-center font-bold text-xl p-2">{count}</h1>
      <div className="text-center">
        <button onClick={() => setCount(count - 1)}
          className="bg-white hover:bg-gray-200 mr-3 text-black font-bold
          py-2 px-4 border border-gray-400 rounded shadow">Decrement
        </button>
        <button onClick={() => setCount(count + 1)}
          className="bg-white hover:bg-gray-200 text-black font-bold 
          py-2 px-4 border border-gray-400 rounded shadow">Increment
        </button>
      </div>
    </div>
  );
}

export default Section;
