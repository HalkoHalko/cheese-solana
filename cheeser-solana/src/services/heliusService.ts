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

    async getParsedTransactionHistory(account: string, limit: number = 10, before?: string, until?: string) {
        try {
            let url = `${this.baseUrl}/addresses/${account}/transactions?api-key=${this.apiKey}&limit=${limit}`;
            if (before) {
                url += `&before=${before}`;
            }
            if (until) {
                url += `&until=${until}`;
            }
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching parsed transaction history:', error);
            throw error;
        }
    }

    async getBlockDetails(blockNumber: number) {
        try {
            const response = await axios.post(`${this.baseUrl}/rpc`, {
                jsonrpc: "2.0",
                id: 1, // Hard-coded ID for simplicity
                method: "getBlock",
                params: [blockNumber, { "transactionDetails": "signatures" }]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': this.apiKey
                }
            });
            return response.data.result;
        } catch (error) {
            console.error('Error fetching block details:', error);
            throw error;
        }
    }
}

export default HeliusService;