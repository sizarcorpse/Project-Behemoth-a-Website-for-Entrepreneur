import React from "react";
import { Box, styled, Typography, Stack } from "@mui/material";
import FormBase from "./FormBase";
import ConInfo from "./ConInfo";

const Contact = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 820px)": {
    flexDirection: "column",
    gap: theme.spacing(6),
  },
  "& .information": {
    flexBasis: "50%",
  },
  "& .form": {
    flexBasis: "70%",
    padding: theme.spacing(0, 10),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(4),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 4),
      "@media (max-width: 820px)": {
        padding: theme.spacing(0, 0),
      },
    },
  },
}));

const ConForm = () => {
  return (
    <Contact>
      <Box className="information">
        <ConInfo />
      </Box>
      <Box className="form">
        <Typography variant="h2" color="primary.blue">
          Lets create<br></br>progress together
        </Typography>
        <Typography variant="subtitle2" color="primary.black">
          A developer shaping ideas into products. We help startups and
          enterprises invent, build and launch their next project.
        </Typography>
        <FormBase />
      </Box>
    </Contact>
  );
};

export default ConForm;
