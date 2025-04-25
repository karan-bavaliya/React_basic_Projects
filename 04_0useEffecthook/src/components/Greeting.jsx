import React, { useEffect, memo } from "react";

function Greeting({ setcount, value }) {
  useEffect(() => {
    alert("When props update, component re-renders");
  }, [setcount, value]);

  console.log("Greeting rendered with value:", value);

  return (
    <>
      <h2>Hello, {value} 👋</h2>
      <h2>Current Count: {setcount()}</h2>
    </>
  );
}

export default memo(Greeting);
// memo na use thii greeting component aee ek start render thase pachi eky varr nahi but we set dependency.


//usestate ma  (count state) 
