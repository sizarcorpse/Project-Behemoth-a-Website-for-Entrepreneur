import Image from "next/image";
import { Grid, Box, Typography, Container, styled } from "@mui/material";

const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(10, 4),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Footer = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundColor: "primary.black" }}>
        <Container>
          <ContentBox>
            <Image
              src="/assets/logo/sl-w.svg"
              width="100"
              height="35"
              alt="project behemoth"
            />
          </ContentBox>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
