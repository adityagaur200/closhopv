"use client"
import {
    Box,
    Button,
    Stack,
    Typography,
    Paper,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField
  } from '@mui/material';
  import React, { useState } from 'react';
  
  const Cart = () => {
    const cartItems = [
      { id: 1, name: 'Nike Air Max', price: 5999 },
      { id: 2, name: 'Adidas Ultraboost', price: 8499 },
      { id: 3, name: 'Puma Suede Classic', price: 3299 },
    ];
  
    const [openAddressDialog, setOpenAddressDialog] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('Aditya Gaur, BrijDham near Ramleela ground.');
    const [newAddress, setNewAddress] = useState('');
    const [addresses, setAddresses] = useState([
      'Aditya Gaur, BrijDham near Ramleela ground.',
      'House 42, Dream City, Jaipur',
      '123, Shivaji Nagar, Pune'
    ]);
  
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
  
    const handleAddNewAddress = () => {
      if (newAddress.trim()) {
        setAddresses([...addresses, newAddress]);
        setSelectedAddress(newAddress);
        setNewAddress('');
        setOpenAddressDialog(false);
      }
    };
  
    return (
      <>
        {/* Change Address Dialog */}
        <Dialog open={openAddressDialog} onClose={() => setOpenAddressDialog(false)} fullWidth maxWidth="sm">
          <DialogTitle>Select Address</DialogTitle>
          <DialogContent>
            <RadioGroup
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              {addresses.map((addr, idx) => (
                <FormControlLabel key={idx} value={addr} control={<Radio />} label={addr} />
              ))}
            </RadioGroup>
  
            <Divider sx={{ my: 2 }} />
  
            <Typography variant="subtitle1" gutterBottom>
              Add New Address
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              placeholder="Enter new address here"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAddressDialog(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleAddNewAddress}>
              Save New Address
            </Button>
          </DialogActions>
        </Dialog>
  
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} padding={4} marginTop={10}>
          {/* Address + Bill Summary */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3}}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body1" fontWeight={500}>
                  {selectedAddress}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#ffca28',
                    color: '#000',
                    '&:hover': { backgroundColor: '#ffc107' }
                  }}
                  onClick={() => setOpenAddressDialog(true)}
                >
                  Change
                </Button>
              </Stack>
            </Paper>
  
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                Bill Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Subtotal</Typography>
                  <Typography>₹{subtotal}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Tax (18%)</Typography>
                  <Typography>₹{tax}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">₹{total}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
  
          {/* Cart Items */}
          <Box sx={{ flex: 2 }}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                Cart Items
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingY: 2,
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{item.price}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="error" sx={{ textTransform: 'none' }}>
                      Remove
                    </Button>
                    <Button variant="contained" color="success" sx={{ textTransform: 'none' }}>
                      Buy
                    </Button>
                  </Stack>
                </Box>
              ))}
            </Paper>
          </Box>
        </Stack>
      </>
    );
  };
  
  export default Cart;
  