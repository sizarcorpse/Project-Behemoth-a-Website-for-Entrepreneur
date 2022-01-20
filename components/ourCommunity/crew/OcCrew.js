import { Box, styled, Typography } from "@mui/material";
import { PBPerson, PBAvatar } from "components/ui";

const crew = [
  {
    name: "Saamra Mekuria-Grillo",
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
    name: "Saamra Mekuria-Grillo",
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
];

const OcCrew = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "32px",
        "@media screen and (max-width: 900px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
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
    </Box>
  );
};

export default OcCrew;
