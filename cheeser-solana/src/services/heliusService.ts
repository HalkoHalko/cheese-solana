import axios from 'axios';

class HeliusService {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.helius.xyz/v0';
    }

    async getWebhookDetails(webhookId: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/webhooks/${webhookId}?api-key=${this.apiKey}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching webhook details:', error);
            throw error;
        }
    }
}

export default HeliusService;