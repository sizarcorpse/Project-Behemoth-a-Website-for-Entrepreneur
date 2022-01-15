import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {
  Box,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { PBButton } from "components/ui";

const How = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  // padding: theme.spacing(10, 0),

  // [theme.breakpoints.down("lg")]: {
  //   padding: theme.spacing(10, 2),
  // },
  // [theme.breakpoints.down("md")]: {
  //   padding: theme.spacing(8),
  // },
  // [theme.breakpoints.down("sm")]: {
  //   padding: theme.spacing(4, 2), // +2 w/ container
  // },
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
    link: { title: "", url: "" },
    icon: "/home/Connect-icon.svg",
  },
  {
    title: "Launch",
    description:
      "Ready to take your venture idea to the next level? We’ve got you - apply to join one of our incubator experiences, and get ready to put your idea out there.",
    link: { title: "", url: "" },
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
            <Box className="description">
              <Typography variant="body1" color="primary.white">
                {how.description}
              </Typography>
              {how.link.url ? (
                <PBButton linkTo={how.link.url} color="yellow">
                  {how.link.title}
                </PBButton>
              ) : undefined}
            </Box>
            <Box className={`iconArea ${"item-" + index}`}>
              <Image
                src={how.icon}
                width={matches ? 68 : 117}
                height={68}
                alt="icon"
                priority={true}
              />
            </Box>
          </Box>
        ))}
      </ContentBox>
    </How>
  );
};

export default HomeHow;
