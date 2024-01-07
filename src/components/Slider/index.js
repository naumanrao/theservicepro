import * as React from "react";
import { Chip, Typography } from "@mui/material";
import ReactWhatsapp from "react-whatsapp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StyledBox, AlignedButton, AlignedStack } from "./styles";
import Header from "../Header/Header";

export default function Slider() {
  return (
    <>
      <Header />

      <StyledBox>
        <div className="overlay"> </div>
        <Typography className="typography">Avail</Typography>

        <Typography className="pro">services like a PRO!!</Typography>

        <AlignedStack>
          <Chip
            className="chip"
            icon={<CheckCircleIcon className="icon" />}
            label="Professional Service"
          ></Chip>
          <Chip
            className="chip"
            icon={<CheckCircleIcon className="icon" />}
            label="Verified Handyman"
          ></Chip>
          <Chip
            className="chip"
            icon={<CheckCircleIcon className="icon" />}
            label="Fast & Efficient Service"
          ></Chip>
        </AlignedStack>
        <AlignedButton>
          <ReactWhatsapp
            className="order"
            number="92 334 124 70 81"
            message="Need Service like a Pro!!"
          >
            Schedule a Booking{<CalendarMonthIcon fontSize="inherit" />}
          </ReactWhatsapp>
        </AlignedButton>
      </StyledBox>

      {/* <Who /> */}
    </>
  );
}
