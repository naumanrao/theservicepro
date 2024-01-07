import {
  MainBox,
  RightBox,
  LeftBox,
  CallBox,
  WorkBox,
  AlignedBox,
} from "./styles";
import { List, ListItemText, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const value = [
  {
    id: 0,
    name: "Professional quality Service",
  },
  {
    id: 1,
    name: "Dedicated to quality handyman work.",
  },
  {
    id: 2,
    name: "Save money on your repair projects",
  },
  {
    id: 3,
    name: "Any time flexible schedule",
  },
];

function ValuePreposition() {
  return (
    <MainBox>
      <LeftBox>
        <Typography variant="h3" className="title">
          WHY CHOOSE US
        </Typography>
        <Typography variant="h2" className="heading">
          We have a reliable work crew specializing in outdoor and indoor
        </Typography>
        <Typography className="paragraph">
          The Service Pro provides you one stop complete solution to get variety
          of services <br></br> at your fingertips,at competitive market rates
          and a name you can trust on.
        </Typography>
        {value.map((item) => (
          <List className="list" key={item.id}>
            <CheckCircleIcon className="icon" />
            <ListItemText>
              <span>{item.name}</span>
            </ListItemText>
          </List>
        ))}
        <AlignedBox>
          <CallBox>
            <img src="./phone.png" alt="icon" />
          </CallBox>
          <Typography className="call">
            +92 312 28 77 657 <br></br>
            <span className="call-us">Call Us Anytime</span>
          </Typography>
        </AlignedBox>
      </LeftBox>
      <RightBox>
        <div className="overlay"></div>
        <img src="./electrician.webp" alt="elect" className="elect" />
        <WorkBox>
          <img src="./workdone.png" alt="icon" />
          <span className="work-done">
            500+<br></br>Work Done
          </span>
        </WorkBox>
        <img src="./handyman2.webp" alt="handyman" className="handyman" />
      </RightBox>
    </MainBox>
  );
}

export default ValuePreposition;
