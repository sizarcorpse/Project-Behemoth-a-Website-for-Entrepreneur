import { Box, styled, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const Video = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));
const VideoContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(10, 0),
  width: "100%",
  height: 550,
  maxHeight: 630,
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    height: 420,
  },
  [theme.breakpoints.down("sm")]: {
    height: 320,
  },
  "& svg": {
    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

const HomeVideo = () => {
  return (
    <Video>
      <VideoContent>
        <PlayCircleIcon sx={{ fontSize: 100, color: "primary.blue" }} />
        <Typography variant="h5" component="h2" color="primary.blue">
          Intro Video Headline Here
        </Typography>
      </VideoContent>
    </Video>
  );
};

export default HomeVideo;
