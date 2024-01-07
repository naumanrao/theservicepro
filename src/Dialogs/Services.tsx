import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


interface Props{
  openServices: boolean;
  onClose: () => void
}

export default function Services({openServices, onClose}: Props) {
 
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  const handleClose = () => {
    onClose()
  };

  return (
    <div>
     
      <Dialog
        fullScreen={fullScreen}
        open={openServices}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          jiyoooooo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          Close
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}