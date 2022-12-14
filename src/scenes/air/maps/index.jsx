import { Box, Typography, useTheme } from "@mui/material";
import {React, useState} from 'react';
import { tokens } from "../../../theme";   
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "./maps.css"
import covidData from '../../../data/data.json'
import icon1 from '../../../images/covid19.svg'
import { Icon } from 'leaflet'

const covidIcon = new Icon({
    iconUrl: icon1,
    iconSize: [25, 25]
})

const Maps = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ activeCovid, setActiveCovid ] = useState( null );

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
                {covidData.map(eachData => (
                    <Marker
                        key={eachData.Id}
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
                            <p>AQI CO2:                {activeCovid.Total_Cases}</p>
                            <p>PPM 2.5:         {activeCovid.New_Cases_Per_Day}</p>
                            <p>Lead: {activeCovid.Cases_Per_1_Million_People}</p>
                            <p>NOX:                     {activeCovid.Deaths}</p>
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

export default Maps;
