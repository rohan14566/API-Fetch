import React, { useState } from 'react'

function Controlled() {
  const[name,setName]=useState('');
  const[number,setNumber]=useState('');

  function OnSubmits(e){
    e.preventDefault();
    console.log('Name Value: '+ name)
    console.log('number Value: '+ number)
  };
  const Function1=(e)=>{
    setName(e.target.value)
  }
  const Function2=(e)=>{
    setNumber(e.target.value)
  }
  return (
    <div>
        <form onSubmit={OnSubmits}>
        <input type="text" placeholder='Enter Name' value={name} onChange={Function1}/><br/>
        <input type="number" placeholder='phone No' value={number} onChange={Function2}/><br/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Controlled