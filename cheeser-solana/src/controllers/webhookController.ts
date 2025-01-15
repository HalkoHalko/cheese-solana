import { Request, Response } from 'express';
import WebhookService from '../services/webhookService';
import HeliusService from '../services/heliusService';
import dotenv from 'dotenv';

dotenv.config();

class WebhookController {
    private webhookService: WebhookService;
    private heliusService: HeliusService;
    private heliusWebhookId: string;

    constructor() {
        this.webhookService = new WebhookService();
        this.heliusService = new HeliusService(process.env.HELIUS_API_KEY as string);
        this.heliusWebhookId = process.env.HELIUS_WEBHOOK_ID as string;
    }

    public async handleWebhook(req: Request, res: Response) {
        const webhookData = req.body;
        console.log('Received webhook event:', webhookData);

        try {
            const webhookDetails = await this.heliusService.getWebhookDetails(this.heliusWebhookId);
            console.log('Webhook details:', webhookDetails);
        } catch (error) {
            console.error('Error fetching webhook details:', error);
        }

        try {
            const account = webhookData.account; // Assuming the account is part of the webhook data
            const transactionHistory = await this.heliusService.getParsedTransactionHistory(account);
            console.log('Parsed transaction history:', transactionHistory);
        } catch (error) {
            console.error('Error fetching parsed transaction history:', error);
        }

        this.webhookService.processTransaction(webhookData);
        res.status(200).send('Webhook received');
    }

    public async queryTransactionHistory(req: Request, res: Response) {
        const account = req.query.account as string;
        const before = req.query.before ? parseInt(req.query.before as string) : undefined;
        if (!account) {
            return res.status(400).send('Account parameter is required');
        }

        try {
            const transactionHistory = await this.heliusService.getParsedTransactionHistory(account, 10, before);
            console.log('Parsed transaction history:', transactionHistory);
            res.status(200).json(transactionHistory);
        } catch (error) {
            console.error('Error fetching parsed transaction history:', error);
            res.status(500).send('Error fetching parsed transaction history');
        }
    }
}

export default WebhookController;