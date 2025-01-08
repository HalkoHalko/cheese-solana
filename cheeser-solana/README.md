# Solana Cheeser

Now you can listen to the cheese events on Solana

# Setup 

https://dashboard.helius.dev/

create an api key + webhook

update .env file with the variables

HELIUS_API_KEY=

HELIUS_WEBHOOK_ID=


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