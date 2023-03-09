import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Resources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Resources" subtitle="Resources Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is a Sensor node?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="http://opensensornet.byethost32.com/index.php/Sensor">
            <Button variant="contained">
              Know more
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to setup a DIY node
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="http://opensensornet.byethost32.com/index.php/Build_and_deploy">
            <Button variant="contained">
              Know more
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where can I find API documentation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <a href="http://opensensornet.byethost32.com/index.php/IoT">
            <Button variant="contained">
              Know more
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where can I find example of API usage?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <a href="http://opensensornet.byethost32.com/index.php/IoT">
            <Button variant="contained">
              Know more
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where can I get more help?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <a href="http://opensensornet.byethost32.com/">
            <Button variant="contained">
              Know more
            </Button>
          </a>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
};

export default Resources;
