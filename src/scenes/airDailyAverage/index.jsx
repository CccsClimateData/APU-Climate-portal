import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import SensorNetworkDummy from "../../data/SensorNetworkDummy";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const AirDailyAverage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const host = 'http://spritan.pythonanywhere.com/api'


  const columns = [
    { 
      field: "id", 
    headerName: "ID",
    width: 90
  },
  {
    field: "createdAt",
    headerName: "Date Time",
    width: 150
  },
    { field: "Location", headerName: "Address", width: 300},
    {
      field: "NOX",
      headerName: "NOX",
      width: 150
    },
    {
      field: "CO2",
      headerName: "CO2",
      width: 150
    },
    {
      field: "CO",
      headerName: "CO",
      width: 150
    },
    {
      field: "Toluene",
      headerName: "Toluene",
      width: 150
    },
    {
      field: "O3",
      headerName: "O3",
      width: 150
    },
    {
      field: "NH4",
      headerName: "NH4",
      width: 150
    },
    {
      field: "Aceton",
      headerName: "Aceton",
      width: 150
    },
    {
      field: "LPG",
      headerName: "LPG",
      width: 150
    },
    {
      field: "CH4",
      headerName: "CH4",
      width: 150
    },
    {
      field: "Cl2",
      headerName: "Cl2",
      width: 150
    },
    {
      field: "PM2_5",
      headerName: "PM2_5",
      width: 150
    },
    {
      field: "PM10",
      headerName: "PM10",
      width: 150
    },
    {
      field: "ph",
      headerName: "ph",
      width: 150
    },
    {
      field: "Temperature",
      headerName: "Temperature",
      width: 150
    },
    {
      field: "Pressure",
      headerName: "Pressure",
      width: 150
    },
    {
      field: "Altitide",
      headerName: "Altitide",
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

  const [rows, setRows] = useState()


  useEffect(() => {
      const getSensorData = async () => {
          const res = await axios.get(`${host}/sensorData/`)

          res.data.students.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          
          res.data.students.map(student => {
            student.createdAt = new Date(student.createdAt).toGMTString()
          })
          setRows(res.data.students)
      }
      getSensorData()

  }, [])

  

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
        {rows &&(  <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        /> )
        }
      </Box>
    </Box>
  );
};

export default AirDailyAverage;
