import Head from "next/head";
import { Grid, Container } from "@mui/material";
import { HomeHero } from "components/home";

export default function Home() {
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
            height: "100vh",
            maxHeight: "802px",
          }}
        >
          <HomeHero />
        </Container>
      </Grid>
    </Grid>
  );
}
