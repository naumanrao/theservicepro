import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import { ListItem, List, ListItemText, ListItemIcon } from "@mui/material";
import {
  AccessTimeFilledRounded,
  Call,
  EmailRounded,
} from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import { CopyrightRounded } from "@mui/icons-material";
import PricingDialog from "../../Dialogs/PricingDialog.tsx";
import { Main, StyledBox, StyledList, Wrapper } from "./styles.js";
const Footer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Main>
        <div className="overlay"> </div>
        <StyledBox>
          <img className="logo" src="log.png" alt="logo"></img>
          <Typography className="price">
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              Check Service Prices
            </Button>
          </Typography>
        </StyledBox>

        <StyledList>
          <List className="List">
            <Typography className="typo">Contact Us</Typography>
            <ListItem>
              <ListItemIcon className="icon">
                <Call />
              </ListItemIcon>
              <ListItemText primary="+92 312 28 77 657"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className="icon">
                <EmailRounded />
              </ListItemIcon>
              <ListItemText primary="info@tsp.com"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className="icon">
                <AccessTimeFilledRounded />
              </ListItemIcon>

              <ListItemText primary="Mon - Sun 10am to 10pm"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className="icon">
                <StoreIcon />
              </ListItemIcon>

              <ListItemText primary="Shop # 28 Near CP 6 Malir, Karachi"></ListItemText>
            </ListItem>
          </List>
        </StyledList>

        <PricingDialog
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </Main>
      <Wrapper>
        <Divider className="divider" />
        <Typography className="copyright">
          CopyRight{<CopyrightRounded />} 2023 The Service Pro | All Rights
          Reserved |
        </Typography>
      </Wrapper>
    </>
  );
};

export default Footer;
