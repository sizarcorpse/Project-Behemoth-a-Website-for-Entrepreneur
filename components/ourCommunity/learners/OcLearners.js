import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PBAvatar, PBPerson } from "components/ui";

const Learner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(10),
  "& h2": {
    textAlign: "center",
    maxWidth: "9ch",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  justifyContent: "space-between",
  alignItems: "stretch",
  columnGap: theme.spacing(4),
  rowGap: theme.spacing(10),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  "& .pbPerson": {
    [theme.breakpoints.down("lg")]: {
      flexBasis: `calc(100% / 2 - ${theme.spacing(4)}px)`,
      flexShrink: 0,
      flexGrow: 0,
    },
  },
  "& .more": {
    width: "100%",
    maxWidth: 352,
    gap: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
    },
  },
}));

const learners = [
  {
    name: "John Doe",
    age: 18,
    ideas:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    wishes:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    avatar: {
      image: "/community/demo.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "starGreen", position: "right" },
      },
    },
  },
  {
    name: "Demo Learner",
    age: 21,
    ideas: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    wishes:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    avatar: {
      image: "/community/demo2.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
      },
    },
  },
  {
    name: "Xavier Doe",
    age: 25,
    ideas:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    wishes:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    avatar: {
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        bottom: { icon: "unionOrange", position: "left" },
      },
    },
  },
];

const OcLearners = (props) => {
  const {} = props;
  const matches = useMediaQuery("(min-width:760px) and (max-width:1200px)");

  return (
    <Learner>
      <Typography variant="h1" component="h2" color="primary.blue">
        Meet Our Learners
      </Typography>
      <ContentBox>
        {learners.map(
          (
            {
              avatar: {
                image,
                styling: { top, bottom },
              },
              ...details
            },
            index
          ) => (
            <PBPerson
              key={index}
              av={
                <PBAvatar
                  image={image}
                  alt="Project Behemoth Avatar"
                  styling={{
                    top: {
                      icon: top ? top.icon : "",
                      position: top ? top.position : "",
                    },
                    bottom: {
                      icon: bottom ? bottom.icon : "",
                      position: bottom ? bottom.position : "",
                    },
                  }}
                />
              }
              learner={{
                name: details.name,
                age: details.age,
                ideas: details.ideas,
                wishes: details.wishes,
              }}
            />
          )
        )}
        {matches ? <Box className="more"></Box> : ""}
      </ContentBox>
    </Learner>
  );
};

export default OcLearners;
