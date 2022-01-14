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
const Hero = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  height: "802px",
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

  "& h1": {
    maxWidth: "23ch",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: "1 1 calc(35%)",
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
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXs = useMediaQuery("(max-width:440px)", { noSsr: true });
  return (
    <Hero>
      <ContentBox>
        <Typography variant="h2" component="h1" color="primary.blue">
          Project Behemoth supports you to become a successful entrepreneur,
          wherever you are on your journey.
        </Typography>
        <PBButton linkTo="/contact" color="blue" bold>
          Curious? Come on let’s get inFormation!
        </PBButton>
      </ContentBox>
      <ImageBox>
        <Box className="imageArea">
          <Image
            src="/home/hp-h-person.png"
            alt="project behemoth"
            width={matchesXs ? 255 : matchesMd ? 290 : 342}
            height={matchesXs ? 338 : matchesMd ? 384 : 453}
            quality={100}
            objectFit="cover"
          />
          <Box className="caption">
            <Typography variant="subtitle1" component="p" color="primary.black">
              MICHAELA, 17
            </Typography>
            <Typography variant="subtitle2" component="p">
              Pilot Learner
            </Typography>
          </Box>
        </Box>
      </ImageBox>
    </Hero>
  );
}

export default HomeHero;

HomeHero.propTypes = {};
