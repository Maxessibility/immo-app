import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import propertiesRouter from "./routes/properties";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use("/uploads", express.static(uploadDir));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/properties", propertiesRouter);

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
