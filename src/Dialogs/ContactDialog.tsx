import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ListItem, List, ListItemText, ListItemIcon } from "@mui/material";
import {
  AccessTimeFilledRounded,
  Call,
  EmailRounded,
} from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import { Box, styled, Typography } from "@mui/material";


interface Props{
  openContact: boolean;
  onClose: () => void
}

const StyledList = styled(Box)(() => ({
 
    // width: "30%",
    "@media screen and (max-width: 600px)": {
      width: "81%",
    },
    "& .List": {
      color: "black",
      "& .typo": {
        fontSize: "20px",
        marginBottom: "0.7em",
        textTransform: "uppercase",
        color: "rgba(10, 26, 66, 1)",
        fontWeight: "600",
      },
    },
    "& .icon": {
      color: "black",
      minWidth: "35px",
    },
  }));
  
export default function ContactDialog({openContact, onClose}: Props) {
 
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClose = () => {
    onClose()
  };

  return (
    <div>
     
      <Dialog
     
        fullScreen={fullScreen}
        open={openContact}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle  id="responsive-dialog-title">
          {"We are always here to help you!!"}
        </DialogTitle>
        <DialogContent >
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
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='inherit' style={{color: 'rgba(222, 157, 8, 1)', fontSize: "16px", }} autoFocus onClick={handleClose}>
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}