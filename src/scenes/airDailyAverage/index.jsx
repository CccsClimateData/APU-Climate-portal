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
    //   { 
    //     field: "id", 
    //   headerName: "ID",
    //   width: 90
    // },
    {
      field: "createdAt",
      headerName: "Date Time",
      width: 200
    },
    { 
      field: "Location", 
      headerName: "Address", 
      width: 350 
    },
    {
      field: "NOX",
      headerName: "NOX",
      width: 100
    },
    {
      field: "CO2",
      headerName: "CO2",
      width: 100
    },
    {
      field: "CO",
      headerName: "CO",
      width: 100
    },
    {
      field: "Toluene",
      headerName: "Toluene",
      width: 100
    },
    {
      field: "O3",
      headerName: "O3",
      width: 100
    },
    {
      field: "NH4",
      headerName: "NH4",
      width: 100
    },
    {
      field: "Aceton",
      headerName: "Aceton",
      width: 100
    },
    {
      field: "LPG",
      headerName: "LPG",
      width: 100
    },
    {
      field: "CH4",
      headerName: "CH4",
      width: 100
    },
    {
      field: "Cl2",
      headerName: "Cl2",
      width: 100
    },
    {
      field: "PM2_5",
      headerName: "PM2_5",
      width: 100
    },
    {
      field: "PM10",
      headerName: "PM10",
      width: 100
    },
    // {
    //   field: "ph",
    //   headerName: "ph",
    //   width: 100
    // },
    {
      field: "Temperature",
      headerName: "Temperature",
      width: 100
    },
    {
      field: "Pressure",
      headerName: "Pressure",
      width: 100
    },
    // {
    //   field: "Altitide",
    //   headerName: "Altitide",
    //   width: 100
    // },

    {
      field: "Humidity",
      headerName: "Humidity",
      width: 100
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },
  ];

  const [rows, setRows] = useState()


  useEffect(() => {
    const getSensorData = async () => {
      const res = await axios.get(`${host}/sensorData/`)

      // res.data.students.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

      res.data.students.map(student => {
        student.createdAt = new Date(student.createdAt).toGMTString()
      })
      setRows(res.data.students.reverse())
    }
    getSensorData()

  }, [])


  return (
    <Box m="20px">
      <Header
        title="Air Sensor Data"
        subtitle="Air Sensor Data"
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
        {rows && (<DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />)
        }
      </Box>
    </Box>
  );
};

export default AirDailyAverage;
