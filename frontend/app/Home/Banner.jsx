import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Banner = () => {
  return (
    <>
     <Stack direction={'row'} gap={5} justifyContent={'center'} alignItems={'center'} mt={9} mb={5}>
            <Box width={"20vw"} height={"15vh"} bgcolor={"#f3f3da"} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={"column"}>
            <IoReturnDownBack size={40}/>
              <Typography>
                30 Days Return
              </Typography>
            </Box>
            <Box width={"20vw"} height={"15vh"} bgcolor={"#f3f3da"} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={"column"}>
            <TbTruckDelivery size={40} />
              <Typography>
              Free Delivery
              </Typography>
            </Box>
            <Box width={"20vw"} height={"15vh"} bgcolor={"#f3f3da"} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={"column"}>
            <MdOutlinePhoneInTalk size={40}/>
              <Typography>
              24x7 Support
              </Typography>
            </Box>
      </Stack> 
    </>
  )
}

export default Banner
