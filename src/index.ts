
import express, { json } from "express";
import usersRouter from "./routes/users";
import notFound from "./middleware/not-found";
import connect from "./db/connection";
import connectAtlas from "./db/connection-atlas";
import configDevEnv from "../config";
import errorHandler from "./middleware/error-handler";
import morgan from "morgan";
import { cardRouter } from "./routes/cards";
import {createStream} from "rotating-file-stream";
import cors from 'cors';
import path from "path";


configDevEnv();
connectAtlas();
connect();


const app = express();

//middleware chain:
app.use(json());

const accessLogStream = createStream(`${new Date().toJSON().slice(0, 10)}.log`,
  { 
    path: path.join(__dirname,'../', 'public','logs'),
  })

morgan.token('date', (req, res) => new Date().toTimeString());
morgan.token('msg', (req, res) => res.statusMessage);

app.use(morgan(':date :method :url :status :msg',
  {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400
  }));


app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5172"] }));
//http://localhost:8080/api/v1/users
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/cards", cardRouter);
app.use(express.static("public"));
app.use(errorHandler);
app.use(notFound);

//start the server:
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
  console.log(`App is running in ${process.env.NODE_ENV} mode`);
});
