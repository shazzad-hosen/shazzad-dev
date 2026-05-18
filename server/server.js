import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.route.js";
import { ENV } from "./utils/env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://shazzad.pro.bd", "http://localhost:5173"],
  }),
);

app.set("trust proxy", 1);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/contact", contactRoutes);

const PORT = ENV.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
