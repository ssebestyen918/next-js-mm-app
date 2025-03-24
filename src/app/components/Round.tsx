import { Accordion, AccordionSummary, Typography, AccordionDetails } from "../../../node_modules/@mui/material/index";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    Name: string
    Descriiption: string
    Games: any[]
  }

  const Round = (props: Props) => {
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ width: '45%', flexShrink: 0 }}component="span">{props.Name}</Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>{props.Descriiption}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
    )
  }

  export default Round