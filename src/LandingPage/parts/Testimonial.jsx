// import { Stack } from '@mui/material'
// import React from 'react'
// import testi from "../../assets/testi.svg"
// const Testimonial = () => {
//   return (
//     <Stack alignItems={"center"}>
//       <Stack width={"90%"} direction={"row"} justifyContent={"center"} gap={3}>
//         <Stack width={"50%"}>
//           <img src={testi} style={{height:"500px", width:"500px"}}/>
//         </Stack>
//         <Stack width={"50%"}></Stack>
//       </Stack>
//     </Stack>
//   );
// }

// export default Testimonial

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Thumbnail from "../../assets/Thumbnail.png";
import team1 from "../../assets/team1.svg"
import team2 from "../../assets/team2.svg";
import Imgteam1 from "../../assets/ImgTeam1.svg"
import Imgteam2 from "../../assets/ImgTeam2.svg"
import Polygon from "../../assets/Polygon.svg"
import "./nm.css"
const Testimonial = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };


  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        p={"50px 0"}
        bgcolor={{xl:"#052973",xs:"none"}}
      >
        <Stack width={{xl:"80%",xs:"90%"}} alignItems={"center"} bgcolor={"white"} p={{xl:6,xs:"none"}}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isVideoPlaying ? (
              <ReactPlayer
                url="https://www.example.com/your-video-url.mp4" // Replace with your video URL
                controls
                width="100%"
                className="Player"
              />
            ) : (
              <Stack alignItems={"center"}>
                <img
                  src={Thumbnail}
                  alt="Thumbnail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Stack>
                  <Box
                    onClick={playVideo}
                    position={"absolute"}
                    
                    width={{ xl: "150px", md: "100px",sm:"70px" }}
                    height={{ xl: "150px", md: "100px",sm:"70px" }}
                    top={"50%"}
                    left={"50%"}
                    bgcolor={"#D9D9D9"}
                    borderRadius={"50%"}
                    border={"5px solid #FB5555"}
                    sx={{
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                      backgroundImage: `url(${Polygon})`,
                      backgroundSize: "30px 55px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition:"center"
                    }}
                  >
                  </Box>
                </Stack>
              </Stack>
            )}
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testimonial;
