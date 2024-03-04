import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import IconReview from "../../assets/IconReview.png"
import Img from "../../assets/Img.png"
const CustomerReview = () => {
    const lists = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
      {
        id: 7,
      },
      {
        id: 8,
      },
      {
        id: 9,
      },
    ];
  return (
    <Stack bgcolor={"#F0F0F0"} p={"51px"} gap={2} display={{xl:"flex",md:"flex",sm:"none"}}>
      <Typography
        fontSize={{xl:"50px",md:"40px",sm:"30px"}}
        fontWeight={"bold"}
        color={"#052973"}
        textAlign={"center"}
      >
        Customer Reviews
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"35px"}
        justifyContent={"center"}
      >
        {lists.map((d, index) => (
          <Stack bgcolor={"white"} width={{xl:"27%",md:"40%",sm:"59%"}} p={3} gap={2} key={index}>
            <Stack direction={"row"} gap={2}>
              <img src={IconReview} alt="" width={"38px"} height={"39px"} />
              <Typography fontSize={"11px"}>
                I can Say that bundle totally worth my single penny it is
                priceless for me because I have spent more time and money to
                find backlink opp. for my website. thanks for this crazy bundle.
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"end"} gap={1}>
              <img src={Img} alt="" width={"50px"} height={"45px"} />
              <Box>
                <Typography fontWeight={"bold"}>Tamara joe</Typography>
                <Typography fontSize={"11px"}>CEO, lOREAM iPSAUM</Typography>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default CustomerReview