import React from "react";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PBButton } from "components/ui";
const ReadyToStart = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(6),
  height: "502px",
  [theme.breakpoints.down("md")]: {
    height: "420px",
  },
  "& h2": {
    textAlign: "center",
    maxWidth: "11ch",
  },
}));

const OcReady = () => {
  return (
    <ReadyToStart>
      <Typography variant="h1" component="h2" color="primary.blue">
        Ready to get started?
      </Typography>
      <PBButton linkTo="/contact" color="blue" bold>
        Let's build something together
      </PBButton>
    </ReadyToStart>
  );
};

export default OcReady;
