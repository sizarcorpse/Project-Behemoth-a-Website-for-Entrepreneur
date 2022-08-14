import { Box, styled } from "@mui/material";
import Link from "next/link";
import PropTypes from "prop-types";

const arrows = {
  yellow: { link: "/assets/arrow/arrow_yellow.svg", color: "#FFD857" },
  blue: { link: "/assets/arrow/arrow_blue.svg", color: "#2A7DDD" },
  orange: { link: "/assets/arrow/arrow_orange.svg", color: "#EC6055" },
  green: { link: "/assets/arrow/arrow_green.svg", color: "#66C195" },
  black: { link: "/assets/arrow/arrow_black.svg", color: "#1E2227" },
  white: { link: "/assets/arrow/arrow_white.svg", color: "#ECF1F4" },
  default: { link: "/assets/arrow/arrow_black.svg", color: "#1E2227" },
};

const PBButtonStyled = styled(Box)(({ theme, color, bold }) => ({
  position: "relative",
  display: "block",
  gap: theme.spacing(1),

  "& a": {
    color: color,
    fontWeight: bold ? 600 : 500,
    fontSize: 16,
    lineHeight: 1.5,
  },
  "& .arrow": {
    position: "relative",
    width: 34,
    height: 12,
    top: 0,
    left: 10,
    transition: "all 0.3s ease-in-out",
  },

  "&:hover": {
    "& .arrow": {
      transform: "translateX(10px)",
    },
  },
}));

const PBButton = (props) => {
  const { children, linkTo, color, bold } = props;
  return (
    <PBButtonStyled
      color={
        arrows[color] ? arrows[color]["color"] : arrows["default"]["color"]
      }
      bold={bold ? "true" : "false"}
    >
      <Link href={linkTo ? linkTo : "#"}>
        {children ? children : "Click Me"}
      </Link>
      <img
        src={arrows[color] ? arrows[color]["link"] : arrows["default"]["link"]}
        alt="arrow"
        className="arrow"
      />
    </PBButtonStyled>
  );
};

PBButton.defaultProps = {
  bold: false,
};

PBButton.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string,
  color: PropTypes.oneOf([
    "yellow",
    "blue",
    "orange",
    "green",
    "black",
    "white",
  ]),
  bold: PropTypes.bool,
};

export default PBButton;
