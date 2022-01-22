import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { PBPerson, PBAvatar } from "components/ui";

const Crew = styled(Box)(({ theme }) => ({
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
const crew = [
  {
    name: "Saamra Mekuria",
    designation: "Co-Founder and CEO",
    about:
      "About Me: Saamra is Formation Ventures’ CEO and Co-Founder. Born in Boston, Saamra has lived in Los Angeles, Oakland, and now is based in San Antonio, TX. Prior to founding Formation Ventures, Saamra was the founding COO of the Pahara Institute, and spent time at Google and Bain & Company. Saamra’s first entrepreneurial venture was co-founding a student club at her high school. She has two sons who she’s trying hard to recruit to be avid 90’s R&B fans like her, who occupy her hours outside of work in exploration of the world. ",

    optional: {
      title: "First Entrepreneurial Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },

    avatar: {
      image: "/community/demo.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "LShapeGreen", position: "right" },
      },
    },
    social: {
      platform: "linkedIn",
      link: "#",
    },
  },
  {
    name: "Brian Lightfoot",
    designation: "Co-Founder and CEO",
    about:
      "About Me: Saamra is Formation Ventures’ CEO and Co-Founder. Born in Boston, Saamra has lived in Los Angeles, Oakland, and now is based in San Antonio, TX. Prior to founding Formation Ventures, Saamra was the founding COO of the Pahara Institute, and spent time at Google and Bain & Company. Saamra’s first entrepreneurial venture was co-founding a student club at her high school. She has two sons who she’s trying hard to recruit to be avid 90’s R&B fans like her, who occupy her hours outside of work in exploration of the world. ",

    optional: {
      title: "First Entrepreneurial Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },

    avatar: {
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "blackStar", position: "right" },
        bottom: { icon: "circleLarge", position: "left", under: true },
      },
    },
    social: {
      platform: "linkedIn",
      link: "#",
    },
  },
  {
    name: "Lorem Ipsum Dolor",
    designation: "Co-Founder and CEO",
    about:
      "About Me: Saamra is Formation Ventures’ CEO and Co-Founder. Born in Boston, Saamra has lived in Los Angeles, Oakland, and now is based in San Antonio, TX. Prior to founding Formation Ventures, Saamra was the founding COO of the Pahara Institute, and spent time at Google and Bain & Company. Saamra’s first entrepreneurial venture was co-founding a student club at her high school. She has two sons who she’s trying hard to recruit to be avid 90’s R&B fans like her, who occupy her hours outside of work in exploration of the world. ",

    optional: {
      title: "First Entrepreneurial Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },

    avatar: {
      image: "/community/demo2.png",
      alt: "Project Behemoth Avatar",
      styling: {
        bottom: { icon: "unionGreen", position: "right" },
      },
    },
    social: {
      platform: "linkedIn",
      link: "#",
    },
  },
  {
    name: "Saamra Mekuria",
    designation: "Co-Founder and CEO",
    about:
      "About Me: Saamra is Formation Ventures’ CEO and Co-Founder. Born in Boston, Saamra has lived in Los Angeles, Oakland, and now is based in San Antonio, TX. Prior to founding Formation Ventures, Saamra was the founding COO of the Pahara Institute, and spent time at Google and Bain & Company. Saamra’s first entrepreneurial venture was co-founding a student club at her high school. She has two sons who she’s trying hard to recruit to be avid 90’s R&B fans like her, who occupy her hours outside of work in exploration of the world. ",

    optional: {
      title: "First Entrepreneurial Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },

    avatar: {
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
      },
    },
    social: {
      platform: "linkedIn",
      link: "#",
    },
  },
  {
    name: "Brian Lightfoot",
    designation: "Co-Founder and CEO",
    about:
      "About Me: Saamra is Formation Ventures’ CEO and Co-Founder. Born in Boston, Saamra has lived in Los Angeles, Oakland, and now is based in San Antonio, TX. Prior to founding Formation Ventures, Saamra was the founding COO of the Pahara Institute, and spent time at Google and Bain & Company. Saamra’s first entrepreneurial venture was co-founding a student club at her high school. She has two sons who she’s trying hard to recruit to be avid 90’s R&B fans like her, who occupy her hours outside of work in exploration of the world. ",

    optional: {
      title: "First Entrepreneurial Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },

    avatar: {
      image: "/community/demo2.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "starGreen", position: "right" },
      },
    },
    social: {
      platform: "linkedIn",
      link: "#",
    },
  },
];

const OcCrew = () => {
  const matches = useMediaQuery("(min-width:760px) and (max-width:1200px)");
  return (
    <Crew>
      <Typography variant="h1" component="h2" color="primary.yellow">
        PB Crews
      </Typography>
      <ContentBox>
        {crew.map(
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
              crew={{
                name: details.name,
                designation: details.designation,
                details: details.about,
                optional: details.optional,
                social: details.social,
              }}
            />
          )
        )}
        <Box className="more"></Box>
      </ContentBox>
    </Crew>
  );
};

export default OcCrew;
