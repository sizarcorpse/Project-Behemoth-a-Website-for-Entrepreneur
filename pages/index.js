import Head from "next/head";
import {
  Grid,
  Container,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  HomeHero,
  HomeWhat,
  HomeHow,
  HomePhotoBreak,
  HomeVideo,
  HomeWho,
  HomeContact,
} from "components/home";
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
          backgroundImage: `url("/home/hp_h_bg-overlay.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "primary.yellow",
        }}
      >
        <ContainerStyled
          sx={{
            pb: "0 !important",
          }}
        >
          <HomeHero />
        </ContainerStyled>
      </Grid>
      <Grid item xs={12}>
        <HomeWhat />
      </Grid>

      <Grid item xs={12} sx={{ backgroundColor: "primary.blue" }}>
        <ContainerStyled>
          <HomeHow />
        </ContainerStyled>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: `url("/home/hp-pb-bg.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ContainerStyled
          sx={{
            height: "100vh",
            pb: "0 !important",
            maxHeight: matches ? "513px" : "625px",
            backgroundImage: `url("/home/hp-pb-ov.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <HomePhotoBreak />
        </ContainerStyled>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "primary.white" }}>
        <ContainerStyled>
          <HomeVideo />
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
          <HomeWho />
        </ContainerStyled>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "primary.blue" }}>
        <HomeContact />
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
