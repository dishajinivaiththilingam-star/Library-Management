import React from 'react'

const Book = (props) => {
    return (

        <div className='flex-[1_1_calc(13.333%-20px)] bg-[rgb(59,82,102)] border border-black rounded-[15px] p-[10px] shadow-[...] text-center w-[200px]'>
            <img src={props.src} className='rounded-[10px] w-[100%] h-[150px]' />
            <h1 className='text-lg text-left italic'>{props.title}</h1>
            <h4 className='text-xs text-left'>{props.bookno}</h4>
            <h4 className='text-xs text-left'>{props.date}</h4>
        </div>

    )
}

export default Book
