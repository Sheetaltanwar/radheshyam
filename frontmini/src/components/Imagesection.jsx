import React, { useState } from 'react';
import './Imagesection.css'
import { Link } from 'react-router-dom';

const images = [
   {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4gK2RZn8GDZ7O2Zbsw03ajtZOjOttDgApA&s' ,text:'Wild Life'},
   {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaD_LwyOt1FVIYYrIhSe0JTfhkI-hp7iRWw&s',text:'Spiritual Places'},
   {src:'https://chennaitourism.travel/images/places-to-visit/headers/marina-beach-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg',text:'Beaches'},
   {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmNweXWOJiVQcNrJr8c5E2UmMCVSdyFEF2A&s',text:'Hilly Areas'},
   {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgUwwf8Fm8QPwIN-jadI406-N7vxft8x0Cg&s',text:'Economic Hub'}
   ,{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9srPFUlFzD9JcSDkmc1UG9ddcgxQu2r27A&s',text:'Universities'}
 
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < images.length - 4) { // 6 - 4 = 2 moves
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {images.map((item, index) => (
        <Link  style={{textDecoration:'none',color:'rgb(33, 33, 46)'}} to={`image${index}`}>
          <div key={index} className="card">
            <img src={item.src} alt={`Image ${index + 1}`} className="card-image" />
            <div className="card-text">{item.text}</div>
          </div>
        </Link>
        ))}
       
      </div>
      <button className="arrow left" onClick={moveLeft}>
        &#8592;
      </button>

      <button className="arrow right" onClick={moveRight}>
        &#8594;
      </button>
     
    </div>
  );
};

export default Carousel;


