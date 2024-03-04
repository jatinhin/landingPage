import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../utils/Button";
import section31 from "../../assets/section31.svg";
import section32 from "../../assets/section32.svg";
const Features = () => {
    const [activebtn, setActivebtn] = useState(1);
    const handleBtnClick = (id) => {
      setActivebtn(id);
    };
    const lists = [
      {
        id: 1,
        name: "General SEO",
      },
      {
        id: 2,
        name: "General SEO",
      },
      {
        id: 3,
        name: "General SEO",
      },
      {
        id: 4,
        name: "General SEO",
      },
      {
        id: 5,
        name: "General SEO",
      },
    ];
    const lists2 = [
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
    <Stack bgcolor={"#F4F8FF"} gap={3} p={"20px 0"}>
      <Stack>
        <Typography
          fontSize={"50px"}
          fontWeight={"bold"}
          color={"#052973"}
          textAlign={"center"}
        >
          SEO
        </Typography>
        <Typography textAlign={"center"} p={"0 400px"}>
          Search engine optimization is the backbone of any digital marketing
          strategy. From SEO basics to keyword research to link building, here
          is everything you need to know to create an organic search strategy
          for your website.
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"Center"} gap={10}>
        {lists.map((d) => (
          <Stack key={d.id}>
            <Button
              sx={{
                backgroundColor: activebtn === d.id ? "white" : "transparent",
                color: "#052973",
                border: "1px solid #052973",
                width: "170px",
              }}
              onClick={() => handleBtnClick(d.id)}
            >
              {d.name}
            </Button>
          </Stack>
        ))}
      </Stack>
      <Stack alignItems={"center"}>
        <Stack pt={2} pr={8} letterSpacing={2}>
          {activebtn === 1 && (
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              gap={6}
              p={"60px 0"}
              bgcolor={"#F4F8FF"}
            >
              {lists2.map((d, index) => (
                <Stack
                  direction={d.id === 2 ? "row-reverse" : "row"}
                  gap={"30px"}
                  key={index}
                >
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
                    <Typography>{d.description}</Typography>
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
          )}
          {activebtn === 2 && (
            <Typography variant="h6"> this is a 2 para</Typography>
          )}
          {activebtn === 3 && (
            <Typography variant="h6"> this is a 3 para</Typography>
          )}
          {activebtn === 4 && (
            <Typography variant="h6"> this is a 4 para</Typography>
          )}
          {activebtn === 5 && (
            <Typography variant="h6"> this is a 5 para</Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;
