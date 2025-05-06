'use client';
import {
  Box, Button, Stack, Typography, RadioGroup, FormControlLabel,
  Radio, FormLabel, FormControl, IconButton, TextField
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

const Product = () => {
  const product = {
    name: "Printed Anime Hoodie",
    price: 79.99,
    img: "/card1.jpg",
    description: "Captivate with this shirt’s versatile urban look.",
    sku: "GSE-43",
    category: "Mens",
  };

  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity(prev => type === 'inc' ? prev + 1 : Math.max(1, prev - 1));
  };

  const handleBuyNow = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const amount = Math.round(product.price * quantity * 100); // paise

    const orderRes = await fetch("http://localhost:5454/payment/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        currency: "INR",
        userId: "user123", // replace with real user ID if available
        product: product.name,
        quantity,
      }),
    });

    const data = await orderRes.json();

    if (!data.orderId) {
      alert("Failed to create order");
      return;
    }

    const options = {
      key: data.key,
      amount: data.amount,
      currency: "INR",
      name: "Ramanujan Clothing",
      description: product.name,
      order_id: data.orderId,
      handler: async function (response) {
        const verifyRes = await fetch("http://localhost:5454/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const verifyData = await verifyRes.json();

        if (verifyData.status === "success") {
          alert("🎉 Payment Successful!");
        } else {
          alert("❌ Payment Verification Failed");
        }
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return (
    <Stack direction={"row"} spacing={4} p={4} mt={8}>
      <Box width={"50vw"} height={"80vh"} position="relative">
        <Image src={product.img} alt="Product Image" fill style={{ objectFit: 'cover' }} />
      </Box>

      <Stack direction={"column"} spacing={3} justifyContent="center">
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">₹{product.price}</Typography>
        <Typography variant="body1">{product.description}</Typography>

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

        <Box display="flex" alignItems="center" gap={2}>
          <FormLabel>Quantity</FormLabel>
          <IconButton onClick={() => handleQuantityChange('dec')}><Remove /></IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ readOnly: true, style: { width: 30, textAlign: 'center' } }}
          />
          <IconButton onClick={() => handleQuantityChange('inc')}><Add /></IconButton>
        </Box>

        <Stack mt={2} direction={"column"} gap={2}>
          <Button variant="contained">Add to Cart</Button>
          <Button variant="outlined" onClick={handleBuyNow}>Buy Now</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
