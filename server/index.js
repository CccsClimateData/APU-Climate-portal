const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')

const parameterRoute = require('./routes/parameters')


// -----------------Middle wares ---------------
app.use(express.json())
app.use(cors())
dotenv.config()

// --------------------------ALL ROUTES----------------

app.use('/api/parameter',  parameterRoute)

// -----------------Listing to port ---------------
app.listen(process.env.PORT, () => {
    console.log('The backend server is running successfully!!')
})