import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Round from './Round';

export default function AccordionUsage() {
  return (
    <div className='w-full'>
        <Round Name='1st Round' Descriiption='32 Games' Games={[]}></Round>
        <Round Name='2nd Round' Descriiption='16 Games' Games={[]}></Round>
        <Round Name='Sweet 16' Descriiption='8 Games' Games={[]}></Round>
        <Round Name='Elite 8' Descriiption='4 Games' Games={[]}></Round>
        <Round Name='Final 4' Descriiption='2 Games' Games={[]}></Round>
        <Round Name='National Championship' Descriiption='1 Game' Games={[]}></Round>
    </div>
  );
}