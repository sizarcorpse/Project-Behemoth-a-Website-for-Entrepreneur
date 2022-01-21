import PropTypes from "prop-types";

import Image from "next/image";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";

let icons = {
  twinkleStar: {
    url: "/assets/pbAvatar/twinkleStar.svg",
    width: "70px",
    height: "70px",
  },
  blackStar: {
    url: "/assets/pbAvatar/blackStar.svg",
    width: "70px",
    height: "70px",
  },
  circleLarge: {
    url: "/assets/pbAvatar/circleLarge.svg",
    width: "100px",
    height: "100px",
  },
  circleSmall: {
    url: "/assets/pbAvatar/circleSmall.svg",
    width: "65px",
    height: "65px",
  },
  LShapeGreen: {
    url: "/assets/pbAvatar/LShapeGreen.svg",
    width: "85px",
    height: "85px",
  },
  LShapeYellow: {
    url: "/assets/pbAvatar/LShapeYellow.svg",
    width: "85px",
    height: "85px",
  },
  plus: { url: "/assets/pbAvatar/plus.svg", width: "80px", height: "80px" },
  polygon: {
    url: "/assets/pbAvatar/polygon.svg",
    width: "100px",
    height: "115px",
  },
  starGreen: {
    url: "/assets/pbAvatar/starGreen.svg",
    width: "100px",
    height: "100px",
  },
  starYellow: {
    url: "/assets/pbAvatar/starYellow.svg",
    width: "100px",
    height: "100px",
  },
  unionBlue: {
    url: "/assets/pbAvatar/unionBlue.svg",
    width: "85px",
    height: "85px",
  },
  unionGreen: {
    url: "/assets/pbAvatar/unionGreen.svg",
    width: "85px",
    height: "85px",
  },
  unionYellow: {
    url: "/assets/pbAvatar/unionYellow.svg",
    width: "85px",
    height: "85px",
  },
  unionOrange: {
    url: "/assets/pbAvatar/unionOrange.svg",
    width: "85px",
    height: "85px",
  },
};

const PBAvatarStyled = styled(Box)(({ theme, top, bottom }) => ({
  width: "100%",
  height: "100%",
  maxWidth: "300px",
  maxHeight: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  "& .stylingWrapper": {
    position: "relative",
    width: "100%",
    height: "100%",
    "&::before": {
      content: top ? "''" : "none",
      position: "absolute",
      top: -10,
      left: top && top.position === "left" ? "0" : undefined,
      right: top && top.position === "right" ? "0px" : undefined,
      width: "100%",
      height: "100%",
      maxWidth: top && icons[top.icon].width,
      maxHeight: top && icons[top.icon].height,
      background: top && `url(${icons[top.icon].url})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition:
        top && top.position === "left" ? "top left" : "top right",
      zIndex: top && top.under ? -1 : 1,
      [theme.breakpoints.down("lg")]: {
        width: "35%",
        height: "35%",
      },
    },
    "&::after": {
      content: bottom ? "''" : "none",
      position: "absolute",
      bottom: -10,
      left: bottom && bottom.position === "left" ? "0" : undefined,
      right: bottom && bottom.position === "right" ? "0px" : undefined,
      width: "100%",
      height: "100%",
      maxWidth: bottom && icons[bottom.icon].width,
      maxHeight: bottom && icons[bottom.icon].height,
      background: bottom && `url(${icons[bottom.icon].url})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition:
        bottom && bottom.position === "left" ? "bottom left" : "bottom right",
      zIndex: bottom && bottom.under === true ? -1 : 1,
      [theme.breakpoints.down("lg")]: {
        width: "35%",
        height: "35%",
      },
    },
    "& img": {
      borderRadius: "50%",
    },
  },
}));

const PBAvatar = (props) => {
  const {
    image,
    alt,
    styling: { top, bottom },
  } = props;
  const matchesLg = useMediaQuery(useTheme().breakpoints.down("lg"));
  const matchesMd = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <PBAvatarStyled
      top={top.icon != "" ? top : undefined}
      bottom={bottom.icon != "" ? bottom : undefined}
    >
      <Box className="stylingWrapper">
        <Image
          src={image}
          alt={alt}
          width={matchesMd ? 255 : matchesLg ? 270 : 300}
          height={matchesMd ? 255 : matchesLg ? 270 : 300}
          priority={true}
          quality={100}
          objectFit="contain"
        />
      </Box>
    </PBAvatarStyled>
  );
};

PBAvatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  styling: PropTypes.shape({
    top: PropTypes.shape({
      icon: PropTypes.oneOf([
        "",
        "twinkleStar",
        "blackStar",
        "circleLarge",
        "circleSmall",
        "LShapeGreen",
        "LShapeYellow",
        "plus",
        "polygon",
        "starGreen",
        "starYellow",
        "unionBlue",
        "unionGreen",
        "unionYellow",
        "unionOrange",
      ]),
      position: PropTypes.oneOf(["", "left", "right"]),
      under: PropTypes.bool,
    }),
    bottom: PropTypes.shape({
      icon: PropTypes.oneOf([
        "",
        "twinkleStar",
        "blackStar",
        "circleLarge",
        "circleSmall",
        "LShapeGreen",
        "LShapeYellow",
        "plus",
        "polygon",
        "starGreen",
        "starYellow",
        "unionBlue",
        "unionGreen",
        "unionYellow",
        "unionOrange",
      ]),
      position: PropTypes.oneOf(["", "left", "right"]),
      under: PropTypes.bool,
    }),
  }),
};

export default PBAvatar;
