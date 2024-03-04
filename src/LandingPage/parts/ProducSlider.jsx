import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const ProductSlider = () => {
  const features = [
    {
      icon: (
        <ChairRoundedIcon
          sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
        />
      ),
    },
    {
      icon: (
        <WifiRoundedIcon
          sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
        />
      ),
    },
    {
      icon: (
        <NotificationsOffRoundedIcon
          sx={{ fontSize: { xss: "20px", xs: "13px", lg: "30px" } }}
        />
      ),
    },
  ];
  const navigate = useNavigate();
  const [Cards, setCards] = useState([]);
  const handlecardClicks = (slug) => {
    navigate(`/podsdetails/${slug}`);
  };
 
   const lists2 = [
     {
       id: "1",
       title: "GST compliance",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",

       bgcolor: "white",
     },
     {
       id: "2",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",

       bgcolor: "#C2FFD3",
     },

     {
       id: "3",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
     },
     {
       id: "4",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",

       bgcolor: "#052973",
     },
     {
       id: "5",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
     },
     {
       id: "6",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",

       bgcolor: "#F15B25",
     },
     {
       id: "7",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
     },
     {
       id: "8",
       title: "Sales Force Automation",
       description:
         "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
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
      items: 1.2,
    },
  };
  return (
    <Stack
      sx={{ width: { lg: "90%", xs: "93%" }, margin: "auto" }}
      display={{ xl: "none", xs: "flex" }}
    >
      <Carousel responsive={responsive} arrows={false} className="hii">
        {lists2.map((d) => (
          <Stack
            className="content"
            border={"1px solid lightgrey"}
            borderRadius={5}
          >
            <Stack
              minHeight={0}
              gap={1}
              id={`item${d.id}`}
              className="item"
              alignItems={"flex-start"}
            >
              <Typography fontWeight={"bold"} fontSize={"18px"} color={"black"}>
                {d.title}
              </Typography>
              <Typography color={"grey"} fontSize={"16px"}>
                {d.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Carousel>
    </Stack>
  );
};

export default ProductSlider;
