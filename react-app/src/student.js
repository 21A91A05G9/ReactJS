import React from 'react'

export default function Student() {
  const person=[
    {
        name:'vasavi',
        no:'g9'
    },
    {
        name:'sunil',
        no:'b1'
    }

  ]
  return (
    <>
      {
         person.map((ele)=>{
            <h1>{ele.name }</h1>
         })
      }
       <h1>{person[0].name}</h1> 
    </>
  )
}

