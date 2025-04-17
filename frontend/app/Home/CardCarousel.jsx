"use client";
import { useState, useRef, useEffect } from 'react';
import { Stack,Box,Typography,Button} from '@mui/material'
import styles from './Carousel.module.css';
import img1 from "../../public/imag1.jpg"
import img2 from "../../public/image7.jpg"
import img3 from "../../public/image5.jpg"
import Card from './Card';
const CardCarousel = () => {
    const cardImages = [img1, img2, img3, img1,img2,img3,img2];
    
  const goToCardSlide = (index) => {
    const total = cardImages.length;
    const newIndex = (index + total) % total;
    setCardIndex(newIndex);
  };
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);
    const trackRef = useRef(null);
    const cardTrackRef = useRef(null);

    
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
    {/* WHAT'S NEW Section */}
    <Stack direction="column" spacing={2} mt={7} ml={5} mr={5} mb={8}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize={40} fontFamily={"fantasy"} fontStyle={"oblique"}>
            WHAT'S NEW THIS WEEK
          </Typography>
          <Box  display={'flex'} flexDirection={"row"} gap={2} justifyContent={'center'} alignItems={'center'}>
            <button  onClick={() => goToCardSlide(cardIndex - 1)} variant="contained" sx={{ mr: 1 }}>
              &#10094;
            </button>
            <button onClick={() => goToCardSlide(cardIndex + 1)} variant="contained">
              &#10095;
            </button>
          </Box>
        </Box>

        <div className={styles.cardCarousel}>
          <div className={styles.cardTrackWrapper}>
            <div className={styles.cardTrack} ref={cardTrackRef}>
              {cardImages.map((img, i) => (
                <div key={i} className={styles.cardSlide}>
                  <Card img={img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Stack>
    </>
  )
}

export default CardCarousel
