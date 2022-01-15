import React from "react";
import { Box } from "@mui/material";
import { PBAppBar } from "components/ui";
import { Footer } from "components/layouts";
const PBLayout = (props) => {
  const { children } = props;
  return (
    <Box>
      <PBAppBar>{children}</PBAppBar>
      <Footer />
    </Box>
  );
};

export default PBLayout;
