"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';
import { Stack, Typography, Box, Button } from '@mui/material';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import Image from 'next/image';
import img1 from "../../public/poster1.jpg";
import img2 from '../../public/poster2.jpg';
import img3 from '../../public/poster3.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const trackRef = useRef(null);
  const cardTrackRef = useRef(null);

  const images = [img1, img2, img3];
  

  const goToSlide = (index) => {
    const total = images.length;
    const newIndex = (index + total) % total;
    setCurrentIndex(newIndex);
  };


  const updateImageTransform = () => {
    const slideWidth = trackRef.current?.children[0]?.offsetWidth;
    if (slideWidth) {
      trackRef.current.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  };

  const updateCardTransform = () => {
    const cardWidth = cardTrackRef.current?.children[0]?.offsetWidth;
    if (cardWidth) {
      cardTrackRef.current.style.transform = `translateX(-${cardWidth * cardIndex}px)`;
    }
  };

  useEffect(() => {
    updateImageTransform();
    window.addEventListener('resize', updateImageTransform);
    return () => window.removeEventListener('resize', updateImageTransform);
  }, [currentIndex]);

  useEffect(() => {
    updateCardTransform();
    window.addEventListener('resize', updateCardTransform);
    return () => window.removeEventListener('resize', updateCardTransform);
  }, [cardIndex]);

  return (
    <>
      {/* Hero Carousel */}
      <div className={styles.carousel}>
        <button className={`${styles.btn} ${styles.left}`} onClick={() => goToSlide(currentIndex - 1)}>
          &#10094;
        </button>

        <div className={styles.trackWrapper}>
          <div className={styles.track} ref={trackRef}>
            {images.map((img, i) => (
              <div key={i} className={styles.slide}>
                <Image src={img} alt={`Slide ${i + 1}`} fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        <button className={`${styles.btn} ${styles.right}`} onClick={() => goToSlide(currentIndex + 1)}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Carousel;
