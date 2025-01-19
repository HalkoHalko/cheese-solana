![image](https://github.com/user-attachments/assets/5670bb6c-409a-479d-aea3-955a6b5ad1c2)

# Solana Cheeser

Now you can listen to the cheese events on Solana.
Or any events, or any transaction history, or block data!
Now you can dig deeper into Solana using this below

## Setup

1. **Create an API Key and Webhook:**
   - Visit [Helius Dashboard](https://dashboard.helius.dev/).
   - Create an API key and configure a webhook.

2. **Update `.env` File:**
   - Add the following variables to your `.env` file:
     ```properties
     HELIUS_API_KEY=<your-api-key>
     HELIUS_WEBHOOK_ID=<your-webhook-id>
     ```

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/HalkoHalko/cheese-solana.git
   cd cheese-solana
   ```

2. **Install Dependencies**
```
npm install
```

3. **Run the Application**
```
npm start
```

## Routes

- **`/webhook`**: Listens to the events from your configured webhook.
- **`/query-transaction-history`**: Queries the transaction history for a given account.
  - **Arguments**:
    - `account`: The account to query.
    - `before`: (Optional) Signature to start searching backwards from.
    - `until`: (Optional) Signature to search until.
- **`/get-block-data`**: Gets the block data for the given block.
  - **Argument**:
    - `blockNumber`: The block number to query.
- **`/get-first-signature-from-block`**: Returns the first signature from the given block.
  - **Argument**:
    - `blockNumber`: The block number to query.

## Example Usage

### Query Transaction History

```sh
curl -X GET "http://localhost:8080/query-transaction-history?account=<account>&before=<signature>&until=<signature>"
```

### Get Block Data

```sh
curl -X GET "http://localhost:8080/get-block-data?blockNumber=<blockNumber>"
```

### Get First Signature from a Block

```sh
curl -X GET "http://localhost:8080/get-first-signature-from-block?blockNumber=<blockNumber>"
```
## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes, it's a retarded project.

## License

MIT license

