import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const mongoUri ="mongodb+srv://rdesilva614:ApvE3OuqWScklals@cluster0.4qgmy1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

app.use(express.json());
app.use(cors());

mongoose
  .connect(mongoUri)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
