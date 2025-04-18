'use client';
import {
  Box,
  Button,
  Stack,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  IconButton,
  TextField,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

const Product = () => {
  const product = {
    name: "Printed Anime Hoodie",
    price: 79.99,
    img: "/card1.jpg",
    description:
      "Captivate with this shirt’s versatile urban look that works as well at happy hours as it does in the backyard.",
    sku: "GSE-43",
    category: "Mens",
  };

  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'inc') {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  return (
    <Stack direction={"row"} spacing={4} p={4} mt={8}>
      <Box width={"50vw"} height={"80vh"} position="relative">
        <Image src={product.img} alt="Product Image" fill style={{ objectFit: 'cover' }} />
      </Box>

      <Stack direction={"column"} spacing={3} justifyContent="center">
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="body1">{product.description}</Typography>

        {/* Size Selector */}
        <FormControl>
          <FormLabel>Choose Size</FormLabel>
          <RadioGroup
            row
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <FormControlLabel value="S" control={<Radio />} label="S" />
            <FormControlLabel value="M" control={<Radio />} label="M" />
            <FormControlLabel value="L" control={<Radio />} label="L" />
            <FormControlLabel value="XL" control={<Radio />} label="XL" />
          </RadioGroup>
        </FormControl>

        {/* Quantity Selector */}
        <Box display="flex" alignItems="center" gap={2}>
          <FormLabel>Quantity</FormLabel>
          <IconButton onClick={() => handleQuantityChange('dec')}>
            <Remove />
          </IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ readOnly: true, style: { width: 30, textAlign: 'center' } }}
          />
          <IconButton onClick={() => handleQuantityChange('inc')}>
            <Add />
          </IconButton>
        </Box>

        {/* Buttons */}
        <Stack mt={2} direction={"column"} gap={2}>
          <Button variant="contained">
            Add to Cart
          </Button>
          <Button variant="outlined">Buy Now</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
