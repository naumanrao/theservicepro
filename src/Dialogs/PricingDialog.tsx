import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SurveyCharges from '../Price Accordin/SurveyCharges.tsx';


interface Props{
  open: boolean;
  onClose: () => void
}

export default function PricingDialog({open, onClose}: Props) {
 
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  

  const handleClose = () => {
    onClose()
  };

  return (
    <div>
     
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        <img src='./logo.png' alt="logo"></img>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
         {<SurveyCharges />}
          </DialogContentText>
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