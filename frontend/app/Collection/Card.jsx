"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Box,
  Stack,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Card Component
const Card = ({ product_id, product_name, product_price, product_image, onAddToCart }) => {
  return (
    <Box
      width="35vh"
      height="60vh"
      sx={{
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Link href={`/product/${product_id}`} passHref>
        <Box width="100%" height="50vh" position="relative" overflow="hidden">
          <Image
            src={product_image || "/fallback.jpg"}
            alt={product_name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Typography fontSize={18} fontWeight={600} mt={1}>
          {product_name}
        </Typography>
        <Typography fontSize={13} fontWeight={100}>
          ${product_price}
        </Typography>
      </Link>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 1, textTransform: "none" }}
        onClick={() => onAddToCart({ product_id, product_name, product_price })}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default Card;
