import { Box, Button, FormControl, InputLabel, Select, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AirIcon from '@mui/icons-material/Air';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
// import { positionFromAngle } from "@nivo/core";
import axios from 'axios';
// import { $CombinedState } from "@reduxjs/toolkit";
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import "./dashboard.css";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { MenuItem } from "react-pro-sidebar";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`
const API_key = `e1d68253c6c6ec2a13685ec67209c0ff`

const Dashboard = () => {
  const host = 'http://spritan.pythonanywhere.com/api'
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [location, setlocation] = useState({});
  const [donationData, setDonationData] = useState();
  const [params, setParams] = useState("CO");
  const [searchInput, setSearchInput] = useState('27 Feb 2023');
  const [graphData, setGraphData] = useState(null);
  const [max, setMax] = useState(60);
  // const [donationData_date_here, setDonationData_date_here] = useState(['27 Feb 2023'])
  const paramsList = ["CO", "CO2","NOX", "Toluene", "O3", "NH4", "Aceton", "LPG", "CH4", "Cl2", "PM2_5", "PM10", "Temperature", "Pressure"]

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude)
      // console.log(position.coords)
    })
  }, [])

  useEffect(() => {
    const getSensorData = async () => {
      const res = await axios.get(`${host}/sensorData/`)

      let filtered
      let createdAt
      res.data.students.map(student => {
        createdAt = new Date(student.createdAt).toGMTString()
        student.date_here = createdAt.slice(5, 16)
        student.time_here = createdAt.slice(17, 22)


      })
      setDonationData(res.data.students)
      // const dates_here = res.data.students.date_here.map(function (person){
      //   return person
      // })
      // setDonationData_date_here(dates_here)
      const filteredData = res.data.students.filter(employee => {
        return employee.date_here === searchInput;
      });

      setGraphData(filteredData)
      setMax(Number(Math.max(...filteredData.map(o => o[params]))))


    }
    getSensorData()


  }, [])
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    const filteredData = donationData.filter(employee => {
      return employee.date_here === searchValue;
    });

    setGraphData(filteredData)
    setMax(Number(Math.max(...filteredData.map(o => o[params]))))

    // console.log(filteredData)
  }
  const searchParams = ((searchValue) => {
    setParams(searchValue)
  })

  let finalAPI_endpoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`

  useEffect(() => {

    const getLocation = async () => {
      const response = await axios.get(finalAPI_endpoint)
      setlocation(response.data)
    }

    longitude && getLocation()

  }, [latitude, longitude])

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const handleDateUpdate = (e) => {
    const year = new Date(e.target.value).getFullYear()
    let date = new Date(e.target.value).getDate()
    const month = months[new Date(e.target.value).getMonth()]
    if (date < 10) {
      date = '0' + date
    }
    const timestamp = date + " " + month + " " + year
    setSearchInput(timestamp)
    searchItems(timestamp)
  }


  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="APU Sensor Network" subtitle="Welcome to your dashboard" />
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[900],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <EditLocationAltIcon sx={{ mr: "10px" }} />
              {location.name}
            </Button>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="-"
              subtitle="AQI"
              progress="0.75"
              increase="+14%"
              icon={
                <AirIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="-"
              subtitle="Relative Humidity"
              progress="0.50"
              increase="+21%"
              icon={
                <WaterOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="-"
              subtitle="Temperature"
              progress="0.30"
              increase="+5%"
              icon={
                <DeviceThermostatOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="-"
              subtitle="Rainfall Probability"
              progress="0.80"
              increase="+43%"
              icon={
                <ThunderstormOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 8"
            gridRow="span 4"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  AQI at an glance
                </Typography>

              </Box>


            </Box>
            <Box>

              {/* <FormControl  variant="standard">
                <InputLabel id="demo-simple-select-label">Select Parameter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={params}
                  onChange={(e) => searchParams(e.target.value)}
                  label="Parameter"
                  // onChange={handleChange}
                >
                  {donationData_date_here.map((choice) => (
                  <MenuItem key={choice} value={choice}>
                    {choice}
                  </MenuItem>
                ))
              }
                </Select>


              </FormControl>
              <FormControl  variant="standard">

      
                <InputLabel id="demo-simple-select-label">Select date</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={searchInput}
                  
                  label="Date"
                  onChange={(e) => searchItems(e.target.value)}
                >
                  {paramsList.map((choice) => (
                  <MenuItem key={choice} value={choice}>
                    {choice}
                  </MenuItem>
                ))}
                </Select>
              </FormControl> */}
              <div className="date-params">
                <label>select date:
                  <input
                    type="date"
                    onChange={handleDateUpdate}
                
                    value={searchInput}
                    
                  />
                  {/* <label>select date:
                <input
                  type="input"
                  value={searchInput}
                  onChange={(e) => searchItems(e.target.value)}
                /> */}
                </label>
                <label>select parameter:
                  <select name="" id="" onChange={(e) => searchParams(e.target.value)}>
                    {paramsList.map((choice) => (
                      
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))
                    }
                    {/* <option value="CO">CO</option>
                  <option value="CO2">CO2</option>
                  <option value="PM2_5">PM2_5</option> */}
                  </select>
                  {/* <input
                  type="text"
                  value={params}
                  onChange={(e) => searchParams(e.target.value)}
                /> */}
                </label>
              </div>
              <div style={{ paddingTop: "3em" }}>
                {donationData !== null ? (

                  <ResponsiveContainer width="95%" height={500} >

                    <AreaChart
                      width={700}
                      height={1000}
                      data={graphData}
                    >
                      {/* <CartesianGrid strokeDasharray="3 3" /> */}
                      <XAxis dataKey="time_here" />
                      {
                        graphData != null ?
                          (<YAxis domain={[0, Number(Math.max(...graphData.map(o => o[params])))]} />)
                          :
                          (<YAxis domain={[0, 20]} />)
                      }


                      <Tooltip />
                      <Area type="monotone" dataKey={params} stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer>
                  // <LineChart width={500} height={300} data={graphData}>
                  //   <XAxis dataKey="time_here" />
                  //   <YAxis />
                  //   <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  //   <Line type="monotone" dataKey={params} stroke="#8884d8" />
                  // </LineChart>
                ) : (
                  <div className="show">data is null</div>
                )}
              </div>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 4"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Recent Updates
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>

        </Box>

      </Box>

    </>
  )

};

export default Dashboard;
