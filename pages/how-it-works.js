import Head from "next/head";
import {
  Grid,
  Container,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { HiwHero, HiwModel, HiwValue, HiwReady } from "components/howItWorks";
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

const GridStyled = styled(Grid)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.primary.blue,
  "&::before": {
    content: "''",
    position: "absolute",
    background: "url(how/hiw-h-l.svg)",
    backgroundSize: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    top: "15%",
    left: 0,
    width: "30%",
    height: "45%",
    maxWidth: 227,
    maxHeight: 375,
    [theme.breakpoints.down("md")]: {
      width: "20%",
      height: "33%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "-1%",
    },
  },
  "&::after": {
    content: "''",
    position: "absolute",
    background: "url(how/hiw-h-r.svg)",
    backgroundSize: "100%",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    top: "calc(100% - 320px)",
    right: 0,
    width: "30%",
    height: "45%",
    maxWidth: 299,
    maxHeight: 347,
  },
}));
const HowItWorks = (props) => {
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

      <GridStyled item xs={12}>
        <ContainerStyled>
          <HiwHero />
        </ContainerStyled>
      </GridStyled>

      <Grid item xs={12}>
        <ContainerStyled>
          <HiwModel />
        </ContainerStyled>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: "url(how/hiw-v-bg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundColor: "primary.yellow",
        }}
      >
        <ContainerStyled>
          <HiwValue />
        </ContainerStyled>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "primary.green",
        }}
      >
        <HiwReady />
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HowItWorks;
