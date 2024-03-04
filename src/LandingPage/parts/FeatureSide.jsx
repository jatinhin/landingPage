import { Stack, Typography } from '@mui/material';
import React from 'react'

const FeatureSide = () => {
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
  return (
    <Stack
      width={{ xl: "60%", xs: "100%" }}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      rowGap={2}
      display={{xxl:"flex",xs:"none"}}
    >
      {lists2.map((d) => (
        <Stack
          className="content"
          border={"1px solid lightgrey"}
          width={"40%"}
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
    </Stack>
  );
}

export default FeatureSide