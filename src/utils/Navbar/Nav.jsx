import React, { useState } from "react";
// import log from "../assets/log.png"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography} from "@mui/material";
import lo from "../../assets/lo.svg";
import { Stack } from "@mui/material";
import "./nav.css";
import Button from "../../utils/Button";
const Nav = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      p={{ xxl: "20px 90px", sm: "12px 14px", md: "12px 41px" }}
      alignItems={"center"}
    >
      <Link to={"/"}>
        <img src={lo} alt="" style={{ width: "181px", height: "43px" }} />
      </Link>

      <Link to={"/Login"}>
        <Button
          sx={{
            height: "4vh",
            p: "13px",
            fontSize: "16px",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#F15B25",
              color: "white",
            },
          }}
        >
          Get started
        </Button>
      </Link>
    </Stack>
  );
};

export default Nav;
