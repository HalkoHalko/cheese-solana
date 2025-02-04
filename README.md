![image](https://github.com/user-attachments/assets/5670bb6c-409a-479d-aea3-955a6b5ad1c2)

# Solana Cheeser

Now you can listen to the cheese events on Solana and see them visualized in a beautiful 3D environment.
Watch liquidity pools come alive as fondue pots in a cozy Buffalo winter setting!

## Features

### 3D Visualization
- Real-time visualization of Solana liquidity pools as fondue pots
- Dynamic transaction effects with particle systems and token logos
- Cozy Buffalo winter atmosphere with falling snow and warm lighting
- Interactive display showing recent transactions and TVL

### Transaction Visualization
- Live transaction animations with token pair logos
- Green particles for liquidity additions
- Red particles for liquidity removals
- Dynamic pot sizing based on TVL (Total Value Locked)
- Transaction history display in top-right corner

### Environment
- Rustic wooden table with red tablecloth
- Buffalo-style appetizers (wings, celery, carrots)
- Realistic snow effects and atmospheric fog
- Warm indoor lighting contrasting with cool winter atmosphere

### Technical Features
- Real-time data updates from Solana blockchain
- Fallback to simulated data when offline
- Responsive design that adapts to window size
- High-performance rendering with Three.js
- Post-processing effects for enhanced visuals

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

3. **Installation:**
   ```sh
   git clone https://github.com/HalkoHalko/cheese-solana.git
   cd cheese-solana
   npm install
   ```

4. **Run the Application:**
   ```sh
   npm start
   ```
   Then open `cheese.html` in your browser to see the visualization.

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

## Visualization Controls
- The scene automatically rotates to show all pools
- Camera smoothly orbits the scene
- Transaction effects are visible for a few seconds
- Pot sizes update in real-time with liquidity changes

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

MIT license

