import mongoose from 'mongoose';
import dotenv  from "dotenv"
dotenv.config();

mongoose
  .connect(process.env.MongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true,
  })
  .then(function () {
    console.log("Database connected successfully");
  })
  .catch(function (err) {
    console.log(err.message);
  });