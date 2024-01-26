import React, { useState } from 'react'
import Card from './Card'

function Forground() {
   //  const data =[ 
       // icon, name,filesize,closeprdownload,tagodetails 
     //];
     const data=[
        {
            desc:' Cows are domesticated mammals known for their gentle nature They provide milk, meat, and other products. Sacred in some cultures.', 
            filesize:".9mb",
            close:true,
            tag: { isOpen:true,tagtitle:'downloadnow',tagcolor:'green'},
              
            
            
        },
        {
            desc:' lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 
            filesize:".9mb",
            close:true,
            tag: { isOpen:true,tagtitle:'downloadnow',tagcolor:'blue'},
              
        },
        {
            desc:'   you are a good boy.', 
            filesize:".9mb",
            close:true,
            tag: { isOpen:true,tagtitle:'downloadnow',tagcolor:'green'},
              
        },
     ];
  return (

    <div className='w-full p-5  fixed z-[3] h-full top-0 flex gap-10 flex-warp left-0 '>
     {data.map((item,index)=>(
        <Card data={item}/>
     ))}
        
    </div>
      
    
  )
}

export default Forground
