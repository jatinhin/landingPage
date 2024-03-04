import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import lo from "../assets/lo.svg";
const Footer = () => {
  return (
    <Stack p={"90px 0"}>
      <Stack alignItems={"center"} borderBottom={"1px solid grey"}>
        <Link to={"/"}>
          <img src={lo} alt="" style={{ width: "338px", height: "81px" }} />
        </Link>
      </Stack>
    </Stack>
  );
}

export default Footer