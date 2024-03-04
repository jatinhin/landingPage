import React, { useState } from "react";
// import log from "../assets/log.png"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import logoLight from "../assets/logoLight.svg";
import { Stack } from "@mui/material";
import "./navlight.css";
import Button from "../utils/Button";
const NavLight = () => {
  const [popoverState, setPopoverState] = useState({});
  const [subLinks, setSubLinks] = useState(false);
  const handleMouseEnter = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: true,
    }));
  };

  const handleMouseLeave = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: false,
    }));
  };
  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);
  return (
    <Stack
      zIndex={10}
      direction={"row"}
      justifyContent={"space-between"}
      p={"20px 90px"}
      alignItems={"center"}
    >
      <Link to={"/"}>
        <img src={logoLight} alt="" />
      </Link>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignSelf={"center"}
      >
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignContent="center"
          gap={5}
          pl={3}
          sx={{ color: "white", height: "100%", paddingRight: 4 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="navlinkli-box"
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Link to="/Features" className="navlinkli-link">
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Typography
                    alignSelf="center"
                    display="inline-block"
                    fontSize={20}
                    fontFamily={"Work Sans"}
                    className="navlinkli"
                    sx={{
                      transition: "all 0.4s ease-in",
                      //   color: isPopoverOpen(1) ? "white" : "black",
                    }}
                  >
                    Features
                  </Typography>
                  <ArrowDropDownIcon
                    className="navlinkli-link-downarrow"
                    sx={{
                      fontSize: 25,
                      transition: "all 0.3s ease-in",
                      color: isPopoverOpen(1) ? "#818181" : "#818181",
                      transform: isPopoverOpen(1)
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </Box>
              </Link>

              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  height: isPopoverOpen(1) ? 160 : 0,
                  opacity: isPopoverOpen(1) ? 1 : 0,
                  transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                  position: "absolute",
                  top: 47,
                  overflow: "hidden",
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                <Stack
                  justifyContent={"center"}
                  gap={1}
                  sx={{ p: 2, width: 140 }}
                >
                  <Link to="#" className="popperLinks">
                    <Typography sx={{}}>Space Group</Typography>
                  </Link>
                  <Link to="/our-story/mission-vision" className="popperLinks">
                    <Typography sx={{}}>Events</Typography>
                  </Link>
                  <Link
                    to="/our-story/awards-recognitions"
                    className="popperLinks"
                  >
                    <Typography sx={{}}>Awards & Recognitions</Typography>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </div>
          {/* //!our Story */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Link to="/Solutions" className="navlinkli-link">
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Typography
                    alignSelf="center"
                    display="inline-block"
                    fontFamily={"Work Sans"}
                    fontSize={20}
                    sx={{
                      transition: "all 0.4s ease-in",
                      //   color: isPopoverOpen(2) ? "white" : "black",
                    }}
                  >
                    Solutions
                  </Typography>
                  <ArrowDropDownIcon
                    className="navlinkli-link-downarrow"
                    sx={{
                      fontSize: 25,
                      transition: "all 0.3s ease-in",
                      color: isPopoverOpen(2) ? "#818181" : "#818181",
                      transform: isPopoverOpen(2)
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </Box>
              </Link>

              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  height: isPopoverOpen(2) ? 160 : 0,
                  opacity: isPopoverOpen(2) ? 1 : 0,
                  transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                  position: "absolute",
                  top: 40,
                  overflow: "hidden",
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                <Stack
                  justifyContent={"center"}
                  gap={1}
                  sx={{ p: 2, width: 140 }}
                  position={"relative"}
                >
                  <Link to="/Solutions/By-Industries" className="popperLinks">
                    <Typography sx={{}}>By Industries</Typography>
                  </Link>
                  <Link to="/Solutions/By-Size" className="popperLinks">
                    <Typography sx={{}}>By Size</Typography>
                  </Link>
                  <Link to="/Solutions/By-role" className="popperLinks">
                    <Typography sx={{}}>By Role</Typography>
                  </Link>
                  <Link to="/Solutions/By-usecases" className="popperLinks">
                    <Typography sx={{}}>By use cases</Typography>
                  </Link>
                </Stack>
                <Stack position={"absolute"} className="popover-link-popover">
                  <Typography sx={{ color: "red", display: "none" }}>
                    hello
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Link to="/our-impact" className="navlinkli-link">
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Typography
                    alignSelf="center"
                    display="inline-block"
                    fontFamily={"Work Sans"}
                    fontSize={20}
                    sx={{
                      transition: "all 0.4s ease-in",
                      //   color: isPopoverOpen(3) ? "white" : "black",
                    }}
                  >
                    Resources
                  </Typography>
                  <ArrowDropDownIcon
                    className="navlinkli-link-downarrow"
                    sx={{
                      fontSize: 25,
                      transition: "all 0.3s ease-in",
                      color: isPopoverOpen(3) ? "#818181" : "#818181",
                      transform: isPopoverOpen(3)
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </Box>
              </Link>

              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  height: isPopoverOpen(3) ? 160 : 0,
                  opacity: isPopoverOpen(3) ? 1 : 0,
                  transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                  position: "absolute",
                  top: 40,
                  overflow: "hidden",
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                <Stack
                  justifyContent={"center"}
                  gap={1}
                  sx={{ p: 2, width: 140 }}
                >
                  <Link to={"/Resources/Videos"} className="popperLinks">
                    <Typography sx={{}}>Videos</Typography>
                  </Link>
                  <Link
                    to="/our-impact/fighting-against-light-pollution"
                    className="popperLinks"
                  >
                    <Typography sx={{}}>Faq</Typography>
                  </Link>{" "}
                  <Link
                    to="/our-impact/fighting-against-light-pollution"
                    className="popperLinks"
                  >
                    <Typography sx={{}}>Career</Typography>
                  </Link>{" "}
                  <Link
                    to="/our-impact/fighting-against-light-pollution"
                    className="popperLinks"
                  >
                    <Typography sx={{}}>Resources</Typography>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Link to="/Pricing" className="navlinkli-link">
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Typography
                    alignSelf="center"
                    display="inline-block"
                    fontFamily={"Work Sans"}
                    fontSize={20}
                    sx={{
                      transition: "all 0.4s ease-in",
                      //   color: isPopoverOpen(4) ? "white" : "black",
                    }}
                  >
                    Pricing
                  </Typography>
                </Box>
              </Link>

              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  height: isPopoverOpen(4) ? 260 : 0,
                  opacity: isPopoverOpen(4) ? 1 : 0,
                  transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                  position: "absolute",
                  top: 47,
                  left: 40,
                  overflow: "hidden",
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              ></Stack>
            </Box>
          </div>
        </Stack>
      </Stack>
      <Link to={"/Login"}>
        <Button
          sx={{
            height: "5vh",
            "&:hover": {
              backgroundColor: "#F15B25",
              color: "white",
            },
          }}
        >
          Login
        </Button>
      </Link>
    </Stack>
  );
};

export default NavLight;
