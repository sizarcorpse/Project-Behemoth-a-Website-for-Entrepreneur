import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";
import { PBButton } from "components/ui";

const Model = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
  },
}));
const ContentWrapper = styled(Box)(({ theme, order, color }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(6),
  },
}));

const ContactBox = styled(Box)(({ theme, order, color }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(4),
  },
  "& .content": {
    flex: "1 1 calc(63% - 48px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    "& .order": {
      position: "relative",
      display: "inline-block",
      padding: theme.spacing(2),
      zIndex: 1,
      "&::after": {
        content: '""',
        position: "absolute",
        display: "inline-block",
        left: 0,
        top: 9,
        width: 40,
        height: 40,
        background: theme.palette.primary[color],
        backgroundPosition: "center",
        borderRadius: 5,
        transform: "rotate(45deg)",
        transformOrigin: "center center",
        zIndex: -1,
      },
    },
    "& .title": {},
    "& .description": {
      maxWidth: "43ch",
      [theme.breakpoints.down("md")]: {
        maxWidth: "60ch",
      },
    },
    "& .concent": {
      color: "#B5B5B5",
    },
  },
  "& .image": {
    flex: "1 1 calc(37% - 48px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

const models = [
  {
    order: 1,
    title: "Explore",
    description:
      "Our online entrepreneurship course is fun! No really, it is. It’s called Run the Future, because that’s what you’ll learn how to do. Instead of boring video lectures and worksheets, we’ve got interactive content and games. When you’re done, you’ll have a better understanding of yourself and your purpose, a venture concept that you can use to build a successful company or nonprofit, along with the confidence that you can build and run the future (see what we did there?). If you can invest 3-4 hours a week*, you can do this.",
    concent: "*Less time than it takes to binge a show on Netflix..",
    photo: "/how/Explore-Image-Collage.png",
    link: {
      title: "Want to see more?",
      url: "/contact",
    },
    color: "blue",
  },
  {
    order: 2,
    title: "Connect",
    description:
      "Your Future Lab is your crew as you explore and build your venture idea(s). Through weekly meetings, at times that work for you, you’ll workshop ideas with new friends and start to build your business from day one. You’ll also work with young entrepreneurs that were just like you a few years ago and connect with mentors who have been in your shoes. ",
    concent: "",
    photo: "/how/Connect-Image-Collage.png",
    link: {
      title: "",
      url: "",
    },
    color: "yellow",
  },
  {
    order: 3,
    title: "Launch",
    description:
      "So, now you have your idea and your support crew in place. What’s next? After you develop your idea, we’re here for you when you want to level up. You can choose from different pathways like incubation (which means growing your business in a supportive environment), or an internship at a startup (don’t worry, we can connect you). ",
    concent: "",
    photo: "/how/Launch-Image-Collage.png",
    link: {
      title: "",
      url: "",
    },
    color: "orange",
  },
];

const HiwModel = () => {
  return (
    <Model>
      <Typography variant="h5" component="p" color="primary.orange">
        OUR MODEL
      </Typography>
      <ContentWrapper>
        {models.map((model, index) => (
          <ContactBox
            key={index}
            className={`item ${model.color} ${model.title.toLocaleLowerCase()}`}
            order={model.order}
            color={model.color}
          >
            <Box className="content">
              <Typography
                variant="h5"
                component="p"
                color="primary.white"
                className="order"
              >
                {model.order}
              </Typography>
              <Typography
                variant="h1"
                component="p"
                color={`primary.${model.color}`}
                className="title"
              >
                {model.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color="primary.black"
                className="description"
              >
                {model.description}
              </Typography>
              {model.concent && (
                <Typography
                  variant="caption"
                  component="p"
                  color="primary.black"
                  className="concent"
                >
                  {model.concent}
                </Typography>
              )}
              {model.link.url ? (
                <PBButton linkTo={model.link.url} color={model.color} bold>
                  {model.link.title}
                </PBButton>
              ) : undefined}
            </Box>
            <Box className="image">
              <Image
                src={model.photo}
                alt={model.title}
                width={448}
                height={602}
                priority={true}
                quality={100}
                objectFit="contain"
              />
            </Box>
          </ContactBox>
        ))}
      </ContentWrapper>
    </Model>
  );
};

export default HiwModel;
