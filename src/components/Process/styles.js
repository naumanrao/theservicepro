import { styled, Box } from "@mui/material";

const MainBox = styled(Box)(() => ({
  padding: "0px 60px 60px 60px",
  backgroundColor: "#edeaea",
  backgroundAttachment: "scroll",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  width: "100%",
  position: "relative",
}));

const AlignedBox = styled(Box)(() => ({
  padding: "60px 60px 60px 60px",
  marginTop: "-200px",
  backgroundColor: "#dce1eb",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "100%",
}));

const TextBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",

  "& .title": {
    color: "#0a1a42",
    fontWeight: "700",
    fontSize: "24px",
    "@media (max-width: 767px)": {
      fontSize: "18px",
      textAlign: "left",
    },
  },
  "& .paragraph": {
    color: "#8b8f9f",
    fontSize: "15px",
    fontWeight: "400",
    textAlign: "center",
    "@media (max-width: 767px)": {
      fontSize: "14px",
      textAlign: "left",
    },
  },
}));

const CardBox = styled(Box)(() => ({
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  "& .card": {
    boxShadow: "transparent",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  "& .card-content": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",

    "& .text": {
      fontSize: "18px",
      fontWeight: "700",
      color: "#0a1a42",
    },
    "& .icon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "25%",
      height: "75px",
      width: "75px",
      "& .icn": {
        width: "60px",
        height: "60px",
      },
    },
  },
}));

export { MainBox, AlignedBox, CardBox, TextBox };
