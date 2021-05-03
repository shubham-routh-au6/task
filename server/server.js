import express from "express";
import cors from "cors";
import userRoute from './routes/userRoute.js';

import "./db.js";

const app = express();



var whitelist = ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"];

var corsOptions = {
  credentials: true, //to allow cookes from front-end
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoute);


app.listen(PORT, () => console.log(`Server is up at port ${PORT}`));