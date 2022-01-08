import PropTypes from "prop-types";
import Image from "next/image";
import {
  Box,
  styled,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Hero = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: theme.spacing(6),
  flex: "1 1 calc(70%)",
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(3),
  },

  "& h2": {
    maxWidth: "23ch",
  },
}));

const LinkHover = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  display: "inline-flex ",
  alignItems: "center",
  justifyContent: "center",
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: "1 1 calc(30%)",
  display: "flex",
  alignItems: "flex-end",

  "& .imageArea": {
    position: "relative",
    "& span": {
      display: "block !important",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      display: "flex",
      bottom: "40%",
      right: 0,
      width: "91%",
      height: "68%",
      borderRadius: "50%",
      background: theme.palette.primary.blue,
    },

    "& .caption": {
      position: "absolute",
      bottom: theme.spacing(4),
      left: theme.spacing(-13),
      [theme.breakpoints.down("md")]: {
        left: theme.spacing(-10),
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-end",
  },
}));

function HomeHero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Hero>
      <ContentBox>
        <Typography variant="h2" color="primary.blue">
          Project Behemoth supports you to become a successful entrepreneur,
          wherever you are on your journey.
        </Typography>
        <Typography variant="h5" color="primary.blue">
          Curious? Come on let’s
          <LinkHover href="/contact">
            get inFormation! <ArrowRightAltIcon fontSize="large" />
          </LinkHover>
        </Typography>
      </ContentBox>
      <ImageBox>
        <Box className="imageArea">
          <Image
            src="/home/hp-h-person.png"
            alt=""
            width={matches ? 255 : 342}
            height={matches ? 338 : 453}
            quality={100}
            objectFit="cover"
          />
          <Box className="caption">
            <Typography variant="subtitle1" color="primary.black">
              MICHAELA, 17
            </Typography>
            <Typography variant="subtitle2">Pilot Learner</Typography>
          </Box>
        </Box>
      </ImageBox>
    </Hero>
  );
}

export default HomeHero;

HomeHero.propTypes = {};
