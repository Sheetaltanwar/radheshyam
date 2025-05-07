import React, { useState } from 'react';
import './ImageCarousel.css';

const images = [
  
  { src: 'https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1727352314555', text: 'Red Fort (Delhi)' },
 
   {src:'https://as2.ftcdn.net/v2/jpg/05/96/66/17/1000_F_596661781_CTvwKCs6iBBjfhUGv4b6t6sGw9XYPZ3f.jpg',text:'India Gate (Delhi)'},
    {src:'https://as2.ftcdn.net/v2/jpg/00/40/95/13/1000_F_40951343_fGhLXiCNbWAo5kgy6CYt1zjTfVRoMrbr.jpg',text:'Konark Sun Temple (Odisha)'},
    {src:'https://as2.ftcdn.net/v2/jpg/05/02/70/43/1000_F_502704385_HFrZe1IMOYxnfJyzDaLW5d1LIlfKsp9F.jpg',text:'Meenakshi Temple (Tamil Nadu)'},
    {src:'https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxsb3JhJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D',text:'Ajanta and Ellora Caves'},
    {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1200px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg',text:'Ram Mandir (Ayodhya)'},
    {src:'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/9/golden-temple_1663763909577_0_1200.jpg',text:'Golden Temple (Punjab)'},
    {src:'https://img.veenaworld.com/wp-content/uploads/2022/02/New-Taj-Paradise-.jpg?imwidth=1300',text:'Taj Mahal'}
];

const SingleImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="single-carousel-container">
      <div className="image-wrapper">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].text}
          className="carousel-image"
        />
        <div className="image-text">{images[currentIndex].text}</div>
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

export default SingleImageCarousel;
