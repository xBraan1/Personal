#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Deploy to Cloudflare Workers
echo "Deploying to Cloudflare Workers..."
npx wrangler deploy

echo "Deployment complete!"
