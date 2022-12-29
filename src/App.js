

// import { useEffect, useState } from 'react';
import './App.css';
// import Controlled from './Forms/Controlled';
//  import Uncontrolled from './Forms/Uncontrolled';
  import APIComponent from './Component/APIComponent'


function App() {
  
//   const [count,setCount]=useState(0);
// const Handler=()=>{
//   setCount(count+1)
// };
//   useEffect(()=>{
//    console.log("Use Effect Called")
//   },[]);

  return (
//     <>
// <h1>count up:{count}</h1>
// <button onClick={Handler}>click me</button>
<>
{/* <Controlled/> */}
 {/* <Uncontrolled/>  */}
  <APIComponent/>  
</>  
  );
}

export default App;
