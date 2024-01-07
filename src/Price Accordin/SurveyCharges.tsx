import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ListItem, ListItemText, List } from '@mui/material';








const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
 
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  '& .MuiTypography-root' : {
    display: "flex",
    justifyContent: "space-between"
  }


}));



const charges = [ {
    id: 0,
    name: 'Plumber',
    price: 'PKR 400'
},
{
    id: 1,
    name: 'Electrician',
    price: 'PKR 400'
},
{
    id: 2,
    name: 'Carpenter',
    price: 'PKR 400'
},

{
    id: 3,
    name: 'AC/Generator',
    price: 'PKR 500'
},
{
    id: 4,
    name: 'Movers & Packers',
    price: 'PKR 500'  
},
{
    id: 5,
    name: 'Painter',
    price: 'PKR 800'
},
{
    id: 6,
    name: 'Solar',
    price: 'PKR 400'
},
{
    id: 7,
    name: 'Welder',
    price: 'PKR 400'
},]

const fumigation = [{
    id: 0,
    name: 'Cockroaches Pesticide Rodents/Reptiles Bed bugs',
    price: 'PKR 8 per sqft'
},
{
    id: 1,
    name: 'Termite Treatment',
    price: 'Pkr 18 per sqft'
}
]

const car = [
    {
        id: 0,
        name: 'Waterless Solution',
        price: 'PKR 350'
    }, {
        id: 1,
        name: 'Exterior/Tires Wash',
        price: 'PKR 600'
    }, {
        id: 2,
        name: 'Yellow Package',
        price: 'PKR 1200'
    }, {
        id: 3,
        name: 'Red Package',
        price: 'PKR 4000'
    }, {
        id: 4,
        name: 'Monthly',
        price: 'PKR 5000'
    }
]

const cleaning= [
    {
        id: 0,
        name: 'Sofa Cleaning',
        price: 'PKR 350 per Seat'
    },
    {
        id: 1,
        name: 'White Sofa Cleaning',
        price: 'PKR 450 per Seat'
    },
    {
        id: 2,
        name: 'Leather Sofa Cleaning',
        price: 'PKR 600 per Seat'
    },
    {
        id: 3,
        name: 'Single Mattress Cleaning',
        price: 'PKR 1500'
    },
    {
        id: 4,
        name: 'King Size Mattress Cleaning',
        price: 'PKR 3000'
    },
    {
        id: 5,
        name: 'Single Curtain Cleaning',
        price: 'PKR 700'
    },
    {
        id: 6,
        name: 'Carpet Cleaning',
        price: 'PKR 20 per sqft'
    },
]
export default function SurveyCharges() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');



const visitCharges = charges.map(item => 
    <ListItem key={item.id}>
        <ListItemText>{item.name}
     <span>{item.price}</span></ListItemText>
    </ListItem>)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Handyman Visit Charges</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <List>{visitCharges}</List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Fumigation Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {fumigation.map((item)=>
          <List><ListItem key={item.id}>
            <ListItemText>{item.name}<span>{item.price}</span></ListItemText></ListItem></List>)}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Car Detailing Packages</Typography>
        </AccordionSummary>
        <AccordionDetails>
         {car.map((item)=> <List>
            <ListItem key={item.id}><ListItemText>{item.name}<span>{item.price}</span></ListItemText></ListItem>
         </List>)}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Cleaning Packages</Typography>
        </AccordionSummary>
        <AccordionDetails>
         {cleaning.map((item)=> <List>
            <ListItem key={item.id}><ListItemText>{item.name}<span>{item.price}</span></ListItemText></ListItem>
         </List>)}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}