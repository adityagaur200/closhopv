'use client';
import React from 'react';
import Card from './Card';
import { Grid, Container, Box, Stack, Typography, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';

const Page = () => {
  const product = [
    {
      id: 'wireless-headphones',
      name: "Wireless Headphones",
      price: 79.99,
      img: "/card1.jpg"
    },
    {
      id: 'smart-watch',
      name: "Smart Watch",
      price: 149.99,
      img: "/hoddies.jpg"
    },
    {
      id: 'bluetooth-speaker',
      name: "Bluetooth Speaker",
      price: 39.99,
      img: "/image1.jpg"
    },
    {
      id: 'gaming-mouse',
      name: "Gaming Mouse",
      price: 29.99,
      img: "/image5.jpg"
    },
    {
      id: 'mechanical-keyboard',
      name: "Mechanical Keyboard",
      price: 59.99,
      img: "/image7.jpg"
    },
    {
      id: 'usb-c-hub',
      name: "USB-C Hub",
      price: 24.99,
      img: "/hoddies.jpg"
    },
    {
      id: 'portable-ssd',
      name: "Portable SSD 1TB",
      price: 119.99,
      img: "/hoddies1.jpg"
    }
  ];

  return (
    <Stack direction={"row"} mt={10} ml={5}>
      {/* Filters */}
      <Stack direction={"column"} width={"25vw"}>
        <Typography fontSize={15} fontWeight={600}>FILTER BY</Typography>

        <FormControl>
          <FormLabel>Price</FormLabel>
          <RadioGroup name="price-range">
            <FormControlLabel value="below1k" control={<Radio />} label="Below 1k" />
            <FormControlLabel value="1k-2k" control={<Radio />} label="1k-2k" />
            <FormControlLabel value="2k-5k" control={<Radio />} label="2k-5k" />
            <FormControlLabel value="above5k" control={<Radio />} label="Above 5k" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Availability</FormLabel>
          <RadioGroup name="availability">
            <FormControlLabel value="instock" control={<Radio />} label="In Stock" />
            <FormControlLabel value="outstock" control={<Radio />} label="Out of Stock" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Category</FormLabel>
          <RadioGroup name="category">
            <FormControlLabel value="Mens" control={<Radio />} label="Mens" />
            <FormControlLabel value="Kids" control={<Radio />} label="Kids" />
            <FormControlLabel value="Women" control={<Radio />} label="Women" />
          </RadioGroup>
        </FormControl>
      </Stack>

      {/* Product Grid */}
      <Box>
        <Grid container spacing={2}>
          {product.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} lg={4} key={item.id}>
              <Card img={item.img} name={item.name} price={item.price} id={item.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Page;
