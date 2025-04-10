import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

// Middlewares
import verifyJWT from "./middlewares/verifyJWT.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import spotifyRoutes from "./routes/spotifyRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import setupRoutes from "./routes/setupRoutes.js";
import claudinaryRoutes from "./routes/claudinaryRoutes.js";
import industryRoutes from "./routes/industryRoutes.js";
import personalityTestRoutes from "./routes/personalityTestRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use(
  cors({
    origin: [process.env.VITE_API_BASE_URL, process.env.LIVE_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", spotifyRoutes);
app.use("/api", eventRoutes);
app.use("/api", blogRoutes);
app.use("/api", newsRoutes);
app.use("/api", jobRoutes);
app.use("/api", contentRoutes);
app.use("/api", setupRoutes);
app.use("/api", claudinaryRoutes);
app.use("/api", industryRoutes);
app.use("/api", personalityTestRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", courseRoutes);

export default app;
