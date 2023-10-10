import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { fetchAPI } from "./helper";

dotenv.config();

// Enable CORS with custom options
const corsOptions: cors.CorsOptions = {
  origin: "http://example.com", // Allow requests from this origin
  methods: "GET", // Allow these HTTP methods
  optionsSuccessStatus: 204, // Set the preflight response status to 204
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const newYorkTimesAPIKey = process.env.NEWYORK_TIMES_API_KEY;

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get(
  "/api/newyork/top-stories/:type",
  async (req: Request, res: Response) => {
    const { type } = req.params;

    const apiData: string = await fetchAPI(
      `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${newYorkTimesAPIKey}`
    );

    res.json(JSON.parse(apiData));
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
