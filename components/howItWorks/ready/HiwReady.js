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

const Ready = styled(Box)(({ theme }) => ({
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
    maxHeight: "550px",
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
        bottom: "0",
        right: "0",
        background: "url('/how/hiw-r-p-a.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "607px",
        height: "605px",
        zIndex: -1,
        [theme.breakpoints.down("lg")]: {
          width: "527px",
          height: "525px",
        },
        [theme.breakpoints.down("md")]: {
          width: "427px",
          height: "425px",
        },
        [theme.breakpoints.down("sm")]: {
          width: "327px",
          height: "325px",
        },
      },
      "&::before": {
        content: "''",
        position: "absolute",
        display: "flex",
        top: "-30%",
        right: "-10%",
        background: "url('/how/hiw-r-p-b.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        width: "300px",
        height: "300px",
        [theme.breakpoints.down("lg")]: {
          top: "-20%",
          width: "270px",
          height: "270px",
        },
        [theme.breakpoints.down("md")]: {
          width: "230px",
          height: "230px",
        },
        [theme.breakpoints.down("sm")]: {
          width: "150px",
          height: "150px",
        },
      },
    },
  },
}));

const HiwReady = () => {
  const matchesSm = useMediaQuery(useTheme().breakpoints.down("sm"));
  const matchesMd = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Ready>
      {" "}
      <ContentBox>
        <Container maxWidth="sm" className="container">
          <Typography variant="h1" component="h2" color="primary.white">
            Ready to get started?
          </Typography>
          <PBButton linkTo="/contact" color="yellow">
            Let's build something together
          </PBButton>
        </Container>
      </ContentBox>
      <ImageBox>
        <Box className="imageArea">
          <Image
            src="/how/hiw-r-p.png"
            width={matchesSm ? 255 : matchesMd ? 375 : 478}
            height={matchesSm ? 280 : matchesMd ? 420 : 524}
            quality={100}
            alt="project behemoth"
            priority={true}
          />
        </Box>
      </ImageBox>
    </Ready>
  );
};

export default HiwReady;
