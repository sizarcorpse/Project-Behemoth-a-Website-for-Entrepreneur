import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  styled,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const How = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(16, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0),
    gap: theme.spacing(4),
  },
}));

const ContentBox = styled(Box)(({ theme, barHeight }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(6),
  },

  "& .item": {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(1),
    },
    "& .title": {
      flex: "1 1 30%",
      [theme.breakpoints.down("md")]: {
        order: 2,
      },
    },
    "& .description": {
      flex: "1 1 50%",
      "& span": {
        display: "flex",
        marginTop: theme.spacing(2),
        color: theme.palette.primary.yellow,
        "& a": {
          color: theme.palette.primary.yellow,
        },
      },
      [theme.breakpoints.down("md")]: {
        order: 3,
        maxWidth: "60ch",
      },
    },
    "& .iconArea": {
      flex: "1 1 20%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      zIndex: 1,
      [theme.breakpoints.down("md")]: {
        order: 1,
      },
      "&.item-0": {
        position: "relative",
        left: 5,
      },
      "&.item-0::before": {
        content: '""',
        position: "absolute",
        top: 5,
        right: 63,

        width: 2,
        height: 2,

        borderBottom: `${barHeight}px solid ${theme.palette.primary.black}`,
        zIndex: -1,
      },
      [theme.breakpoints.down("md")]: {
        "&.item-0::before": {
          borderBottom: "none !important",
        },
      },
    },
  },
}));

const howItems = [
  {
    title: "Explore",
    description:
      "Learning about entrepreneurship shouldn’t feel like school. Our self-paced online learning experiences are fun, action-oriented, and purpose-based just like entrepreneur-life. ",
    link: { title: "See what we mean", url: "/explore" },
    icon: "/home/Explore-icon.svg",
  },
  {
    title: "Connect",
    description:
      "It takes a village to launch a venture. Our Future Labs will connect you with a group of your peers and a mentor who knows what’s up, to help you navigate the road ahead.",
    link: { title: "", url: "#" },
    icon: "/home/Connect-icon.svg",
  },
  {
    title: "Launch",
    description:
      "Ready to take your venture idea to the next level? We’ve got you - apply to join one of our incubator experiences, and get ready to put your idea out there.",
    link: { title: "", url: "#" },
    icon: "/home/Launch-icon.svg",
  },
];

const HomeHow = (props) => {
  const {} = props;
  const [hows, setHows] = useState(howItems);
  const [barHeight, setBarHeight] = useState(parseInt(0));
  const totalContent = useRef(null);
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));

  useEffect(() => {
    function getScreenSize() {
      const totalContentHeight = totalContent.current.clientHeight;
      const lastChildHeight =
        totalContent.current.querySelector(".item:last-child").offsetHeight;
      const barHeight =
        parseInt(totalContentHeight) - parseInt(lastChildHeight);
      setBarHeight(parseInt(barHeight + 30));
    }

    getScreenSize();
    window.addEventListener("resize", getScreenSize);
  }, []);

  return (
    <How>
      <Typography variant="H5" component="p" color="primary.yellow">
        HOW
      </Typography>
      <ContentBox ref={totalContent} barHeight={barHeight}>
        {hows.map((how, index) => (
          <Box className="item" key={index}>
            <Typography
              variant="h1"
              component="p"
              color="primary.white"
              className="title"
            >
              {how.title}
            </Typography>
            <Typography
              variant="body1"
              color="primary.white"
              className="description"
            >
              {how.description}
              <Typography component="span">
                <Link href={`${how.link.url}`} color="primary.yellow">
                  {how.link.title}
                </Link>
                {how.link.title ? <ArrowRightAltIcon fontSize="large" /> : ""}
              </Typography>
            </Typography>
            <Box className={`iconArea ${"item-" + index}`}>
              <Image
                src={how.icon}
                width={matches ? 68 : 117}
                height={68}
                alt="icon"
              />
            </Box>
          </Box>
        ))}
      </ContentBox>
    </How>
  );
};

export default HomeHow;
