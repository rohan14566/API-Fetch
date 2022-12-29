  // import axios from 'axios'
import React, { useState,useEffect } from 'react'

function APIComponent() {
    const[Data,setData]=useState()
    useEffect(()=>{
        
        //  *fetch.get (method)*

fetch('https://jsonplaceholder.typicode.com/users')
.then(responce=>responce.json())
.then((json)=>{ console.log(json)
setData(json)})
.catch((error)=>console.log('error'))

           //  *fetch.POST (method)*

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Prepbytes',
//     body: 'web-devloper',
//     userId: 100,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//  .then(responce=>responce.json())
//  .then((json)=>{ console.log(json)})
//  .catch((error)=>console.log('error'))

          //  *axios.get (method)*

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then((response)=>{console.log(response.data)
//   setData(response.data)})
//   .catch((error)=> {console.log(error)})
                  
          //  *axios.post (method)*

//   axios.post('https://jsonplaceholder.typicode.com/posts', {
//     title: 'Prepbytes',
//     body: 'web-devloper',
//     userId: 10,
//   })
//   .then((response)=>{console.log(response.data)})
//   .catch((error)=> {console.log(error)})



},[])
  return (
    <div>
      
      {
        Data && Data.map((item)=>{
          return(
            <>
            <div style={{color:'brown'}}>{item.username}</div>
              <div style={{color:'green'}}>{item.name}</div>

                {/* <div style={{color:'brown'}}>{item.id}</div>
              <div style={{color:'green'}}>{item.name}</div>   */}

            </>
          )
        })
      }
    </div>
  //  <h1>hello</h1>     
  )
}

export default APIComponent