import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { PBPerson, PBAvatar } from "components/ui";
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
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
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
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
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
      image: "/community/demo3.png",
      alt: "Project Behemoth Avatar",
      styling: {
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
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
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
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
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
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
        top: { icon: "twinkleStar", position: "right" },
        bottom: { icon: "polygon", position: "left", under: true },
      },
    },
  },
];
const OcMentors = () => {
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
      {mentors.map(
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
    </Box>
  );
};

export default OcMentors;
