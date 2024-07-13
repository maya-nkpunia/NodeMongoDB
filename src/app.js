require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON
app.use(express.json());

//MongoDB Connection
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology,
});

mongoose.connection.on('connected', () => {
    console.log("Connected to mongoDB Atlas");
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});