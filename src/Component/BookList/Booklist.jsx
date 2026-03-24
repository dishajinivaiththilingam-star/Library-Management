import React from 'react'

import pic1 from '../../assets/image11.avif'
import pic2 from '../../assets/images (1).jpg'
import pic3 from '../../assets/images (2).jpg'
import pic4 from '../../assets/images (3).jpg'
import pic5 from '../../assets/images (4).jpg'
import pic6 from '../../assets/images (5).jpg'
import pic7 from '../../assets/images (6).jpg'
import pic8 from '../../assets/images (7).jpg'
import pic9 from '../../assets/images (8).jpg'
import pic10 from '../../assets/images (9).jpg'
import pic11 from '../../assets/images (10).jpg'
import pic12 from '../../assets/images (11).jpg'
import pic13 from '../../assets/images.jpg'
import pic14 from '../../assets/mze053.jpg'
import Book from './Book'

const Booklist = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold p-[10px]'>Book List</h1>
            </div>
            <div className='flex flex-wrap gap-[75px] bg-[rgb(65,121,121)] p-[45px] justify-center'>
                <Book src={pic1} title='George Bellairs Death Before Breakfast' bookno='0001' date='1990/12/24' />
                <Book src={pic2} title='A Million to One' bookno='0002' date='2001/02/04' />
                <Book src={pic3} title='Sin Eather' bookno='0003' date='1997/09/23' />
                <Book src={pic4} title='Harry Potter' bookno='0004' date='2005/08/09' />
                <Book src={pic5} title='James and the Giant Peach' bookno='0005' date='2017/06/13' />
                <Book src={pic6} title='A Game of Thrones' bookno='0006' date='1985/07/05' />
                <Book src={pic7} title='Game of Thrones' bookno='0007' date='2023/05/07' />
                <Book src={pic8} title='Deadly Desire' bookno='0008' date='2021/07/26' />
                <Book src={pic9} title='Ponniyin Selvan-1' bookno='0009' date='2003/08/04' />
                <Book src={pic10} title='Ponniyin Selvan-5 Part' bookno='0010' date='2001/05/09' />
                <Book src={pic11} title='Kirama Piravazhvu' bookno='0011' date='2017/04/25' />
                <Book src={pic12} title='One man One home One world' bookno='0012' date='2005/04/25' />
                <Book src={pic13} title='The Sum of All Things' bookno='0013' date='1988/03/22' />
                <Book src={pic14} title='Parththeepan kanavu' bookno='0014' date='2008/11/29' />
            </div>
        </div>
    )
}

export default Booklist
