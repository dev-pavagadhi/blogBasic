"use client"
import React, { useState } from 'react'

function UpvoteBtn() {
    const [count,setCount]=useState(0)
  return (
    <button className="bg-blue-600 text-white" onClick={()=>{
        setCount(count+1)

      }}>{count}
        
        Upvote</button>
  )
}

export default UpvoteBtn