import { Box, Button, Typography } from '@mui/material';

import Image from 'next/image';
import React from 'react';

const Card = ({ img }) => {
  return (
    <Box width="40vh" height="60vh" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
      <Box width="100%" height="50vh" position="relative" borderRadius={2} overflow="hidden">
        <Image src={img} alt="New Image" fill style={{ objectFit: 'cover' }} />
      </Box>
      <Typography fontSize={20} fontWeight={550} display={'flex'} alignContent={"start"}>
        New Denim Jackets
      </Typography>

      <Button style={{backgroundColor:"black",color:"white"}} href='/Collection'> 
        Shop All Collection
      </Button>
    </Box>
  );
};

export default Card;
