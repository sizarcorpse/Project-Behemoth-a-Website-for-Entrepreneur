import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
const What = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  flex: "1 1 calc(35%)",
  width: "100%",
  height: "100%",
  zIndex: -2,
  "& span": {
    display: "block !important",
  },
}));
const ContentBox = styled(Box)(({ theme, ismd }) => ({
  position: "relative",
  flex: "1 1 calc(65%)",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "flex-start",
  width: "100%",
  padding: theme.spacing(10),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },

  "& .container": {
    maxWidth: "736px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    padding: theme.spacing(0),
    "& .title": {
      position: "relative",
      maxWidth: "17ch",
      "&::before": {
        content: '""',
        position: "absolute",
        overflow: "visible",
        top: -10,
        left: -200,
        width: 670,
        height: 235,
        backgroundImage: `url("/home/hp-w-untitle.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        [theme.breakpoints.down("lg")]: {
          top: -7,
          left: -200,
          width: 570,
          height: 200,
        },
        [theme.breakpoints.down("md")]: {
          left: -40,
          top: -20,
          width: 360,
          height: 130,
        },
      },
    },

    "& .ideas": {
      listStyle: "disc !important",
      "& li": {
        padding: theme.spacing(1, 0),
        alignItems: "flex-start",
        "& div": {
          padding: theme.spacing(1.2, 0),
        },
      },
    },
  },
  "&::after": {
    content: !ismd ? "''" : "none",
    position: "absolute",
    top: "calc(100% - 100px)",
    left: "10%",
    transform: "translate(-50%, 0%)",
    width: "100%",
    height: "100%",
    maxWidth: "71px",
    maxHeight: "210px",
    backgroundImage: `url("/assets/home/snakeArrow.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "contain",
    zIndex: 1,
    [theme.breakpoints.down("lg")]: {
      maxWidth: "71px",
      maxHeight: "210px",
    },
  },
}));

function HomeWhat() {
  const [ideas, setIdeas] = useState([
    {
      idea: "You’ll develop your skills and confidence around entrepreneurship, while simultaneously developing your own startup venture idea.",
    },
    {
      idea: "You’ll get to work with your peers, supporting each other to build the futures you want to see. ",
    },
    {
      idea: "You’ll connect with experienced entrepreneurs to expand your network.",
    },
  ]);
  const xl = useMediaQuery(useTheme().breakpoints.down("xl"));
  const lg = useMediaQuery(useTheme().breakpoints.down("lg"));
  const md = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <What>
      <ImageBox>
        <Box>
          <Image
            src={md ? "/home/hp-w-photo-m.png" : "/home/hp-w-photo.png"}
            width={md ? 900 : lg ? 315 : xl ? 421 : 730}
            height={md ? 520 : lg ? 705 : xl ? 700 : 1040}
            alt="What is Project Behemoth"
            quality={100}
            objectFit="cover"
            priority={true}
          />
        </Box>
      </ImageBox>
      <ContentBox ismd={md}>
        <Container className="container">
          <Typography variant="h5" component="p" color="primary.orange">
            WHAT
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            color="primary.blue"
            className="title"
          >
            Develop your own startup idea
          </Typography>
          <List className="ideas">
            {ideas.map((idea, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <TipsAndUpdatesIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <Typography variant="h4" component="p" color="primary.black">
                  {idea.idea}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Container>
      </ContentBox>
    </What>
  );
}

export default HomeWhat;
