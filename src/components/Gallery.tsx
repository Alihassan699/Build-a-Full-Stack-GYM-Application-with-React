import React from 'react';

function Gallery() {

  const gallery = [
    "/bmi.jpg",
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg"
  ];

  return (
    <section className='gallery'>
      <h1>Better Beats Best</h1>
      <div className="images">
        {gallery.slice(0, 3).map((element, index) => (
          <img key={index} src={element} alt='galleryImage'></img>
        ))}
      </div>
      <div className="images">
        {gallery.slice(3, 6).map((element, index) => (
          <img key={index} src={element} alt='galleryImage'></img>
        ))}
      </div>
      <div className="images">
        {gallery.slice(6, 9).map((element, index) => (
          <img key={index} src={element} alt='galleryImage'></img>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
