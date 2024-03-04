import { Stack, Typography } from '@mui/material'
import React from 'react'
import award1 from "../assets/award1.svg"
import review from "../assets/review1.svg"
const Awards = () => {
  return (
    <Stack alignItems={"center"} p={"80px 40px"} bgcolor={"#F4F8FF"}>
      <Stack width={"90%"} direction={"row"} justifyContent={"center"} gap={3}>
        <Stack width={"35%"} boxShadow={"1px 0px 2px 3px #F1F1F1"}>
          <Typography
            color={"grey"}
            fontSize={"20px"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"center"}
          >
            Awards
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
            <img
              src={award1}
              alt=""
              style={{ width: "130px", height: "110px" }}
            />
            <img
              src={award1}
              alt=""
              style={{ width: "130px", height: "110px" }}
            />
            <img
              src={award1}
              alt=""
              style={{ width: "130px", height: "110px" }}
            />
            <img
              src={award1}
              alt=""
              style={{ width: "130px", height: "110px" }}
            />
            <img
              src={award1}
              alt=""
              style={{ width: "130px", height: "110px" }}
            />
          </Stack>
        </Stack>
        <Stack width={"40%"} boxShadow={"1px 0px 2px 3px #F1F1F1"}>
          <Typography
            color={"grey"}
            fontSize={"20px"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"center"}
          >
            Reviews
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
            <img
              src={review}
              alt=""
              style={{ width: "220px", height: "110px" }}
            />
            <img
              src={review}
              alt=""
              style={{ width: "220px", height: "110px" }}
            />
            <img
              src={review}
              alt=""
              style={{ width: "220px", height: "110px" }}
            />
            <img
              src={review}
              alt=""
              style={{ width: "220px", height: "110px" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Awards