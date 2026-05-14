import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import rateLimit from "express-rate-limit";
import { ENV } from "./utils/env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [ENV.CLIENT_URL];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      const normalizedOrigin = origin.replace(/\/$/, "");
      const isAllowed = allowedOrigins.some(
        (url) => url.replace(/\/$/, "") === normalizedOrigin,
      );

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`CORS Error: Origin ${origin} not allowed`));
      }
    },
    credentials: true,
  }),
);

app.set("trust proxy", 1);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 4,
  message: {
    message: "Too many requests. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/contact", contactLimiter, contactRoutes);

const PORT = ENV.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
