import AddCircleIcon from "@mui/icons-material/AddCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Collapse, styled, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { PBButton } from "components/ui";
import { useState } from "react";

const PBPersonStyled = styled(Box)(({ theme, islearner, ismentor }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  maxWidth: 352,
  borderStyle: "solid",
  borderWidth: "0px 0px 2px 0px",
  borderColor: islearner
    ? theme.palette.primary.blue
    : ismentor
    ? theme.palette.primary.black
    : "transparent",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",
  },

  animation: "hi 500ms ease",
  "@keyframes hi": {
    "0%": {
      opacity: 0,
      transform: "translateY(50px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0px)",
    },
  },
}));

const LearnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  padding: theme.spacing(4, 0),
  borderStyle: "solid",
  borderWidth: "2px 0px 0px 0px",
  borderColor: theme.palette.primary.blue,
  "& .idea span": {
    fontWeight: "bold",
  },
}));

const MentorBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  padding: theme.spacing(4, 0),
  borderStyle: "solid",
  borderWidth: "2px 0px 0px 0px",
  borderColor: theme.palette.primary.black,
  "& .company span, .about span": {
    fontWeight: "bold",
  },
}));
const CrewBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: 220,
  gap: theme.spacing(2),
  padding: theme.spacing(4, 0),
  borderStyle: "solid",
  borderWidth: "2px 0px 2px 0px",
  borderColor: theme.palette.primary.white,
  "& .company , .about span , .optional span": {
    fontWeight: "bold",
  },
  " & .buttonToggle": {
    display: "flex",
    alignItems: "center",
  },
  "& .contents": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    "& .social": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: theme.spacing(2),
    },
  },
}));

const Learner = (learner) => {
  return (
    <LearnerBox className="learnerContent">
      <Typography variant="h3" color="primary.blue" className="name">
        {learner.name},{"  "}
        <Typography variant="h3" component="span" className="age">
          {learner.age}
        </Typography>
      </Typography>
      <Typography variant="body1" color="primary.black" className="idea">
        <Typography variant="body1" component="span">
          My Venture Idea{" : "}
        </Typography>
        {learner.ideas}
      </Typography>
      <Typography variant="body1" color="primary.blue">
        "{learner.wishes}"
      </Typography>
    </LearnerBox>
  );
};

const Mentor = (mentor) => {
  return (
    <MentorBox className="mentorContent">
      <Typography variant="h3" color="primary.black" className="name">
        {mentor.name}
      </Typography>
      <Typography variant="body1" color="primary.black" className="company">
        <Typography variant="body1" component="span">
          {mentor.designation} ,{" "}
        </Typography>
        {mentor.company}
      </Typography>
      <Typography variant="body1" color="primary.white" className="about">
        <Typography variant="body1" component="span">
          {mentor.aboutTitle}
          {" : "}
        </Typography>
        {mentor.aboutDescription}
      </Typography>
    </MentorBox>
  );
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  display: "flex",
  alignItems: "center",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Crew = (crew) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <CrewBox>
      <Typography variant="h3" color="primary.yellow" className="name">
        {crew.name}
      </Typography>
      <Typography variant="body1" color="primary.yellow" className="company">
        {crew.designation}
      </Typography>

      <Box className="buttonToggle">
        <Typography
          variant="h5"
          component="p"
          color="primary.black"
          className="about"
        >
          {!expanded ? "Read Bio " : "Hide Bio"}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          className="expandMore"
        >
          <AddCircleIcon sx={{ fontSize: 24 }} />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout={1000}>
        <Box className="contents">
          <Typography variant="body1" color="primary.white" className="about">
            <Typography variant="body1" component="span">
              About Me :{" "}
            </Typography>
            {crew.details}
          </Typography>
          {crew.optional && (
            <Typography
              variant="body1"
              color="primary.white"
              className="optional"
            >
              <Typography variant="body1" component="span">
                {crew.optional.title + " : "}
              </Typography>
              {crew.optional.description}
            </Typography>
          )}
          <Box className="social">
            <LinkedInIcon sx={{ color: "primary.white", fontSize: "24px" }} />
            <PBButton linkTo="/contact" color="white" bold>
              Find me on LinkedIn
            </PBButton>
          </Box>
        </Box>
      </Collapse>
    </CrewBox>
  );
};

const PBPerson = (props) => {
  const { av, learner, mentors, crew } = props;

  return (
    <PBPersonStyled
      islearner={learner && "true"}
      ismentor={mentors && "true"}
      iscrew={crew && "true"}
      className="pbPerson"
    >
      <Box sx={{ maxWidth: 300 }}>{av}</Box>
      {learner && <Learner {...learner} />}
      {mentors && <Mentor {...mentors} />}
      {crew && <Crew {...crew} />}
    </PBPersonStyled>
  );
};

export default PBPerson;
