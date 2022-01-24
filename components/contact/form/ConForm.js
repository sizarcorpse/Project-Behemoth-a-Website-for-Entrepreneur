import React from "react";
import { Box, styled, Typography } from "@mui/material";
import FormBase from "./FormBase";

const Contact = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
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
    },
  },
}));

const ConForm = () => {
  return (
    <Contact>
      <Box className="information"></Box>
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
