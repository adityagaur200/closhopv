import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ img, name, price, id }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <Box
        width="35vh"
        height="60vh"
        sx={{
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Box width="100%" height="50vh" position="relative" overflow="hidden">
          <Image src={img} alt="Product Image" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Typography fontSize={18} fontWeight={600} mt={1}>
          {name}
        </Typography>
        <Typography fontSize={13} fontWeight={100}>
          ${price}
        </Typography>
      </Box>
    </Link>
  );
};

export default Card;
