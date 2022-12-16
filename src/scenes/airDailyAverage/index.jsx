import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import SensorNetworkDummy from "../../data/SensorNetworkDummy";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const AirDailyAverage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = [
    {
      "id": 1,
      "Address": "Assam Engineering College",
      "Coordinates": "26.14171794440607, 91.66006589922732",
      "Nox": 2.4,
      "CO": 5220,
      "SO2": 12,
      "O3": 25,
      "PM2.5": 111.8,
      "Max Temp": 28.5,
      "Min Temp": 24,
      "Humidity": 50
     },
     {
      "id": 2,
      "Address": "Azim Premji University",
      "Coordinates": "12.84513725199733, 77.7777766930164",
      "Nox": 2,
      "CO": 3400,
      "SO2": 8,
      "O3": 12,
      "PM2.5": 50,
      "Max Temp": 26.5,
      "Min Temp": 22,
      "Humidity": 20
     },
     {
      "id": 3,
      "Address": "Jamia Milia Islamia",
      "Coordinates": "28.562594663386616, 77.28171859057765",
      "Nox": 158,
      "CO": 6100,
      "SO2": 23,
      "O3": 7.2,
      "PM2.5": 200,
      "Max Temp": 29,
      "Min Temp": 23,
      "Humidity": 30
     },
     {
      "id": 4,
      "Address": "IIT Bombay",
      "Coordinates": "19.13399718706666, 72.91492909424146",
      "Nox": 32.8,
      "CO": 1520,
      "SO2": 20,
      "O3": 18,
      "PM2.5": 39.9,
      "Max Temp": 28,
      "Min Temp": 26,
      "Humidity": 40
     },
     {
      "id": 5,
      "Address": "NIT Rourkela",
      "Coordinates": "22.25357708889654, 84.90229553212826",
      "Nox": 25.3,
      "CO": 530,
      "SO2": 20.7,
      "O3": 12.4,
      "PM2.5": 15.4,
      "Max Temp": 28,
      "Min Temp": 23,
      "Humidity": 15
     },
     {
      "id": 6,
      "Address": "AFMC",
      "Coordinates": "18.503202895649714, 73.88965440607731",
      "Nox": 38.6,
      "CO": 1200,
      "SO2": 15.6,
      "O3": 6.4,
      "PM2.5": 79.8,
      "Max Temp": 29,
      "Min Temp": 25,
      "Humidity": 10
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
      field: "Nox",
      headerName: "Nox",
      width: 150
    },
    {
      field: "CO",
      headerName: "CO",
      width: 150
    },
    {
      field: "SO2",
      headerName: "SO2",
      width: 150
    },
    {
      field: "O3",
      headerName: "O3",
      width: 150
    },
    {
      field: "O3",
      headerName: "O3",
      width: 150
    },
    {
      field: "PM2.5",
      headerName: "PM2.5",
      width: 150
    },
    {
      field: "Max Temp",
      headerName: "Max Temp",
      width: 150
    },
    {
      field: "Min Temp",
      headerName: "Min Temp",
      width: 150
    },
    {
      field: "Humidity",
      headerName: "Humidity",
      width: 150
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Daily Air Quality Data"
        subtitle="Daily Air Quality Data"
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

export default AirDailyAverage;
