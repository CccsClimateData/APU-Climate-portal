const mongoose = require("mongoose");

const parameterSchema = new mongoose.Schema({
  location: String,
  Latitude: String,
  Longitude: String,
  Coordinates: String,
  Nox: String,
  Humidity: String,
  CO: String,
  SO2: String,
  PM25: String,
  Max_Temp: String,
  Min_Temp: String,
  ph: String,
  Temp: String,
  Soil_Moisture: String,
  Turbidity: String,
  DO: String,
});

module.exports = mongoose.model("Parameters", parameterSchema);
