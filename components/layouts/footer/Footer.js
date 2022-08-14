import { Box, Container, Grid, styled, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const nav = [
  { title: "Home", href: "/" },
  { title: "Our Community", href: "/our-community" },
  { title: "Get In Touch", href: "/contact" },
  { title: "How It Works", href: "/how-it-works" },
  { title: "Our Partners", href: "/our-community/#our-partners" },
  { title: "Terms & Privacy", href: "/" },
];

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 6),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: theme.spacing(3),
    padding: theme.spacing(4, 2),
  },
}));

const BoxListStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: theme.breakpoints.values.sm,
  rowGap: theme.spacing(2),
  padding: theme.spacing(0, 2),

  [theme.breakpoints.down("md")]: {
    maxWidth: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 0),
  },
}));

const BoxListItemStyled = styled(Box)(({ theme }) => ({
  flex: "1 1 33%",

  [theme.breakpoints.down("md")]: {
    flexBasis: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    flexBasis: "100%",
  },
  "& a": {
    color: "text.primary",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const NavList = () => {
  return (
    <BoxListStyled>
      {nav.map((item, index) => (
        <BoxListItemStyled key={index}>
          <Link href={item.href}>
            <Typography
              variant="body1"
              component="a"
              color="common.white"
              href={item.href}
            >
              {item.title}
            </Typography>
          </Link>
        </BoxListItemStyled>
      ))}
    </BoxListStyled>
  );
};

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundColor: "primary.black" }}>
        <Container>
          <ContentBox>
            <Box minWidth="200px">
              <Image
                src="/assets/logo/sl-w.svg"
                width="200"
                height="70"
                alt="project behemoth"
                priority={true}
              />
              <Typography variant="body2" color="common.white" sx={{ mt: 1 }}>
                &copy; Copyright {new Date().getFullYear()} Project Behemoth.
              </Typography>
            </Box>
            <NavList />
          </ContentBox>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
