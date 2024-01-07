import { Typography } from "@mui/material";
import { MainBox, LeftBox, RightBox, ValueBox } from "./styles";

function Who() {
  return (
    <>
      <MainBox>
        <LeftBox>
          <Typography variant="h3" className="title">
            KNOW ABOUT US
          </Typography>
          <Typography variant="h2" className="heading">
            Best handyman service<br></br>in your <span>town</span>
          </Typography>
          <Typography className="paragraph">
            The Service Pro is revolutionizing how people in Pakistan avail
            Home/AutoMaintenance & Construction services. The Service Pro has
            created a web-based platform, where customers can connect with
            skilled handymen in the most convenient & fastest way possible. The
            Service Pro is providing customers with a seamless process to book
            variety of services at fingertips. To ensure customer satisfaction &
            safety, The Service Pro has made sure that all the service providers
            on the platform are highly skilled & have gone through rigorous
            background checks.
          </Typography>

          <ValueBox>
            <span className="icon">
              <img className="icn" src="./location.png" alt="icon"></img>
            </span>
            <Typography variant="h3" className="text">
              We work all over Karachi
            </Typography>
          </ValueBox>
          <ValueBox>
            <span className="icon">
              <img className="icn" src="./tools.png" alt="icon"></img>
            </span>
            <Typography variant="h3" className="text">
              Any type of Work
            </Typography>
          </ValueBox>
          <ValueBox>
            <span className="icon">
              <img className="icn" src="./price.png" alt="icon"></img>
            </span>
            <Typography variant="h3" className="text">
              Reasonable Prices
            </Typography>
          </ValueBox>
        </LeftBox>
        <RightBox>
          <img src="./handyman.webp" alt="handyman"></img>
        </RightBox>
      </MainBox>
    </>
  );
}

export default Who;
