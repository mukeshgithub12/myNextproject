'use client'
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image';


const Gallery = () => {
  const images = [
    {
      src: 'https://source.unsplash.com/random/800x700?flowers',
      caption: 'Image 1',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?water',
      caption: 'Image 2',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?fruit',
      caption: 'Image 3',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?city,night',
      caption: 'Image 4',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?toy',
      caption: 'Image 5',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?wild',
      caption: 'Image 6',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?home',
      caption: 'Image 7',
    },
    // Add more images as needed
    {
      src: 'https://source.unsplash.com/random/800x700?style',
      caption: 'Image 8',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?coding',
      caption: 'Image 9',
    },
    {
      src: 'https://source.unsplash.com/random/800x700?phone',
      caption: 'Image 10',
    },{
      src: 'https://source.unsplash.com/random/800x700?bag',
      caption: 'Image 10',
    },{
      src: 'https://source.unsplash.com/random/800x700?mountain',
      caption: 'Image 10',
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <h1 className='pt-8 text-center text-4xl font-bold text-indigo-700'>My Gallery</h1>
      <div className='flex flex-wrap gap-2 justify-evenly py-6'>
        {/* Render your gallery with thumbnail images */}
        {images.map((image, index) => (
          <div key={index} onClick={() => openLightbox(index)}>
            <Image src={image.src} alt={image.caption} width={350} height={350} />
            {/* <p>{image.caption}</p> */}
          </div>
        ))}

        {/* Lightbox component */}
        {lightboxOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            imageTitle={images[photoIndex].caption}
            imageCaption={images[photoIndex].caption}
          />
        )}
      </div>
    </>
  );
}

export default Gallery;
