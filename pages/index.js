import Head from "next/head";
import { Grid, Container, useTheme, useMediaQuery } from "@mui/material";
import { HomeHero, HomeWhat, HomeHow, HomePhotoBreak } from "components/home";

const Home = (props) => {
  const matches = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <Grid container component="main">
      <Head>
        <title>Project Behemoth</title>
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
          width: "100%",
          height: "100%",

          backgroundImage: `url("/home/hp_h_bg-overlay.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",

          backgroundColor: "primary.yellow",
        }}
      >
        <Container
          sx={{
            width: "100%",
            height: "100vh",
            maxHeight: "802px",
          }}
        >
          <HomeHero />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <HomeWhat />
      </Grid>

      <Grid item xs={12} sx={{ backgroundColor: "primary.blue" }}>
        <Container>
          <HomeHow />
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url("/home/hp-pb-bg.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container
          sx={{
            width: "100%",
            height: "100vh",
            maxHeight: matches ? "513px" : "625px",
            backgroundImage: `url("/home/hp-pb-ov.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <HomePhotoBreak />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
