import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import section31 from "../../assets/section31.svg";
import section32 from "../../assets/section32.svg";
import Button from "../../utils/Button";
const Billing = () => {
  const lists = [
    {
      id: 1,
      title: "What Is Off-Page SEO? A Guide to Off-Page SEO Strategy",
      description:
        "Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, here is everything you need to know to create an organic search strategy for your website.",
      src: section31,
    },
    {
      id: 2,
      title: "What Is Off-Page SEO? A Guide to Off-Page SEO Strategy",
      description:
        "Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, here is everything you need to know to create an organic search strategy for your website.",
      src: section32,
    },
    {
      id: 3,
      title: "What Is Off-Page SEO? A Guide to Off-Page SEO Strategy",
      description:
        "Search engine optimization is the backbone of any digital marketing strategy. From SEO basics to keyword research to link building, here is everything you need to know to create an organic search strategy for your website.",
      src: section31,
    },
  ];
  return (
    <Stack>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={6}
        p={"60px 0"}
        bgcolor={"#F4F8FF"}
      >
        {lists.map((d, index) => (
          <Stack direction={d.id===2?"row-reverse":"row"} gap={"30px"} key={index}>
            <Stack
              width={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={d.src}
                alt=""
                style={{ width: "553px", height: "318px" }}
              />
            </Stack>
            <Stack gap={2} width={"38%"}>
              <Typography
                color={"#052973"}
                fontSize={"35px"}
                fontWeight={"bold"}
                fontFamily={"Work sans"}
              >
                {d.title}
              </Typography>
              <Typography>
                {d.description}
                </Typography>
              <Button
                type="button"
                sx={{
                  color: "white",
                  width: "186px",
                  height: "48px",
                  fontSize: "20px",
                  bgcolor: "#052973",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Billing;
