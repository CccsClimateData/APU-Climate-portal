import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="About"  />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            About the project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           This project aims to increase coverage of data on environmental parameters across India. The project is run under the Centre for Climate Change and Sustainability of the Azim Premji University. The project aims to involve as many people as possible in an attempt to collaborate and expand the nework as well as help extend knowledge.
          </Typography>
          <Button variant="contained">  
            Home Page
          </Button>
          
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The team consists of a dynamic group led by Prof Santonu Goswami of Azim Premji University. The Research associates working under him are Ashique Anowar (IoT specialist), Proyash Paban Sarma Borah (Web-Dev Specialist), Ritav Kashyap (Instrumentation Specialist) and Devraj Kashyap (Domain specialist).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Contact us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Any queries on the project can be directed to contact.sensor.group@example.com or to +91XXXXXXXXXX
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default About;
