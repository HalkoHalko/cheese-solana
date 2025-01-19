![image](https://github.com/user-attachments/assets/5670bb6c-409a-479d-aea3-955a6b5ad1c2)


## Solana Cheeser

Now you can listen to the cheese events on Solana

## Setup 

https://dashboard.helius.dev/

create an api key + webhook

update .env file with the variables

HELIUS_API_KEY=

HELIUS_WEBHOOK_ID=

## Routes

'/webhook' - listens to the events from your configured wbehook
'/query-transaction-history', - queries the tx history for a given account. Arguments are: account, before and until. Note that before and until are signatures.  
'/get-block-data' - gets the block data for the given block. Argument = blockNumber
'/get-first-signature-from-block' - returns the first signature from the given block

examples:
https://XYZ/query-transaction-history?account=ABCD <- will query the history of a Solana address ABCD

https://XYZ/query-transaction-history?account=ABCD&before=EFGH <- will query the history of a Solana address ABCD from before the signature EFGH

https://XYZ/get-block-data?blockNumber=12345 <- will query the data of the block 12345

https://XYZ//get-first-signature-from-block??blockNumber=12345 <- will only show the first signature for the block 12345


## One click deployment on Railway

Yes you can do that -> deploy the repo on Railway

Update HELIUS_API_KEY= and HELIUS_WEBHOOK_ID= in Railway as variables

Go to Settings -> Networking -> Public Networking -> get the public addy -> go to Helius Dashboard -> Update your Webhook with the generated URL


## Usage

To start the server, run:
```
npm start
```

The server will listen for incoming webhook requests 
