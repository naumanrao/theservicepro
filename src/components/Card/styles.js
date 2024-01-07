import { styled, Box } from "@mui/material";

const AlignedBox = styled(Box)(() => ({
  padding: "0px 30px 81px 30px",
  marginTop: "-100px",
  backgroundColor: "#f4f6fa",
  backgroundAttachment: "scroll",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  "& .card": {
    position: "relative",
    width: 300,
    height: 250,
    boxShadow: "0px 6px 25px 2px rgba(10, 26, 66, 0.6)",
    display: "flex",
    justifyContent: "center", 
    borderRadius: "50px",
    ":hover": {
      backgroundColor: "rgba(222, 157, 8, 0.85)",
    },
  },
  "& .mid-card": {
    position: "relative",
    width: 300,
    height: 250,
    boxShadow: "0px 6px 25px 2px rgba(10, 26, 66, 0.6)",
    display: "flex",
    justifyContent: "center",
    borderRadius: "50px",
    backgroundColor: "rgba(10, 26, 66, 0.85)",
  },
  "& .card-content": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",

    "& .text": {
      color: "rgba(10, 26, 66, 1)",
      fontWeight: "700",
    },
    "& .icon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ede7da",
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

export { AlignedBox };
