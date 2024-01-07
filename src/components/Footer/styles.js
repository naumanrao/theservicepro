import { styled, Box } from "@mui/material";

const Main = styled(Box)(() => ({
  position: "relative",
  backgroundImage: "url('./Footer.webp')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  "@media screen and (max-width: 600px)": {
    flexDirection: "column",
  },
  justifyContent: "space-between",
  // borderBottom: "1px solid #dfdfdf",
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
}));

const StyledBox = styled(Box)(() => ({
  marginLeft: "40px",
  "@media screen and (max-width: 600px)": {
    marginRight: "40px",
  },
  "& .logo": {
    position: "relative",
  },
  "& .price": {
    "& button": {
      color: "#f8cc01",
      textAlign: "center",
      fontFamily: '"Stick No Bills", sans-serif',
      fontSize: "20px",
      fontWeight: "400",
      letterSpacing: "0.1em",
      textDecoration: "none",
    },

    marginBottom: "150px",
    "@media screen and (max-width: 600px)": {
      marginBottom: "30px",
    },
  },
}));

const StyledList = styled(Box)(() => ({
  width: "30%",
  "@media screen and (max-width: 600px)": {
    width: "81%",
  },
  "& .List": {
    color: "white",
    "& .typo": {
      fontSize: "20px",
      marginBottom: "0.7em",
      textTransform: "uppercase",
      color: "#de9d08",
      fontWeight: "600",
    },
  },
  "& .icon": {
    color: "white",
    minWidth: "35px",
  },
}));

const Wrapper = styled(Box)(() => ({
  "& .divider": {
    width: "60%",
  },

  "& .copyright": {
    textAlign: "center",
  },
}));

export { Main, StyledBox, StyledList, Wrapper };
