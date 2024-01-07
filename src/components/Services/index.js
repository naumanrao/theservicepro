import { MainBox, TopBox, CallBox, AlignedBox } from "./styles";
import { Typography } from "@mui/material";
import AutoSlider from "./AutoSlider";

function Services() {
  return (
    <MainBox>
      <TopBox>
        <Typography variant="h3" className="title">
          OUR SERVICES
        </Typography>
        <Typography variant="h2" className="heading">
          Our handyman services are professional
        </Typography>
        <Typography className="paragraph">
          The Service Pro prioritizes customer satisfaction through fast &
          reliable service with the backing of an exceptional customer support
          team. Through fast delivery of variety of services, The Service Pro
          has penetrated the market very quickly and is looking forward to
          expand into other service sectors.
        </Typography>
        <AlignedBox>
          <CallBox>
            <img src="./phone.png" alt="icon" />
          </CallBox>
          <Typography className="call">
            +92 312 28 77 657 <br></br>
            <span className="call-us">Call Us Anytime</span>
          </Typography>
        </AlignedBox>
      </TopBox>

      <AutoSlider />
    </MainBox>
  );
}

export default Services;
