import { Stack, Typography } from '@mui/material'
import React from 'react'
import receivables from "../../assets/receivables.png"
const UserFav = () => {
    const lists2 = [
      {
        id: "1",
        title: "GST compliance",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
        src: receivables,
        width: "60%",
      },
      {
        id: "2",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
        width: "35%",
      },

      {
        id: "3",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
        width: "45%",
      },
      {
        id: "4",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",

        width: "50%",
      },
      {
        id: "5",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      width:"30%"
        },
      {
        id: "6",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",

        width:"65%"
      },
      {
        id: "7",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      width:"45%"
        },
      {
        id: "8",
        title: "Sales Force Automation",
        description:
          "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
     width:"50%"
        },
    ];
  return (
    <Stack
      bgcolor={"black"}
      alignItems={"Center"}
      mt={{xs:"22px"}}
    >
      <Stack width={"90%"}>
        <Stack width={"100%"} pt={5} gap={"15px"} pl={{xl:"17px"}}>
          <Typography
            color={"#025ace"}
            fontSize={"16px"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={{ xl: "left", xs: "center" }}
          >
            User Favourites
          </Typography>
          <Typography
            color={"white"}
            fontSize={"50px"}
            fontWeight={"bold"}
            lineHeight={1}
            textAlign={{ xl: "left", xs: "center" }}
          >
            Do it all,
            <br />
            <span style={{ fontSize: "35px" }}>and then some more! </span>
          </Typography>
        </Stack>
        <Stack
        p={"50px 0"}
          direction={"row"}
          flexWrap={"wrap"}
          width={"100%"}
          gap={"20px"}
          justifyContent={"space-evenly"}
        >
          {lists2.map((d) => (
            <Stack
              className="content"
              bgcolor={"white"}
              width={{ xl: d.width, xs: "100%" }}
              borderRadius={5}
            >
              <Stack
                minHeight={0}
                gap={1}
                id={`item${d.id}`}
                className="item"
                alignItems={"flex-start"}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={"18px"}
                  color={"black"}
                >
                  {d.title}
                </Typography>
                <Typography color={"black"} fontSize={"16px"}>
                  {d.description}
                </Typography>
                <img src={d.src} alt="" />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default UserFav