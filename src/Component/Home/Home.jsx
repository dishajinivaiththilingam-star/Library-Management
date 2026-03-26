import React from 'react'
import { FaPaintBrush } from 'react-icons/fa'
import { FaBookQuran } from 'react-icons/fa6'
import { IoAppsOutline } from 'react-icons/io5'
import { PiBooksFill, PiMathOperationsFill } from 'react-icons/pi'
import Homelist from './Homelist'
import { CiSearch } from 'react-icons/ci'

const Home = () => {
  return (
    <div>
      <div className='w-full h-150 bg-cover bg-center '
        style={{ backgroundImage: "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxODA3MTcwLXdpa2ltZWRpYS1pbWFnZS1rb3drdW55dS5qcGc.jpg')" }}>
        <p className='text-white text-center font-extrabold text-7xl pt-50'>Library Management System</p>
        <div className='flex'>
          <input type="text" placeholder='Search' className=' p-4 w-120 mt-10 ml-110 rounded-[15px] bg-gray-300 text-center' />
          <span className='text-white text-[40px]  pt-12'><CiSearch /></span>
        </div>


      </div>
      <div>
        <p className='text-gray-500 text-center text-4xl pt-5 font-bold'>Select the topic you are interested in</p>
      </div>
      <div className='pt-10'>
        <div className='flex gap-10 justify-around  pt-5'>
            <div className='w-50 shadow-lg text-3xl font-bold text-blue-900 '>
              <img src="https://static.vecteezy.com/system/resources/previews/033/291/546/non_2x/literature-icon-in-illustration-vector.jpg" />
              <p className='text-center'>Literature</p>
            </div>
            <div className='w-50 shadow-lg text-3xl font-bold text-blue-900 '>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/021/894/495/small/cute-eggplant-character-illustration-flat-eggplant-cartoon-character-waving-minimal-purple-eggplant-fruit-design-for-children-books-eggplant-cartoon-character-vector.jpg"  />
              <p className='text-center'>Art</p>
            </div>
            <div className='w-50 shadow-lg text-3xl font-bold text-blue-900 '>
              <img src="https://thumbs.dreamstime.com/b/math-icon-vector-symbols-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-logo-print-143263139.jpg" />
              <p className='text-center'>Mathematics</p>
            </div>
            <div className='w-50 shadow-lg text-3xl font-bold text-blue-900 '>
              <img src="https://thumbs.dreamstime.com/b/global-icon-vector-image-suitable-mobile-application-web-print-media-327690712.jpg"/>
              <p className='text-center'>Global</p>
            </div>
            <div className='w-50 shadow-lg text-3xl font-bold text-blue-900 '>
              <img src="https://www.shutterstock.com/image-vector/read-more-icon-vector-260nw-735150244.jpg" />
              <p className='text-center'>See More</p>
            </div>
            
        </div>
      </div>
      <div className='pt-10'>
        <p className='text-3xl text-center text-white bg-blue-500 font-bold'>Popular Books among Our Collection</p>
      </div>
      <div className='flex gap-5 pt-10' >
        <Homelist
          image='https://mdgunasena.com/wp-content/uploads/2023/07/10078505.jpg'
          title='Treasure Island'
          data='Treasure Island is an adventure and historical novel by Scottish novelist Robert Louis Stevenson.' />
        <Homelist
          image='https://m.media-amazon.com/images/I/81uaGXiRF4L._AC_UF894,1000_QL80_.jpg'
          title='The Old Man and Sea'
          data='The Old Man and the Sea is a 1952 novella by the American author Ernest Hemingway. ' />
        <Homelist
          image='https://m.media-amazon.com/images/I/714qk9Flt4L._AC_UF1000,1000_QL80_.jpg'
          title='A History of Mathematics'
          data='The updated new edition of the classic and comprehensive guide to the history of mathematics For more than forty years.' />
        <Homelist
          image='https://m.media-amazon.com/images/I/71v-xl+iayL._AC_UF1000,1000_QL80_.jpg'
          title='Hindu Mythology'
          data='Top Hindu mythology books include foundational epics like the Ramayana and Mahabharata by Devdutt Pattanaik and Amish Tripathi.' />
        <Homelist
          image='https://m.media-amazon.com/images/I/61Ngvj4NjTL._AC_UF1000,1000_QL80_.jpg'
          title='Library Management'
          data='This book explains the different managerial roles at libraries, looking at the levels of managers, what they do, and how they do it.' />
        <Homelist
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMX1n4iqZL8tzhnpauA6Y1Q8OQk4GYcpTVQ&s'
          title='Concept of Computer Science'
          data='The Foundational Concepts of CS by Salman Hassan is a comprehensive guide tailored for students preparing for CSS.' />
      </div>
      <div className='pt-10'>
        <p className='text-3xl text-center text-white bg-blue-500 font-bold'>New Collections</p>
      </div>
      <div className='flex gap-5 pt-10'>
        <Homelist
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiqpy-DLu_2wS49oUb8ZN6YQjzPQrbIETjg&s'
          title='The Reformatory'
          data='The Reformatory is a 2023 novel by Tananarive Due which combines elements of horror, historical fiction, and literary fiction.' />
        <Homelist
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsUKSE1kdw0AdAlBGpcSUrOZzMUowwct61Q&s'
          title='Assistant to the Villain '
          data='The story, described as "The Office meets Once Upon a Time," features humor, romance, and a "sunshine" assistant falling for her dark boss ' />
        <Homelist
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4E31N2g1vCUQPlRZsZSK4kW7-vojC1gm9g&s'
          title='The Red Winter '
          data='A devastating love story. A bewitching twist on history. A blood-drenched hunt for purpose, power, and redemption' />
        <Homelist
          image='https://m.media-amazon.com/images/I/61rd1Rh3UiL._AC_UF1000,1000_QL80_.jpg'
          title='Time Management'
          data=' Eat That Frog! is highly recommended for overcoming procrastination, while Atomic Habits helps build lasting routines.' />
        <Homelist
          image='https://www.summary.com/wp-content/uploads/2022/06/The-21-Irrefutable-Laws.jpg'
          title='The Laws Of Leadership'
          data=' The 21 Irrefutable Laws of Leadership: Follow Them and People Will Follow You is a 1998 book written by John C.' />
      </div>
    </div>
  )
}

export default Home
