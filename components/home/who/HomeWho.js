import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const Who = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(4),
  },

  "& .item": {
    flex: "1 1 calc(50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(2),
    },
    "& img": {
      borderRadius: "50%",
    },
    "& .description": {
      [theme.breakpoints.down("md")]: {
        maxWidth: 660,
      },
    },
  },
}));

const whos = [
  {
    photo: "/home/ph-w-p.png",
    description:
      "“I learned that I was able to come up with real life solutions to problems that are out there.”",
    position: "Pilot Learner, Spring 2021",
  },
  {
    photo: "/home/ph-w-p.png",
    description:
      "“I liked that we are able to step into the shoes of big companies. I never thought that I would be able to do this.”",
    position: "Pilot Learner, Spring 2021",
  },
];

const HomeWho = () => {
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Who>
      <Typography variant="H5" component="p" color="primary.orange">
        WHO
      </Typography>
      <ContentBox>
        {whos.map((who, index) => (
          <Box key={index} className="item">
            <Image
              src={who.photo}
              width={matches ? 128 : 160}
              height={matches ? 128 : 160}
              quality={100}
              alt="project behemoth"
              priority={true}
            />
            <Typography
              variant="h3"
              component="p"
              color="primary.blue"
              className="description"
            >
              {who.description}
            </Typography>
            <Typography variant="caption" component="p" color="primary.black">
              {who.position}
            </Typography>
          </Box>
        ))}
      </ContentBox>
    </Who>
  );
};

export default HomeWho;
