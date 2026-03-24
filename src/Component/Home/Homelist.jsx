import React from 'react'

const Homelist = (props) => {
  return (
    <div className='bg-blue-100'>
      <img src={props.image} className='h-[400px] shadow-lg ' />
      <p className='text-xl font-bold pl-5'>{props.title}</p>
      <p className='pl-5'>{props.data}</p>
    </div>
  )
}

export default Homelist
