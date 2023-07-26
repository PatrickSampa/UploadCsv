import express from "express";
import { router } from "./router";
import dotenv from 'dotenv';
import cors from "cors";

const app = express();

app.use(cors())




app.use(router)


//Defined in .env
dotenv.config();
const PORT = process.env.PORT_API;

app.listen(PORT, () => console.log(`Running in port ${PORT}`))