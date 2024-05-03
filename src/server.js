import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import connectDB from './config/connectDB';
import initWebRoutes from "./route/APIRoute";


require('dotenv').config();  


let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);

initWebRoutes(app);
connectDB();

let port = process.env.PORT || 8001;  //Port === undefined => Port = 6060

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
})
