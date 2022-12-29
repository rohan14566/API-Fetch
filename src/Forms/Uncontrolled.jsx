import React,{useRef} from 'react'
function Uncontrolled() {
  const nameRef=useRef();
  const numberRef=useRef();

  function OnSubmits(e){
    e.preventDefault();
    console.log('Name Value: '+nameRef.current.value)
    console.log('number Value: '+numberRef.current.value)
  };
 
  return (
    <div>
        <form onSubmit={OnSubmits}>
        <input type="text" placeholder='Enter Name' ref={nameRef}/><br/>
        <input type="number" placeholder='phone No' ref={numberRef}/><br/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled