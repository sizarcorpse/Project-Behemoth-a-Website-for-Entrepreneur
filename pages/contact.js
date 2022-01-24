import Head from "next/head";
import {
  Grid,
  Container,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { ConHero, ConForm } from "components/contact";

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

      <Grid item xs={12} sx={{ backgroundColor: "primary.orange" }}>
        <ContainerStyled>
          <ConHero />
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
          <ConForm />
        </ContainerStyled>
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
