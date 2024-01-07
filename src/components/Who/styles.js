import { Box, styled } from "@mui/material";

const MainBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundImage: "url('./who.png')",
  backgroundColor: "#f4f6fa",
  backgroundPosition: "center right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "190px auto",
  overflow: "hidden",
  position: "relative",
  backgroundAttachment: "scroll",
  padding: "30px 30px 100px 30px",
  "@media screen and (max-width: 767px)": {
    width: "100%",
    flexDirection: "column",
    backgroundImage: "none",
  },
}));
const LeftBox = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "@media screen and (max-width: 767px)": {
    width: "100%",
  },
  "& .title": {
    color: "#de9d08",
    fontSize: "20px",
    fontWeight: "500",
  },
  "& .heading": {
    color: "#0a1a42",
    fontSize: "46px",
    fontWeight: "700",

    textAlign: "left",
    "& span": {
      color: "#de9d08",
    },
  },
  "& .paragraph": {
    textAlign: "left",
    color: "#8b8f9f",
  },
}));

const ValueBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "& .text": {
    color: "rgba(10, 26, 66, 1)",
    fontWeight: "700",
    fontSize: "18px",
  },
  "& .icon": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a1a42",
    borderRadius: "20%",
    height: "60px",
    width: "60px",
    "& .icn": {
      width: "40px",
      height: "40px",
    },
  },
}));
const RightBox = styled(Box)(() => ({
  width: "45.53%",
  backgroundColor: "#0a1a42",
  backgroundImage: "url('./circles.webp')",
  "@media screen and (max-width: 767px)": {
    background: "none",
  },
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "777px auto",
  position: "relative",
  padding: "71px 0px 0px 0px",
  borderRadius: "10px 10px 10px 10px",
  mixBlendMode: "multiply",
  opacity: "0.85",
  "& img": {
    margin: "-25px 62px 0px -26px",
    width: "534px",
    height: "400px",
  },
}));

export { MainBox, LeftBox, RightBox, ValueBox };
