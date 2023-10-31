import React, { useState } from 'react';
import { SimpleLayout } from "../../Component/SimpleLayout/SimpleLayout"
import sermonBg from '../../Assets/sermons.png'

const sermonfile = [
  {
    
    "name": "VP Dabira",
    "title": "Salvation Through Faith",
    "date": "30th October, 2023",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  },
  {
    "name": "Bro. Damola Olutoke",
    "title": "Rebirth",
    "date": "25th October, 2023",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  },
  {
    "name": "Bro. Ajao Peter",
    "title": "The Prayer of Faith",
    "date": "23rd October, 2023",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  },
  {
    "name": "Bro Dolapo",
    "title": "Academic Symposium: Aglow in the Spirit in our academics",
    "date": "22nd October, 2023",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  },
  {
    "name": "Sis Motunrayo",
    "title": "Destiny",
    "date": "18th October, 2023",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  },
  {
    "name": "Bro Daniel Omonitan",
    "title": "The Road to Redemption",
    "date": "15 August",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  },
  {
    "name": "Sermon 7",
    "title": "The Power of Faith",
    "date": "30 September",
    "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto cum fugit voluptatibus. Optio, architecto sunt. Iste ducimus quas fuga facilis assumenda. Ipsam placeat porro voluptatibus modi quas commodi, dicta magnam?",
    "link": "https://t.me/c/1405271652/190"
  }
]



function SermonCard({name, title, date, content, link}) {
  return (
    <>
    <div className="my-6">
      <div className="bg-white px-4 py-5 sm:px-6 rounded-lg border border-opacity-20 backdrop-blur-md backdrop-filter hover:backdrop-blur-lg">
      <div className="flex space-x-3">
        {/* <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-[50]"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div> */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">
            <a href="/" className="hover:underline">
              {title}
            </a>
          </p>
          <p className="text-sm text-gray-500 my-1">
            {name} | {date}
          </p>
        </div>
        <div className="flex flex-shrink-0 self-center">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                <a href={link} target="new">
                 
                  Listen
                </a>
                
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-5">
        {content} 
      </div>
      </div>
    </div>
    </> 
  )
  
}

export default function NewSermon() {
  const [showMore, setShowMore] = useState(false);
  const visibleSermons = showMore ? sermonfile : sermonfile.slice(0, 4);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
    <div className="relative">
      <img
        src={sermonBg}
        alt="Hero"
        className="w-full h-50" 
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">Sermon</div>
      </div>
    </div>

    <SimpleLayout> 
      {visibleSermons.map((sermon, index) => (
        <SermonCard
          key={index}
          name={sermon.name}
          title={sermon.title}
          date={sermon.date}
          content={sermon.content}
          link={sermon.link}
        />
      ))}


      {sermonfile.length > 4 && (
        <div className="flex justify-center items-center">
          <button
            className="my-4 bg-gray-500 hover:bg-gray-600 rounded-full text-center text-white font-semibold px-4 py-2 mt-4"
            onClick={toggleShowMore}
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </div>
      
        )}
    </SimpleLayout>
    </>
   
  )
}
