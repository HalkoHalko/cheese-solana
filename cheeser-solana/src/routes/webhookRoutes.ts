import { Application } from 'express';
import WebhookController from '../controllers/webhookController';

const webhookController = new WebhookController();

export function setWebhookRoutes(app: Application) {
    app.post('/webhook', webhookController.handleWebhook.bind(webhookController));
    app.get('/query-transaction-history', webhookController.queryTransactionHistory.bind(webhookController));
}