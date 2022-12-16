import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import SensorNetworkDummy from "../../data/SensorNetworkDummy";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const WaterDailyAverage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = [
    {
      "id": 1,
      "Address": "Assam Engineering College",
      "Coordinates": "26.14171794440607, 91.66006589922732",
      "ph": 7.8,
      "Temp": 19,
      "Turbidity": 6,
      "DO": 800
     },
     {
      "id": 2,
      "Address": "Azim Premji University",
      "Coordinates": "12.84513725199733, 77.7777766930164",
      "ph": 8.0,
      "Temp": 17,
      "Turbidity": 4,
      "DO": 760
     },
     {
      "id": 3,
      "Address": "Jamia Milia Islamia",
      "Coordinates": "28.562594663386616, 77.28171859057765",
      "ph": 7.3,
      "Temp": 20,
      "Turbidity": 7,
      "DO": 700
     },
     {
      "id": 4,
      "Address": "IIT Bombay",
      "Coordinates": "19.13399718706666, 72.91492909424146",
      "ph": 7.7,
      "Temp": 19,
      "Turbidity": 5,
      "DO": 760
     },
     {
      "id": 5,
      "Address": "NIT Rourkela",
      "Coordinates": "22.25357708889654, 84.90229553212826",
      "ph": 8.0,
      "Temp": 18,
      "Turbidity": 4,
      "DO": 815
     },
     {
      "id": 6,
      "Address": "AFMC",
      "Coordinates": "18.503202895649714, 73.88965440607731",
      "ph": 7.6,
      "Temp": 24,
      "Turbidity": 4,
      "DO": 763
     }
  ]

  const columns = [
    { 
      field: "id", 
    headerName: "ID",
    width: 90
  },
    { field: "Address", headerName: "Address", width: 300},
    {
      field: "ph",
      headerName: "pH",
      width: 150
    },
    {
      field: "Temp",
      headerName: "Temperature(cel)",
      width: 150
    },
    {
      field: "Turbidity",
      headerName: "Turbidity (NTU)",
      width: 150
    },
    {
      field: "DO",
      headerName: "DO (ppm)",
      width: 150
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Daily Water Quality Data"
        subtitle="Daily Water Quality Data"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default WaterDailyAverage;
