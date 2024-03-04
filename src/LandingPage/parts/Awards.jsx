import { Stack, Typography } from "@mui/material";
import React from "react";
import award1 from "../../assets/award1.svg";
import review from "../../assets/review1.svg";
import "./Features.css";
const Awards = () => {
  return (
    <Stack
      bgcolor={"black"}
      width={{ xl: "80%", xs: "100%" }}
      borderRadius={{ xl: 3, xs: 0 }}
      position={{ xl: "absolute", xs: "none" }}
      bottom={"80%"}
      left={"11%"}
      pt={3}
    >
      <Typography
        color={"white"}
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={{ xl: "28px", xs: "19px" }}
      >
        Trusted by <span style={{ color: "#F15B25" }}> thousands</span>
        <br /> of businesses worldwide
      </Typography>

      <Stack alignItems={"center"} p={"50px 0"}>
        <Stack
          direction={{ xl: "row", xs: "column" }}
          justifyContent={"center"}
          gap={3}
          alignItems={{ xl: "none", xs: "center" }}
        >
          <Stack
            width={{ xl: "35%", xs: "75%" }}
            boxShadow={"1px 0px 2px 3px #F1F1F1"}
          >
            <Typography
              color={"white"}
              fontSize={"20px"}
              fontWeight={"bold"}
              display={"flex"}
              justifyContent={"center"}
            >
              Awards
            </Typography>
            <Stack
              gap={3}
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"center"}
            >
              <Stack
                sx={{
                  width: "27%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={award1}
                  alt=""
                  // className="Image-size"
                />
              </Stack>
              <Stack
                sx={{
                  width: "27%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={award1}
                  alt=""
                  // className="Image-size"
                />
              </Stack>
              <Stack
                sx={{
                  width: "27%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={award1}
                  alt=""
                  // className="Image-size"
                />
              </Stack>
              <Stack
                sx={{
                  width: "27%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={award1}
                  alt=""
                  // className="Image-size"
                />
              </Stack>
              <Stack
                sx={{
                  width: "27%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={award1}
                  alt=""
                  // className="Image-size"
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={{ xl: "35%", xs: "75%" }}
            boxShadow={"1px 0px 2px 3px #F1F1F1"}
          >
            <Typography
              color={"white"}
              fontSize={"20px"}
              fontWeight={"bold"}
              display={"flex"}
              justifyContent={"center"}
            >
              Reviews
            </Typography>
            <Stack
              gap={2.5}
              padding={"9px 0"}
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"center"}
            >
              <Stack
                sx={{
                  width: "45%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={review}
                  alt=""
                  // className="Image-size2"
                />
              </Stack>
              <Stack
                sx={{
                  width: "45%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={review}
                  alt=""
                  // className="Image-size2"
                />
              </Stack>
              <Stack
                sx={{
                  width: "45%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={review}
                  alt=""
                  // className="Image-size2"
                />
              </Stack>
              <Stack
                sx={{
                  width: "45%",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={review}
                  alt=""
                  // className="Image-size2"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Awards;
