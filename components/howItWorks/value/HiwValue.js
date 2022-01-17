import {
  Box,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Value = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
  },
}));
const TitleBox = styled(Box)(({ theme }) => ({
  flex: `1 1 calc(35% - 32px)`,
  maxWidth: 256,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
  "& h2": {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  "& p": {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  flex: "1 1 calc(65% - 32px)",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(6),
  },
  "& .item": {
    flex: "0 1 calc(50% - 48px)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      flex: "0 1 calc(50% - 16px)",
    },
  },
}));

const ourValues = [
  {
    order: 1,
    title: "Transparency",
    description:
      "We want you to know what we’re about, so we promise we’ll be upfront and open with you.",
  },
  {
    order: 2,
    title: "Real World Relevance",
    description:
      "We don't want to waste your time, we know it’s valuable. Everything you do here will move your business closer to success.",
  },
  {
    order: 3,
    title: "Flexibility",
    description:
      "We get it, life is a lot sometimes. We want you to have multiple pathways to success, so you can make our programs work for you.",
  },
  {
    order: 4,
    title: "Joy",
    description:
      "Real talk - being an entrepreneur is hard. And when you are able to work with friends on stuff you actually care about, it’s also a lot of fun. We aim to always keep joy front and center.",
  },
  {
    order: 5,
    title: "Learning",
    description:
      "No one is born an entrepreneur, it’s a process of learning for all of us. We promise if you commit to this learning journey, we’ll be right there, learning alongside you.",
  },
];
const HiwValue = () => {
  return (
    <Value>
      <TitleBox>
        <Typography variant="h2" color="primary.black">
          Our Values
        </Typography>
        <Typography variant="body1" color="primary.black">
          We believe you should know what we’re about, if you’re going to become
          a part of our community.{" "}
        </Typography>
      </TitleBox>
      <ContentBox>
        {ourValues.map((value) => (
          <Box key={value.order} className="item">
            <Typography variant="h3" color="primary.blue">
              {value.title}
            </Typography>
            <Typography variant="body1">{value.description}</Typography>
          </Box>
        ))}
      </ContentBox>
    </Value>
  );
};

export default HiwValue;
