import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { MainBox, AlignedBox, CardBox, TextBox } from "./styles";

function Process() {
  return (
    <MainBox>
      <AlignedBox>
        <TextBox>
          <Typography variant="h3" className="title">
            Our process & why it works
          </Typography>

          <Typography className="paragraph">
            The Service Pro prioritizes customer satisfaction through fast &
            reliable service with the backing of an exceptional customer support
            team. Through fast delivery of variety of services, The Service Pro
            has penetrated the market very quickly and is looking forward to
            expand into other service sectors.
          </Typography>
        </TextBox>
        <CardBox>
          <Card className="card">
            <CardContent className="card-content">
              <span className="icon">
                <img className="icn" src="./visit.png" alt="icon"></img>
              </span>
              <Typography variant="h3" className="text">
                Schedule a handyman visit
              </Typography>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent className="card-content">
              <span className="icon">
                <img className="icn" src="./estimate.png" alt="icon"></img>
              </span>
              <Typography variant="h5" className="text">
                Get Estimation
              </Typography>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent className="card-content">
              <span className="icon">
                <img className="icn" src="./issues.png" alt="icon"></img>
              </span>
              <Typography variant="h5" className="text">
                Note your issues
              </Typography>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent className="card-content">
              <span className="icon">
                <img className="icn" src="./task.png" alt="icon"></img>
              </span>
              <Typography variant="h5" className="text">
                Fixation complete
              </Typography>
            </CardContent>
          </Card>
        </CardBox>
      </AlignedBox>
    </MainBox>
  );
}

export default Process;
