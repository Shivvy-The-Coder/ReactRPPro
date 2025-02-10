import {useState} from 'react';
const App = () => {

   const [color, setcolor] = useState('white');


   
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center w-full shadow-lg bf-white px-3 py-2  rounded-3xl">
          <button
          // below we can see that the setcoor has been coallled dorectly  
            onClick={() => setcolor('red')}
            className="bg-black text-white px-10 rounded"
          >
            Red
          </button>
          <button
            onClick={() =>setcolor('blue')}
            className="bg-black text-white px-10 rounded"
          >
            Blue
          </button>
          <button
            onClick={() => setcolor('green')}
            className="bg-black text-white px-10 rounded"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
