import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  styled,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { PBButton } from "components/ui";

const Contact = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  maxHeight: "718px",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    maxHeight: "650px",
    padding: theme.spacing(0, 0, 0, 4),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(5),
    maxHeight: "650px",
    padding: theme.spacing(8, 0, 0, 8),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0, 0, 4),
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: `1 1 calc(50%)`,
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
  },
  "& .container": {
    marginRight: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 10,
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
      alignItems: "center",
      padding: theme.spacing(0, 8, 0, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4, 0, 0),
    },
    "& h2": {
      maxWidth: "10ch",
      [theme.breakpoints.down("md")]: {
        maxWidth: "12ch",
        textAlign: "center",
      },
    },
    "& span": {
      display: "flex",
      maxWidth: "10ch",
      marginTop: theme.spacing(2),
      color: theme.palette.primary.yellow,
      "& a": {
        color: theme.palette.primary.yellow,
      },
    },
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  flex: `1 1 calc(50%)`,
  display: "flex",
  justifyContent: "flex-end",

  "& .imageArea": {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    zIndex: 1,
    "& span": {
      position: "relative",
      overflow: "visible !important",
      "&::after": {
        content: "''",
        position: "absolute",
        right: "33%",
        top: "-25%",
        background: "url('/home/hp-c-p-af.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "85%",
        height: "85%",
        zIndex: -1,
        [theme.breakpoints.down("lg")]: {
          width: "80%",
          height: "80%",
        },
      },
      "&::before": {
        content: "''",
        position: "absolute",
        display: "flex",
        bottom: "10%",
        left: "15%",
        width: "30%",
        height: "27.5%",
        borderRadius: "50%",
        background: theme.palette.primary.orange,
      },
    },
  },
}));

const HomeContact = () => {
  const matchesSm = useMediaQuery(useTheme().breakpoints.down("sm"));
  const matchesMd = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Contact>
      <ContentBox>
        <Container maxWidth="sm" className="container">
          <Typography variant="h1" component="h2" color="primary.white">
            Okay students, let’s get information.
          </Typography>
          <PBButton linkTo="/contact" color="yellow">
            contact
          </PBButton>
        </Container>
      </ContentBox>
      <ImageBox>
        <Box className="imageArea">
          <Image
            src="/home/hp-c-p.png"
            width={matchesSm ? 310 : matchesMd ? 360 : 557}
            height={matchesSm ? 350 : matchesMd ? 400 : 605}
            quality={100}
            alt="project behemoth"
          />
        </Box>
      </ImageBox>
    </Contact>
  );
};

export default HomeContact;
