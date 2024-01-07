import { styled, Box } from "@mui/material";

const MainBox = styled(Box)(() => ({
  flexDirection: "column",
  gap: "30px",
  display: "flex",
  backgroundColor: "#0a1a42",
  overflow: "hidden",
  position: "relative",
  backgroundAttachment: "scroll",
  padding: "0px 0px 300px 0px",
}));
const TopBox = styled(Box)(() => ({
  "@media screen and (max-width: 767px)": {
    width: "100%",
  },
  padding: "80px 30px 30px 30px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .title": {
    color: "#de9d08",
    fontSize: "20px",
    fontWeight: "500",
  },
  "& .heading": {
    color: "#ffffff",
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "1.5em",
    textAlign: "left",
    display: "flex",
  },
  "& .paragraph": {
    textAlign: "left",
    color: "#8b8f9f",
    display: "flex",
  },
  "& .list": {
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    "& span": {
      color: "#0a1a42",
      fontSize: "15px",
      fontWeight: "500",
    },
    "& .icon": {
      color: "#de9d08",
    },
  },
}));
const CallBox = styled(Box)(() => ({
  width: "75px",
  height: "75px",
  backgroundColor: "#de9d08",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "50px",
    height: "50px",
  },
  ":hover": {
    backgroundColor: "#ffffff",
  },
}));

const AlignedBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  "& .call": {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    "& .call-us": {
      fontSize: "15px",
      fontWeight: "500",
      color: "#8b8f9f",
    },
  },
}));

const SliderBox = styled(Box)(() => ({
  width: "100%",
  "@media screen and (max-width: 767px)": {
    width: "290%",
  },
  "& img": {
    borderRadius: "20px",
  },
}));

export { MainBox, TopBox, CallBox, AlignedBox, SliderBox };
