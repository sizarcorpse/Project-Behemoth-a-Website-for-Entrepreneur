import { Box, styled, Typography } from "@mui/material";

const Hero = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "702px",
  gap: theme.spacing(6),
  "& p": {
    maxWidth: "50ch",
    textAlign: "center",
  },
  "& h1": {
    zIndex: "1",
  },
}));

const OcHero = () => {
  return (
    <Hero>
      <Typography variant="h1" color="primary.blue">
        Our Community
      </Typography>
      <Typography variant="body1" color="primary.blue">
        We’re excited for you to join our community! We are learners, mentors,
        staff, and partners, all of whom are focused on building the capacity
        and confidence of emerging Black entrepreneurs. We’re looking forward to
        this journey, and we know we will go farther together.
      </Typography>
    </Hero>
  );
};

export default OcHero;
