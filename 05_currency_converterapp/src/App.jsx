
// // import './App.css'
// // import  useCurrencyInfo from './compontents/index'

// // function App() {
  
// //   const data=useCurrencyInfo("INR")
// //   object_key = Object.keys(data)
// //   console.log(object_key);
  

// //   return (
// //     <>
// //       <h1 className='text-orange-500 '>Currency converter</h1>
     
// //     </>
// //   )
// // }

// // export default App
// // src/App.js
// import React from 'react';
// import './App.css'
// import useCurrencyInfo from './components/index'


// function App() {
//   const data = useCurrencyInfo("inr");
//   const object_keys = Object.keys(data || {}); // handle case when data is undefined

//   console.log(object_keys); // Logs currency names like usd, eur, etc.

//   return (
//     <>
//          <ul>
//         {object_keys.map((key) => (
//           <li key={key}>
//             hello
//             {key.toUpperCase()} : {data[key]}
//           </li>
//         ))}
//       </ul>
//       <h1 className='text-orange-500'>Currency Converter</h1>
 
//     </>
//   );
// }

// export default App;
import React, { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const refValue = useRef(100);

  const handleClick = () => {
    setCount(count + 1);         // update state
    refValue.current += 1;       // update ref
    console.log("Ref Value:", refValue.current);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Value: {refValue.current}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
export default App
