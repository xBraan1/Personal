# xBraan1 Portfolio

Brian Kibet — AI Trainer & LLM Evaluation Specialist

## Deployment

This project is configured for Cloudflare Workers deployment.

### Build Command
```bash
npm run build
```

### Deploy Command
```bash
npx wrangler deploy
```

### Configuration
- **Framework:** Vite + React + TypeScript
- **Output:** `dist/` folder
- **Worker:** `xbraan1-portfolio`

## Cloudflare Setup

In Cloudflare Workers & Pages → Build settings:
- **Branch:** `main`
- **Build command:** `npm install && npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** (leave empty)
