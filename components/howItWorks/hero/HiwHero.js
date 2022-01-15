import { Box, styled, Typography } from "@mui/material";
import { PBButton } from "components/ui";
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

const HiwHero = () => {
  return (
    <Hero>
      <Typography variant="h1" color="primary.white">
        How It Works
      </Typography>
      <Typography variant="body1" color="primary.white">
        Well, really it's how you'll work, with us as your partners. You’ll
        explore your identity, activate your creativity, and become fired up to
        find solutions to problems around you. You’ll build your vision for the
        future, and learn how to inspire others to jump on board. You’ll work
        really hard, and you probably won’t even realize it because you’ll enjoy
        the experience. Most importantly, you’ll become an entrepreneur, and
        join a growing community of entrepreneurs like you.
      </Typography>
      <PBButton linkTo="/contact" color="yellow" bold>
        Let us know you’re interested!
      </PBButton>
    </Hero>
  );
};

export default HiwHero;
