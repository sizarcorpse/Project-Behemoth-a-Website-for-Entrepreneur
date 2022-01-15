import PropTypes from "prop-types";
import Image from "next/image";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";

const PhotoBreak = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "flex-end",
}));

const HomePhotoBreak = () => {
  const matches = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <PhotoBreak>
      <Image
        src="/home/hp-pb-p.png"
        width={matches ? 328 : 445}
        height={matches ? 413 : 561}
        quality={100}
        alt="project behemoth"
        priority={true}
      />
    </PhotoBreak>
  );
};

export default HomePhotoBreak;
