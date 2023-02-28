import { Box, useTheme } from "@mui/material";
import { React, useEffect, useState } from 'react';
// import { tokens } from "../../../theme";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./maps.css"
// import covidData from '../../../data/data.json'
import icon1 from '../../../images/covid19.svg'
import { Icon } from 'leaflet'
import axios from "axios";

const covidIcon = new Icon({
    iconUrl: icon1,
    iconSize: [25, 25]
})

const AirMaps = () => {
    

    const host = 'http://spritan.pythonanywhere.com/api'

    const [covidData, setCovidData] = useState([
        
    ])

    useEffect(() => {
        const getSensorData = async () => {
            const res = await axios.get(`${host}/sensorData/`)
            setCovidData(res.data.students.reverse())
            
        }
        getSensorData()
    }, [])

    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const [activeCovid, setActiveCovid] = useState(null);

    return (
        <Box m="20px">
            <MapContainer center={[20.593683, 78.962883]} zoom={5} scrollWheelZoom={true}>

                {theme.palette.mode === "dark" ? (
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
                                 &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> 
                                 &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                    />
                ) : (
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                )}
                { covidData && covidData.map(eachData => (
                    <Marker
                        key={eachData._id}
                        position={[eachData.Latitude, eachData.Longitude]}
                        eventHandlers={{
                            click: () => {
                                setActiveCovid(eachData)
                            }
                        }}
                        icon={covidIcon}
                    />
                ))}

                {activeCovid && (
                    <Popup
                        position={[activeCovid.Latitude, activeCovid.Longitude]}
                        onClose={() => {
                            setActiveCovid(null)
                        }}
                    >
                        <div>
                            <h1>{activeCovid.Location}</h1>
                            <p>NOX:                {activeCovid.NOX}</p>
                            <p>PPM 2.5:         {activeCovid.PM2_5}</p>
                            <p>CO:              {activeCovid.CO}</p>
                            <p>Temp:                     {activeCovid.Temp}</p>
                            <button>More Deatails</button>
                            {/* <Button>More Deatails</Button> */}
                        </div>
                    </Popup>
                )}
                {/* 
                <Marker position={[20.593683, 78.962883]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </Box>
    );
};

export default AirMaps;
