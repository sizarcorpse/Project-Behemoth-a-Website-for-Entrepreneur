import Head from "next/head";
import {
  Grid,
  Container,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { OcHero, OcLearners, OcMentors, OcCrew } from "components/ourCommunity";

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
      <Grid item xs={12}>
        <ContainerStyled>
          <OcLearners />
        </ContainerStyled>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "primary.green" }}>
        <ContainerStyled>
          <OcMentors />
        </ContainerStyled>
      </Grid>
      <Grid item xs={12}>
        <ContainerStyled>
          <OcCrew />
        </ContainerStyled>
      </Grid>
    </Grid>
  );
};

export default OurCommunity;
