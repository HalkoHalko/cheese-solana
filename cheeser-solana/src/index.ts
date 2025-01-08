// filepath: /C:/Github/cheese-solana/cheeser-solana/src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import { setWebhookRoutes } from './routes/webhookRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const host = process.env.SERVER_HOST || 'localhost';
const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000;

app.use(bodyParser.json());

setWebhookRoutes(app);

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});