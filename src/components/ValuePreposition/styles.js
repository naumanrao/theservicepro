import { styled, Box } from "@mui/material";

const MainBox = styled(Box)(() => ({
  "@media screen and (max-width: 767px)": {
    flexDirection: "column",
    backgroundImage: "none",
  },
  display: "flex",
  backgroundImage: "url('./who.png')",
  backgroundColor: "#f4f6fa",
  backgroundPosition: "center right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "190px auto",
  overflow: "hidden",
  position: "relative",
  backgroundAttachment: "scroll",
  padding: "50px 30px 50px 30px",
}));
const LeftBox = styled(Box)(() => ({
  "@media screen and (max-width: 767px)": {
    width: "100%",
  },
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "& .title": {
    color: "#de9d08",
    fontSize: "20px",
    fontWeight: "500",
  },
  "& .heading": {
    color: "#0a1a42",
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
    backgroundColor: "#0a1a42",
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
    color: "#0a1a42",
    "& .call-us": {
      fontSize: "15px",
      fontWeight: "500",
      color: "#8b8f9f",
    },
  },
}));

const RightBox = styled(Box)(() => ({
  width: "45.53%",
  backgroundImage: "url('./corner.png')",
  backgroundPosition: "bottom right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  mixBlendMode: "multiply",
  opacity: "1",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  position: "relative",
  backgroundAttachment: "scroll",
  "& .elect": {
    width: "571px",
    height: "381px",
    "@media screen and (max-width: 767px)": {
      width: "318px",
      height: "212px",
    },
  },
  "& .handyman": {
    width: "318px",
    height: "212px",
  },
}));

const WorkBox = styled(Box)(() => ({
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "37.875%",
  backgroundColor: "#0a1a42",
  margin: "0",
  padding: "20px 30px 20px 30px",
  left: "32.997px",
  top: "352.997px",
  position: "absolute",
  "z-index": "1",
  "@media screen and (max-width: 767px)": {
    width: "170%",
    left: "8.997px",
    top: "196.997px",
  },
  "& .work-done": {
    color: "#f4f6fa",
    fontSize: "15px",
    fontWeight: "700",
  },
}));

export { MainBox, LeftBox, RightBox, CallBox, WorkBox, AlignedBox };
