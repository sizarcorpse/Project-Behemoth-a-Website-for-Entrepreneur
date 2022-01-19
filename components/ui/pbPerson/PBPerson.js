import { Box, styled, Typography } from "@mui/material";

const PBPersonStyled = styled(Box)(({ theme, isLearner, isMentor }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  maxWidth: 352,
  borderStyle: "solid",
  borderWidth: "0px 0px 2px 0px",
  borderColor: isLearner
    ? theme.palette.primary.blue
    : isMentor
    ? theme.palette.primary.black
    : theme.palette.primary.white,
  gap: theme.spacing(4),
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

const PBPerson = (props) => {
  const { av, learner, mentors } = props;

  return (
    <PBPersonStyled isLearner={learner && true} isMentor={mentors && true}>
      <Box sx={{ maxWidth: 300 }}>{av}</Box>
      {learner && <Learner {...learner} />}
      {mentors && <Mentor {...mentors} />}
    </PBPersonStyled>
  );
};

export default PBPerson;
