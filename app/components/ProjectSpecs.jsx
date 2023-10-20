import React from 'react'

import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ProjectSpecs = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography>
              Total sq ft:
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
              Garage sq ft:
          </Typography>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            house sqft
          </Typography>
          <Typography>
            adu sqft
          </Typography>
          <Typography>
            bar
          </Typography>
          <Typography>
            bbq
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Locations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            basement
            1st floor
            second
            trelliss
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProjectSpecs