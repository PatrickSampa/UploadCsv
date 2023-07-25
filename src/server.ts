import express from "express";
import { router } from "./router";
import dotenv from 'dotenv';

const app = express();


app.use(router)


//Defined in .env
dotenv.config();
const PORT = process.env.PORT_API;

app.listen(PORT, () => console.log(`Running in port ${PORT}`))