import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  styled,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const Video = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0),
  },
}));
const VideoContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(10, 0),
  width: "100%",
  height: "100%",
  maxHeight: 630,
  backgroundColor: theme.palette.common.white,
}));

const HomeVideo = () => {
  return (
    <Video>
      <VideoContent>
        <PlayCircleIcon sx={{ fontSize: 100, color: "primary.blue" }} />
        <Typography variant="h5" color="primary.blue">
          Intro Video Headline Here
        </Typography>
      </VideoContent>
    </Video>
  );
};

export default HomeVideo;
