import { useState } from "react";
import PropTypes from "prop-types";
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
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
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
const ContentBox = styled(Box)(({ theme }) => ({
  flex: "1 1 calc(65%)",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "flex-start",
  width: "100%",
  padding: theme.spacing(5, 10),

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(5, 4, 0, 4),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0),
  },

  "& .container": {
    maxWidth: "736px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
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
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <What>
      <ImageBox>
        <Box>
          <Image
            src={matches ? "/home/hp-w-photo-m.png" : "/home/hp-w-photo.png"}
            width={matches ? 900 : 730}
            height={matches ? 520 : 1040}
            alt="What is Project Behemoth"
            quality={100}
            objectFit="cover"
          />
        </Box>
      </ImageBox>
      <ContentBox>
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
