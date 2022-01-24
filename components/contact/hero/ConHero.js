import { Box, styled, Typography } from "@mui/material";
import { PBButton } from "components/ui";
const Hero = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "402px",
  gap: theme.spacing(6),
  "& p": {
    maxWidth: "50ch",
    textAlign: "center",
  },
  "& h1": {
    zIndex: "1",
  },
}));
const ConHero = () => {
  return (
    <Hero>
      <Typography variant="h1" color="primary.white">
        Get in touch
      </Typography>
    </Hero>
  );
};

export default ConHero;
