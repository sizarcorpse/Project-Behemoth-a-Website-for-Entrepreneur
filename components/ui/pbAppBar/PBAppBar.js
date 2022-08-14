import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Slide,
  Stack,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { PBDrawer } from "components/ui";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(0),
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",

  padding: theme.spacing(0, 10),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 8),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 8),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 4),
  },
}));
const MenuBox = styled(Box)(({ theme }) => ({
  "& .stackItems": {
    "& a": {
      textDecoration: "none",
      fontWeight: "bold",
      color: theme.palette.primary.black,
      overflow: "hidden",
    },
    "& .button a": {
      position: "relative",
      border: `2px solid ${theme.palette.primary.black}`,
      padding: theme.spacing(1, 2),
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.blue,
        top: 0,
        left: "0%",
        overflow: "hidden",
        zIndex: "-1",
        transformOrigin: "0%",
        transform: "scaleX(0)",
        transition: "transform 0.5s cubic-bezier(1,-0.06,.49,1.13)",
      },
      "&::after": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.orange,
        top: 0,
        left: "0%",
        overflow: "hidden",
        zIndex: "-1",
        transformOrigin: "0%",
        transform: "scaleX(0)",
        transition: "transform 0.5s ease-in 0.5s",
      },

      "&:hover": {
        "&::before": {
          transform: "scaleX(1.01)",
        },
        "&::after": {
          transform: "scaleX(1.01)",
        },
      },
    },
    "& .link a": {
      color: theme.palette.primary.black,
      position: "relative",
      "&::before": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "2px",
        backgroundColor: [
          theme.palette.primary.blue,
          theme.palette.primary.orange,
          theme.palette.primary.yellow,
          theme.palette.primary.green,
        ][Math.floor(Math.random() * 3)],
        bottom: 0,
        left: 0,
        transformOrigin: "0%",
        transform: "scaleX(0)",
        transition: "transform 0.5s cubic-bezier(1,-0.06,.49,1.13)",
      },
      "&:hover::before": {
        transform: "scaleX(1)",
      },
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

let navigationItems = [
  { title: "How It Works", url: "/how-it-works", type: "link", order: 1 },
  { title: "Our Community", url: "/our-community", type: "link", order: 2 },
  { title: "Get In Touch", url: "/contact", type: "button", order: 3 },
];

const PBAppBar = (props) => {
  const { children } = props;
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <HideOnScroll {...props}>
        <AppBarStyled
          elevation={0}
          sx={{ background: "rgba(255,255,255,0.98)" }}
        >
          <ToolbarStyled>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Link href="/">
                <a>
                  <Image
                    src="/assets/logo/sl.svg"
                    width={100}
                    height={35}
                    alt="project behemoth"
                    priority={true}
                  />
                </a>
              </Link>
            </Box>
            <MenuBox>
              {matches ? (
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  className="stackItems"
                >
                  <IconButton
                    disableFocusRipple={true}
                    disableRipple={true}
                    onClick={toggleDrawer("right", true)}
                  >
                    <img src="/assets/appBar/menuIcon.svg" />
                  </IconButton>
                  <PBDrawer
                    state={state}
                    toggleDrawer={toggleDrawer}
                    navigationItems={navigationItems}
                  />
                </Stack>
              ) : (
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="flex-end"
                  alignItems="center"
                  className="stackItems"
                >
                  {navigationItems.map((item, index) => (
                    <Typography
                      variant="h5"
                      color="primary.black"
                      component="p"
                      key={index}
                      className={item.type === "button" ? "button" : "link"}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </Typography>
                  ))}
                </Stack>
              )}
            </MenuBox>
          </ToolbarStyled>
        </AppBarStyled>
      </HideOnScroll>

      <Box>{children}</Box>
    </>
  );
};

export default PBAppBar;
