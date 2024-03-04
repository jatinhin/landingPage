import { Stack, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneNumberInput from "../LandingPage/parts/nm";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CitySelector from "../LandingPage/parts/Cityselctor";
import Button from "../utils/Button";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import Google from "../assets/google.png";
import LinkedIn from "../assets/linkedIn.png";
const Simplify = () => {
  const [showPassword, setShowPassword] = useState(false);
  const textStyle = {
    fontWeight: "bold",
    fontFamily: "Work Sans",
    color: "#FFFFFF",
    textShadow: "0px 0px 5px #F15B25",
  };
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };
  return (
    <Stack
      height={{ xl: "120vh", xs: "none" }}
      // direction={"row"}
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        // width: "100%",
        margin: {
          xs: "0px",
          sm: "20px",
          lg: "0px auto",
        },
      }}
    >
      <Stack
        sx={{
          width: {
            xs: "100%",
            lg: "40%",
            xl: "42%",
            xxl: "50%",
          },
          margin: {
            lg: "30px auto",
            xl: "50px 100px",
          },
        }}
      >
        <Typography
          textTransform={"uppercase"}
          sx={{
            fontSize: {
              xs: "35px",
              sm: "55px",
              lg: "85px",
              xl: "115px",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
          color={"#052973"}
          fontWeight={900}
          lineHeight={0.9}
          letterSpacing={"0.05em"}
        >
          Simplify Your
        </Typography>
        <Typography
          className="text-stroke"
          sx={{
            textTransform: "uppercase",
            fontSize: {
              xs: "35px",
              sm: "55px",
              lg: "85px",
              xl: "115px",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
            fontWeight: "bold",
            letterSpacing: 1,
            color: "transparent",
            lineHeight: 1,
          }}
        >
          Buisness
        </Typography>
        <Typography
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              lg: "90%",
            },
            margin: {
              xs: "20px auto 0px",
              lg: "20px 0px 0px",
            },

            fontSize: {
              xs: "14px",
              lg: "18px",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
        >
          Who said world-class software can only be built in Silicon Valley?
          Zoho CRM empowers 250,000+ global businesses to deliver fantastic
          customer experiences and drive remarkable growth. Made right here in
          India–try the SaaS from Madras!
        </Typography>
      </Stack>

      <Stack
        gap={2}
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
            xl: "50%",
          },
          padding: {
            xs: "20px 0px",
            lg: "20px 0px",
            xl: "40px 0px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "18px",
              sm: "22px",
              md: "28px",

              xl: "38px",
            },
            textAlign: {
              xs: "center",
            },
          }}
          color={"#052973"}
          fontWeight={"bold"}
          fontSize={"22px"}
          textAlign={"center"}
        >
          Get started with your free trial
        </Typography>
        <Stack
          alignItems={"center"}
          gap={2}
          margin={"0 auto"}
          sx={{
            width: {
              xs: "80%",
              md: "70%",
              lg: "100%",
              xl: "100%",
            },
          }}
        >
          <Stack
            style={{ position: "relative" }}
            sx={{
              width: {
                xs: "220px",
                sm: "300px",
                md: "480px",
                lg: "385px",
                xl: "480px",
              },
              height: {
                xs: "45px",
                sm: "55px",
                md: "67px",
                lg: "57px",
                xl: "67px",
              },
            }}
          >
            <input
              type="text"
              style={{
                width: "94%",
                height: "100%",
                border: "1px solid #AAAAAA",
                color: "#AAAAAA",
                paddingLeft: "5%",
                fontSize: "20px",
              }}
              placeholder="Full Name"
            />
            <PersonIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "16px",
                transform: "translateY(-50%)",
                color: "#AAAAAA",
                fontSize: "40px",
              }}
            />
          </Stack>
          <Stack
            style={{ position: "relative" }}
            sx={{
              width: {
                xs: "220px",
                sm: "300px",
                md: "480px",
                lg: "385px",
                xl: "480px",
              },
              height: {
                xs: "45px",
                sm: "55px",
                md: "67px",
                lg: "57px",
                xl: "67px",
              },
            }}
          >
            <input
              type="Email"
              className="input-new"
              placeholder="Work Email"
              style={{
                width: "94%",
                height: "100%",
                border: "1px solid #AAAAAA",
                color: "#AAAAAA",
                paddingLeft: "5%",
                fontSize: "20px",
              }}
            />
            <EmailIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "16px",
                transform: "translateY(-50%)",
                color: "#AAAAAA",
                fontSize: "40px",
              }}
            />
          </Stack>

          <Stack
            style={{ position: "relative" }}
            sx={{
              width: {
                xs: "220px",
                sm: "300px",
                md: "480px",
                lg: "385px",
                xl: "480px",
              },
              height: {
                xs: "45px",
                sm: "55px",
                md: "67px",
                lg: "57px",
                xl: "67px",
              },
            }}
          >
            <input
              name="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="input-new"
              style={{
                width: "94%",
                height: "100%",
                border: "1px solid #AAAAAA",
                color: "#AAAAAA",
                paddingLeft: "5%",
                fontSize: "20px",
              }}
            />
            <IconButton
              style={{
                position: "absolute",
                top: "50%",
                right: "16px",
                transform: "translateY(-50%)",
                color: "#AAAAAA",
                fontSize: "50px",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </Stack>
          {/* <Stack
            style={{ position: "relative" }}
            sx={{
              width: {
                xs: "280px",
                sm: "380px",
                md: "480px",
              },
              height: {
                xs: "45px",
                sm: "55px",
                md: "67px",
              },
            }}
          >
            <PhoneNumberInput />
          </Stack> */}
          <CitySelector />
          <Stack
            style={{ position: "relative" }}
            sx={{
              width: {
                xs: "220px",
                sm: "300px",
                md: "480px",
                lg: "385px",
                xl: "480px",
              },
              height: {
                xs: "45px",
                sm: "55px",
                md: "67px",
                lg: "57px",
                xl: "67px",
              },
            }}
          >
            <input
              type="number"
              className="input-new"
              placeholder="Phone Number"
              style={{
                width: "94%",
                height: "100%",
                border: "1px solid #AAAAAA",
                color: "#AAAAAA",
                paddingLeft: "5%",
                fontSize: "20px",
              }}
            />
            <PhoneAndroidIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "16px",
                transform: "translateY(-50%)",
                color: "#AAAAAA",
                fontSize: "40px",
              }}
            />
          </Stack>
          <Typography
            fontSize={"13px"}
            sx={{
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            It looks like you‘re in INDIA based on your IP.
          </Typography>

          <Stack
            gap={2}
            sx={{
              alignItems: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            <Stack
              direction={"row"}
              gap={1}
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <Typography fontSize={"13px"}>
                I agree to the Terms of Service and Privacy Policy.
              </Typography>
            </Stack>
            <Button
              type="button"
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
                color: "white",
                fontSize: {
                  xs: "16px",
                  sm: "19px",
                  md: "22px",
                },

                bgcolor: "#052973",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#052973",
                  color: "white",
                },
              }}
              onClick={handleSubmit}
            >
              Get Started
            </Button>
            <Stack direction={"row"} justifyContent={"right"} gap={1}>
              <Typography display={"flex"} alignItems={"center"}>
                or sign in using
              </Typography>
              <img src={Google} style={{ width: "32px", height: "32px" }} />
              <img src={LinkedIn} style={{ width: "32px", height: "32px" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Simplify;
