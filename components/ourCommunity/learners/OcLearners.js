import { Box, styled } from "@mui/material";
import { PBAvatar, PBPerson } from "components/ui";

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "32px",
        "@media screen and (max-width: 900px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
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
    </Box>
  );
};

export default OcLearners;
