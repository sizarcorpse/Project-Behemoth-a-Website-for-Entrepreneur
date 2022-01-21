import React from "react";
import Image from "next/image";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Partners = styled(Box)(({ theme }) => ({
  padding: theme.spacing(16, 0, 0, 0),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(14, 0, 0, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(12, 0, 0, 0),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(10, 0, 0, 0),
  },

  "& h3": {
    textAlign: "center",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(6),
  "& .item-content": {},
}));

const partners = [
  {
    name: "microsoft",
    photo: "/partner/microsoft.svg",
    url: "https://www.microsoft.com/en-us/",
  },
  {
    name: "sony",
    photo: "/partner/sony.svg",
    url: "https://www.sony.com/",
  },
  {
    name: "intel",
    photo: "/partner/intel.svg",
    url: "https://www.intel.com/",
  },
  {
    name: "nike",
    photo: "/partner/nike.svg",
    url: "https://www.nike.com/",
  },
  {
    name: "samsung",
    photo: "/partner/samsung.svg",
    url: "https://www.samsung.com/",
  },
  {
    name: "spotify",
    photo: "/partner/spotify.svg",
    url: "https://www.spotify.com/",
  },
  {
    name: "PlayStation",
    photo: "/partner/playstation.svg",
    url: "https://www.playstation.com/",
  },
];

const OcPartners = () => {
  return (
    <Partners>
      <Typography variant="h2" component="h3" color="primary.yellow">
        Our Partners
      </Typography>
      <ContentBox>
        {partners.map((partner, index) => (
          <Box key={index} className="item">
            <Image
              src={partner.photo}
              alt={partner.name}
              width={120}
              height={42}
              priority={true}
              quality={100}
              objectFit="contain"
            />
          </Box>
        ))}
      </ContentBox>
    </Partners>
  );
};

export default OcPartners;
