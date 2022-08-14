import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";

import { PBSocial } from "components/ui";

const ConInformation = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spacing(4),
  height: "100%",
  "@media (max-width: 820px)": {
    flexDirection: "row",
    flexWrap: "wrap",
    "& .infoTitle": {
      flexBasis: "100%",
    },
    "& .stack": {
      flexBasis: "50%",
    },
    "& .pdSocial": {
      flexBasis: "50%",
    },
  },
}));

const IconTextBox = styled(Box)(({ theme }) => ({
  "& svg": {
    color: "#373639",
    fontSize: "24px",
  },
  "& .info": {
    "& a": {
      color: theme.palette.primary.orange,
      textDecoration: "none",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "2px",
        backgroundColor: [
          theme.palette.primary.blue,
          theme.palette.primary.orange,
          theme.palette.primary.green,
        ][Math.floor(Math.random() * 3)],
        bottom: 0,
        left: 0,
        transformOrigin: "0%",
        transform: "scaleX(0)",
        transition: "transform 0.5s cubic-bezier(1,-0.06,.49,1.13)",
      },
      "&:hover::before": {
        transform: "scaleX(1)",
      },
    },
  },
}));

const information = {
  name: "ramiz imran sizar",
  alias: "sizarcorpse",
  phone: {
    placeholder: "+880 0000 000 000",
    value: 8800000000000,
  },
  emails: [
    {
      value: "sizarcorpse@gmail.com",
    },
  ],
  address: "Jashore, Bangladesh",
  project: {},
};

const IconText = ({ icon, text, linkItem, email, placeholder, tel }) => {
  return (
    <IconTextBox
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "16px",
      }}
    >
      {icon}
      <Typography variant="body1" color="primary.black" className="info">
        {!linkItem && text}
        {linkItem && (
          <a href={email ? `mailto:${text}` : tel ? `tel:${text}` : "#"}>
            {email ? text : placeholder}
          </a>
        )}
      </Typography>
    </IconTextBox>
  );
};

const ConInfo = () => {
  return (
    <ConInformation>
      <Box className="infoTitle">
        <Typography variant="h3" color="primary.black" mb={1}>
          Contact Information
        </Typography>
        <Typography variant="body1" color="primary.black">
          I love to hear from you! Feel free to contact me with any questions.
        </Typography>
      </Box>
      <Stack gap={1} direction="column" flexGrow={1} className="stack">
        <IconText icon={<PersonIcon />} text={information.name} />
        <IconText icon={<PersonSearchIcon />} text={information.alias} />
        <IconText
          icon={<EmailIcon />}
          text={information.emails[0].value}
          linkItem
          email
        />
        <IconText
          icon={<LocalPhoneIcon />}
          text={information.phone.value}
          placeholder={information.phone.placeholder}
          linkItem
          tel
        />
        <IconText icon={<LocationOnIcon />} text={information.address} />
      </Stack>
      <PBSocial />
    </ConInformation>
  );
};

export default ConInfo;
