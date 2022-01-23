import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  styled,
  Typography,
  Box,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
  IconButton,
  SwipeableDrawer,
  Stack,
} from "@mui/material";

const DrawerStyled = styled(Box)(({ theme }) => ({}));
const ContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minWidth: "300px",
  maxWidth: "300px",

  backgroundColor: theme.palette.primary.blue,
  "& .action": {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1.6, 2),
    backgroundColor: theme.palette.primary.white,
  },
  "& .logo": {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  "& .navigationItems": {
    "& .navigationItem": {
      position: "relative",
      width: "100%",
      textAlign: "center",
      zIndex: 1,
      "& a": {
        width: "100%",
        display: "block",
        padding: theme.spacing(6, 0),
        textDecoration: "none",
        color: theme.palette.primary.white,
      },
      "&::after": {
        content: "''",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.white,
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.1,
        zIndex: -1,
        transition: "opacity 0.3s ease",
      },
      "&:hover::after": {
        opacity: 0,
      },

      "&:nth-child(1)": {
        backgroundColor: theme.palette.primary.orange,
      },
      "&:nth-child(2)": {
        backgroundColor: theme.palette.primary.green,
      },
      "&:nth-child(3)": {
        backgroundColor: theme.palette.primary.black,
      },
      "&:nth-child(4)": {
        backgroundColor: theme.palette.primary.blue,
      },
    },
  },
}));

const PBDrawer = ({ toggleDrawer, state, navigationItems }) => {
  return (
    <DrawerStyled>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <ContentBox>
          <Box className="action">
            <IconButton
              disableFocusRipple={true}
              disableRipple={true}
              onClick={toggleDrawer("right", false)}
            >
              <img src="/assets/appBar/closeMenuIcon.svg" />
            </IconButton>
          </Box>
          {/* <Box className="logo">
            <Image
              src="/assets/logo/sl.svg"
              width={100}
              height={35}
              alt="project behemoth"
              priority={true}
            />
          </Box> */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="navigationItems"
            onClick={toggleDrawer("right", false)}
          >
            {navigationItems.map((item, index) => (
              <Typography
                variant="h3"
                color="primary.white"
                component="p"
                key={index}
                className="navigationItem"
              >
                <Link href={item.url}>{item.title}</Link>
              </Typography>
            ))}
          </Stack>
        </ContentBox>
      </SwipeableDrawer>
    </DrawerStyled>
  );
};

export default PBDrawer;
