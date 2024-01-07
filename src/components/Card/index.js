import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { AlignedBox } from "./styles";

function ValueCard() {
  return (
    <AlignedBox>
      <Card className="card">
        <CardContent className="card-content">
          <span className="icon">
            <img className="icn" src="./icon1.png" alt="icon"></img>
          </span>
          <Typography variant="h5" className="text">
            One Stop Solution
          </Typography>
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent className="card-content">
          <span className="icon">
            <img className="icn" src="./icon2.png" alt="icon"></img>
          </span>
          <Typography variant="h5" className="text">
            Exceptional Support
          </Typography>
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent className="card-content">
          <span className="icon">
            <img className="icn" src="./icon3.png" alt="icon"></img>
          </span>
          <Typography variant="h5" className="text">
            Transparent Prices
          </Typography>
        </CardContent>
      </Card>
    </AlignedBox>
  );
}

export default ValueCard;
