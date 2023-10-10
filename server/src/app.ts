import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fetchAPI } from './helper';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const newYorkTimesAPIKey = process.env.NEWYORK_TIMES_API_KEY;


app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/newyork/top-stories", async (req: Request, res: Response) => {

    const apiData: string = await fetchAPI(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${newYorkTimesAPIKey}`);

    res.json(JSON.parse(apiData));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});