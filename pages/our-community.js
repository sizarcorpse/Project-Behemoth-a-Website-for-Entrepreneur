import Head from "next/head";
import {
  Grid,
  Container,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  OcHero,
  OcLearners,
  OcMentors,
  OcCrew,
  OcPartners,
  OcReady,
} from "components/ourCommunity";

const ContainerStyled = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(8, 8),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 8),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 4),
  },
}));

const LeanerGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "100%",
    height: "100%",
    maxWidth: "420px",
    maxHeight: "300px",
    backgroundImage: `url("/assets/community/LearnersPanelArrow.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "contain",
    zIndex: -1,
    [theme.breakpoints.down("lg")]: {
      maxWidth: "360px",
      maxHeight: "300px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
    },
  },
}));

const OurCommunity = () => {
  return (
    <Grid container component="main">
      <Head>
        <title>Behemoth : How it Works</title>
        <meta
          name="description"
          content="Project Behemoth A Website for Entrepreneur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: `url("/home/hp_h_bg-overlay.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "primary.yellow",
        }}
      >
        <ContainerStyled>
          <OcHero />
        </ContainerStyled>
      </Grid>
      <LeanerGrid item xs={12}>
        <ContainerStyled>
          <OcLearners />
        </ContainerStyled>
      </LeanerGrid>
      <Grid item xs={12} sx={{ backgroundColor: "primary.green" }}>
        <ContainerStyled>
          <OcMentors />
        </ContainerStyled>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "primary.blue" }}>
        <ContainerStyled>
          <OcCrew />
          <OcPartners />
        </ContainerStyled>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: `url("/home/hp_h_bg-overlay.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "primary.yellow",
        }}
      >
        <ContainerStyled>
          <OcReady />
        </ContainerStyled>
      </Grid>
    </Grid>
  );
};

export default OurCommunity;
