import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IconReview from "../../assets/IconReview.png";
import Img from "../../assets/Img.png";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomerSlider = () => {
  
  const navigate = useNavigate();
  const [Cards, setCards] = useState([]);
  const handlecardClicks = (slug) => {
    navigate(`/podsdetails/${slug}`);
  };
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
 };
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Stack
      sx={{ width: { lg: "90%", xs: "93%" }, margin: "auto" }}
      display={{ xl: "none", xs: "flex" }}
      gap={"20px"}
    >
      <>
        <Typography
          fontSize={{ xl: "50px", md: "40px", sm: "30px" }}
          fontWeight={"bold"}
          color={"#052973"}
          textAlign={"center"}
        >
          Customer Reviews
        </Typography>
        <Stack boxShadow={"0px 0px 5px -2px black"}>
          <Carousel responsive={responsive} arrows={false} autoPlay>
          {/* <Slider {...settings}> */}
            {lists.map((d, index) => (
              <Stack p={"21px"}gap={2} key={index} width={"90%"}>
                <Stack direction={"row"} gap={2}>
                  <img src={IconReview} alt="" width={"38px"} height={"39px"} />
                  <Typography fontSize={"11px"}>
                    I can Say that bundle totally worth my single penny it is
                    priceless for me because I have spent more time and money to
                    find backlink opp. for my website. thanks for this crazy
                    bundle.
                  </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"end"} gap={1}>
                  <img src={Img} alt="" width={"50px"} height={"45px"} />
                  <Box>
                    <Typography fontWeight={"bold"}>Tamara joe</Typography>
                    <Typography fontSize={"11px"}>
                      CEO, lOREAM iPSAUM
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
          {/* </Slider> */}
          </Carousel>
        </Stack>
      </>
    </Stack>
  );
};

export default CustomerSlider;
