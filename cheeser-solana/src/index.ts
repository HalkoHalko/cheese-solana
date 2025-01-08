import express from 'express';
import bodyParser from 'body-parser';
import { setWebhookRoutes } from './routes/webhookRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const host = '0.0.0.0';
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

app.use(bodyParser.json());

setWebhookRoutes(app);

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});