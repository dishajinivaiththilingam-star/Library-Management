import React from 'react'
import { IoLibrary } from 'react-icons/io5'

const Donate = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% p-15'>
        <p className='text-white text-2xl font-extrabold text-center'><span><IoLibrary className='ml-200 text-3xl' /></span>Donate Books to Library</p>
        <p className='text-white text-center '>Help others learn and grow</p>
      </div>
      <div className='w-150 ml-100 pt-20  '>
        <div className=' shadow-xl pt-5  h-100'>
          <p className='text-center font-extrabold text-xl'>Donate Your Books</p>
          <input type="text" placeholder='Your Name' className='border-1 mt-8 rounded-[5px] ml-5 w-70' />
          <input type="text" placeholder='Email' className='border-1 mt-8 rounded-[5px] ml-5 w-70' /> <br />
          <input type="text" placeholder='Book Title' className='border-1 mt-8 rounded-[5px] ml-5 w-70' />
          <input type="text" placeholder='Quantity' className='border-1 mt-8 rounded-[5px] ml-5 w-70' /> <br />
          <input type="text" placeholder='Message (Optional)' className='border-1 mt-8 rounded-[5px] ml-5 w-145 p-6' /> <br />
          <button className='bg-blue-600 text-white rounded-[5px] mt-10 w-full p-2'>Submit Donation</button>

        </div>
      </div>
    </div>
  )
}

export default Donate
