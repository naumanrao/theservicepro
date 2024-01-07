import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(() => ({
  marginTop: "-50px",
  marginBottom: "0px",
  padding: "250px 30px 180px 30px",
  backgroundImage: ' url("./slider3.webp")',
  transition:
    "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
  backgroundAttachment: "scroll",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderBottom: "1px solid #dfdfdf",
  position: "relative",
  "& .overlay": {
    backgroundAttachment: "scroll",
    filter:
      "brightness( '100%' ), contrast( '150% ') saturate( 100% ) blur( 0px ) hue-rotate( 359deg )",
    backgroundColor: "#0a1a42",
    backgroundImage: "url('./corner.webp')",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",

    opacity: "0.81",
    mixBlendMode: "multiply",
    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",

    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    position: "absolute",
  },
  "& .typography": {
    color: "#de9d08",
    textAlign: "center",
    fontFamily: '"Stick No Bills", sans-serif',
    fontSize: "68px",
    fontWeight: "900",
    letterSpacing: "0.5em",

    position: "relative",
  },

  "& .pro": {
    color: "#dfdfdf",
    textAlign: "center",
    fontFamily: '"Stick No Bills", sans-serif',
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: "0.3em",
    position: "relative",
  },
}));

const AlignedButton = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "& .order": {
    position: "relative",
    display: "flex",
    gap: "4px",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "50px",
    backgroundColor: "rgba(222, 157, 8, 0.58)",
    color: "#dfdfdf",
    padding: "20px 25px 20px 25px",
    border: "none",
    fontSize: "15px",
    fontWeight: "bolder",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(222, 157, 8, 1)",
    },
  },
}));

const AlignedStack = styled(Box)(() => ({
  position: "relative",
  flexWrap: "wrap",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "15px",
  paddingTop: "20px",

  "& .chip": {
    color: "#dfdfdf",
    fontSize: "14px",
    fontWeight: "700",
    "& .icon": {
      color: "#de9d08",
    },
  },
}));

export { StyledBox, AlignedButton, AlignedStack };
