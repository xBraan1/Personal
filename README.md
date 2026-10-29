# xBraan1 Portfolio

Brian Kibet — AI Trainer & LLM Evaluation Specialist

## 🚀 Deployment Instructions

This project is configured for **Cloudflare Workers** deployment with static assets.

### Prerequisites

1. You must have a GitHub repository (e.g., `xBraan1/Personal`)
2. The repository must be connected to Cloudflare Workers Builds

### Step 1: Upload Files to GitHub

**All files in this project must be uploaded to your GitHub repository.**

#### Method 1: Download and Upload via GitHub Web Interface

1. **Download this project** as a ZIP file
2. **Go to your GitHub repository**: https://github.com/xBraan1/Personal
3. **Click** "Add file" → "Upload files"
4. **Extract** the downloaded ZIP
5. **Drag ALL files** into the upload area:
   - ✅ `package.json`
   - ✅ `package-lock.json`
   - ✅ `tsconfig.json`
   - ✅ `tsconfig.node.json`
   - ✅ `vite.config.ts`
   - ✅ `wrangler.toml`
   - ✅ `tailwind.config.js`
   - ✅ `postcss.config.js`
   - ✅ `index.html`
   - ✅ `.gitignore`
   - ✅ `src/` folder (entire folder with all contents)
   - ❌ **DO NOT upload**: `node_modules/` or `dist/` folders
6. **Click** "Commit changes"
7. **Wait** 2-3 minutes for Cloudflare to build and deploy

#### Method 2: Using Git CLI

```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: xBraan1 portfolio"

# Add remote repository
git remote add origin https://github.com/xBraan1/Personal.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Verify Cloudflare Build Settings

Go to your Cloudflare Dashboard → Workers & Pages → Your Worker → Settings → Builds

**Verify these settings:**

| Setting | Value |
|---------|-------|
| **Git repository** | `xBraan1/Personal` |
| **Production branch** | `main` |
| **Build command** | `npm install && npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Root directory** | `/` (or leave empty) |

### Step 3: Trigger Deployment

After uploading files to GitHub:

1. Cloudflare will automatically detect the push
2. It will run `npm install && npm run build`
3. Build will succeed (creates `dist/` folder)
4. It will run `npx wrangler deploy`
5. Your site goes live!

## 📦 Project Structure

```
├── package.json              # Dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript config for Vite
├── vite.config.ts            # Vite build configuration
├── wrangler.toml             # Cloudflare Workers configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── index.html                # Entry HTML file
├── .gitignore                # Git ignore rules
└── src/
    ├── main.tsx              # React entry point
    ├── App.tsx               # Main app with routing
    ├── index.css             # Global styles
    ├── components/
    │   └── Layout.tsx        # Navigation and footer
    └── pages/
        ├── Home.tsx          # Homepage
        ├── About.tsx         # About page
        ├── Expertise.tsx     # Expertise page
        ├── Services.tsx      # Services page
        ├── Experience.tsx    # Experience page
        ├── Work.tsx          # Work/Portfolio page
        ├── Skills.tsx        # Skills page
        ├── Insights.tsx      # Insights/Blog page
        ├── FAQ.tsx           # FAQ page
        ├── Contact.tsx       # Contact page
        ├── Privacy.tsx       # Privacy policy
        ├── Terms.tsx         # Terms of service
        └── NotFound.tsx      # 404 page
```

## 🔧 Configuration Files

### wrangler.toml

```toml
name = "personal"
compatibility_date = "2024-12-01"

[assets]
directory = "./dist"
```

This tells Cloudflare Workers to serve static files from the `dist/` directory.

### package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## ✅ Build Verification

The build has been verified locally:

```
✓ TypeScript compilation: PASSED
✓ Vite build: PASSED (5.29s)
✓ Output: dist/ directory created
✓ Files: 3 total (HTML, CSS, JS)
✓ Size: ~62 KB gzipped
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with signature branding
- ✅ Alex Brush cursive font for "xBraan1"
- ✅ 13 pages with routing
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast loading (~62 KB gzipped)

## 🐛 Troubleshooting

### Build fails with "package.json not found"
**Solution:** Make sure all files are uploaded to GitHub. The repository is currently empty.

### Build succeeds but site shows blank page
**Solution:** Check that `wrangler.toml` has `directory = "./dist"`

### Routes return 404
**Solution:** This is a single-page app. All routes are handled by React Router.

## 📞 Support

If deployment fails:
1. Check Cloudflare build logs
2. Verify all files are on GitHub
3. Check build and deploy commands are correct
4. Verify `wrangler.toml` configuration

---

**Status:** ✅ Ready to deploy
**Build:** ✅ Verified and working
**Next Step:** Upload files to GitHub repository
