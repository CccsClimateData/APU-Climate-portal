import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const ApiAccess = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="API Access"  />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            1. NODE-POST API
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           This API can be used to post request to send data from your own node to our database.
          </Typography>
          <Button variant="contained">  
            Register
          </Button>
          <Button variant="outlined">  
            API Docs
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            2. QUERY-DATA API 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This API can be used to retrieve request data from our database. (Coming Soon)
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default ApiAccess;
