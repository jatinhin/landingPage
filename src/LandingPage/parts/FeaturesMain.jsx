import React, { useState, useEffect } from "react";
import "./Features.css";
import FeatureIcon1 from "../../assets/FeatureIcon1.svg";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import Awards from "./Awards";
import pattern from "../../assets/pattern.png";
import FeatureSide from "./FeatureSide";
import ProductSlider from "./ProducSlider";
function FeaturesMain() {
  const [activeItem, setActiveItem] = useState("item1");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".item");
    let active = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        active = section.id;
      }
    });
    setActiveItem(active);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(item);
    if (element) {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener temporarily
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll); // Add back the scroll event listener after a short delay
      }, 10000); // Adjust the delay as needed
    }
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

  return (
    <Stack
      bgcolor={"#F6F8FF"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
    >
      <Awards />
      <Stack
        direction={{ xl: "row", xs: "column" }}
        alignItems={"start"}
        pt={{ xl: 50, xs: 10 }}
        pb={{ xl: 10, xs: 0 }}
      >
        <Stack
          className="sidebar"
          alignItems={"center"}
          position={{ xl: "sticky", xs: "relative" }}
          p={{ xl: "20px 0" }}
          bgcolor={"#F6F8FF"}
          width={{ xl: "40%", xs: "100%" }}
          pl={{ xl: 10, xs: 0 }}
        >
          <Stack width={"100%"}>
            <Typography
              color={"#025ace"}
              fontSize={"16px"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={{ xs: "center" }}
            >
              Spotlight
            </Typography>
            <Typography
              fontSize={"50px"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={{ xs: "center" }}
            >
              <span style={{ fontSize: "35px" }}>Engineered to </span>
              <br /> unlock Buisness growth
            </Typography>
          </Stack>
          <Stack display={{ xl: "block", xs: "none" }}>
            <img src={pattern} alt="" width={"100%"} height={"448px"} />
          </Stack>
        </Stack>

        <FeatureSide />
      </Stack>
      <ProductSlider />
    </Stack>
  );
}

export default FeaturesMain;
