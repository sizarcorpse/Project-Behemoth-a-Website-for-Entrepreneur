import { useState, useRef } from "react";
import _ from "lodash";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PBPerson, PBAvatar } from "components/ui";

const Mentors = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(10),
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(4),
  },
  "& h2": {
    textAlign: "center",
    maxWidth: "10ch",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 352,
    gap: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
    },
  },
}));

const mentors = [
  {
    name: "Lorem",
    company: {
      designation: "Chief Product Officer",
      name: "Company Name",
    },
    about: {
      title: "My Entrepreneurial Venture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    avatar: {
      image: "/community/demo.png",
      alt: "Project Behemoth Avatar",
      styling: {
        bottom: { icon: "unionYellow", position: "right" },
      },
    },
  },
  {
    name: "Ipsum",
    company: {
      designation: "CEO",
      name: "Company Name",
    },
    about: {
      title: "My Side Hustle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    avatar: {
      image: "/community/demo2.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "plus", position: "left" },
        bottom: { icon: "circleSmall", position: "right", under: true },
      },
    },
  },
  {
    name: "Dolor",
    company: {
      designation: "Director of Sales",
      name: "Company Name",
    },
    about: {
      title: "My Entrepreneurial Venture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    avatar: {
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "starYellow", position: "right" },
      },
    },
  },
  {
    name: "Lorem",
    company: {
      designation: "Chief Product Officer",
      name: "Company Name",
    },
    about: {
      title: "My Entrepreneurial Venture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    avatar: {
      image: "/community/demo2.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "LShapeYellow", position: "right" },
      },
    },
  },
  {
    name: "Ipsum",
    company: {
      designation: "CEO",
      name: "Company Name",
    },
    about: {
      title: "My Side Hustle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    avatar: {
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "blackStar", position: "right" },
        bottom: { icon: "circleLarge", position: "left", under: true },
      },
    },
  },
  {
    name: "Dolor",
    company: {
      designation: "Director of Sales",
      name: "Company Name",
    },
    about: {
      title: "My Entrepreneurial Venture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    avatar: {
      image: "/community/demo.png",
      alt: "Project Behemoth Avatar",
      styling: {
        bottom: { icon: "unionBlue", position: "right" },
      },
    },
  },
  {
    name: "Lorem",
    company: {
      designation: "Chief Product Officer",
      name: "Company Name",
    },
    about: {
      title: "My Entrepreneurial Venture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    avatar: {
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "starYellow", position: "right" },
      },
    },
  },
  {
    name: "Ipsum",
    company: {
      designation: "CEO",
      name: "Company Name",
    },
    about: {
      title: "My Side Hustle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    avatar: {
      image: "/community/demo2.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "plus", position: "left" },
        bottom: { icon: "circleSmall", position: "right", under: true },
      },
    },
  },
  {
    name: "Dolor",
    company: {
      designation: "Director of Sales",
      name: "Company Name",
    },
    about: {
      title: "My Entrepreneurial Venture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    avatar: {
      image: "/community/demo.png",
      alt: "Project Behemoth Avatar",
      styling: {
        bottom: { icon: "starYellow", position: "right" },
      },
    },
  },
];
const OcMentors = (props) => {
  const {} = props;
  const [isPc, setIsPc] = useState(true);
  const ref = useRef(null);
  const matches = useMediaQuery("(min-width:760px) and (max-width:1200px)");

  const handleExpandMentors = () => {
    setIsPc(!isPc);
    if (!isPc) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Mentors ref={ref}>
      <Typography variant="h1" component="h2" color="primary.black">
        Our Near Peer Mentors
      </Typography>
      <ContentBox>
        {_.slice(mentors, 0, isPc === true ? 3 : mentors.length).map(
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
              mentors={{
                name: details.name,
                designation: details.company.designation,
                company: details.company.name,
                aboutTitle: details.about.title,
                aboutDescription: details.about.description,
              }}
            />
          )
        )}
        {matches ? (
          <Box className="more">
            <Button
              sx={{
                color: "primary.yellow",
                textTransform: "none",
              }}
              onClick={handleExpandMentors}
            >
              {isPc ? "See More" : "See Less"}
              <AddCircleIcon sx={{ marginLeft: 1 }} />
            </Button>
          </Box>
        ) : (
          ""
        )}
      </ContentBox>
      {!matches ? (
        <Box className="more">
          <Button
            sx={{
              color: "primary.yellow",
              textTransform: "none",
            }}
            onClick={handleExpandMentors}
          >
            {isPc ? "See More" : "See Less"}
            <AddCircleIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Mentors>
  );
};

export default OcMentors;
