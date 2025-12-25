# Deployment Guide for Render

This guide will help you deploy your Innovexex website to Render for free.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. A Render account (sign up at [render.com](https://render.com))

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Ready for deployment"

# Add your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Create a Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with your GitHub account (recommended for easier integration)

### 3. Deploy Static Site on Render

#### Option A: Using Render Dashboard (Recommended)

1. **Log in to Render Dashboard**
   - Go to [dashboard.render.com](https://dashboard.render.com)

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"

3. **Connect Repository**
   - Choose "Connect GitHub" (or GitLab if you prefer)
   - Authorize Render to access your repositories
   - Select your repository: `YOUR_USERNAME/YOUR_REPO_NAME`

4. **Configure Build Settings**
   - **Name**: `Innovexex` (or any name you prefer)
   - **Branch**: `main` (or `master` if that's your default branch)
   - **Root Directory**: Leave empty (or `./` if your project is in root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

5. **Environment Variables** (if needed)
   - If you have any environment variables, add them here
   - For now, you can skip this step

6. **Click "Create Static Site"**
   - Render will start building your site
   - This process takes 2-5 minutes

7. **Wait for Deployment**
   - You'll see the build logs in real-time
   - Once complete, your site will be live at: `https://Innovexex.onrender.com` (or your custom name)

#### Option B: Using render.yaml (Alternative)

If you prefer using the `render.yaml` file:

1. Make sure `render.yaml` is in your repository root
2. In Render dashboard, select "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically detect and use the `render.yaml` configuration

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your Static Site settings in Render
2. Click "Custom Domains"
3. Add your domain name
4. Follow Render's DNS configuration instructions

### 5. Automatic Deployments

Render automatically deploys when you push to your main branch:
- Every push to `main` triggers a new deployment
- You can see deployment history in the Render dashboard
- Failed deployments won't affect your live site

## Build Configuration Details

- **Build Command**: `npm install && npm run build`
  - Installs dependencies and builds the production bundle
  
- **Publish Directory**: `dist`
  - This is where Vite outputs the built files
  
- **Node Version**: Render uses Node.js 18+ by default (compatible with your project)

## Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Go to your service in Render dashboard
   - Click on "Logs" tab
   - Look for error messages

2. **Common Issues**:
   - **Missing dependencies**: Make sure all dependencies are in `package.json`
   - **Build errors**: Check your code for syntax errors
   - **Memory issues**: Free tier has memory limits, optimize your build if needed

### Site Not Loading

1. **Check Publish Directory**
   - Ensure it's set to `dist` (not `build` or `public`)

2. **Check Routes**
   - If using React Router, make sure you have a `_redirects` file (see below)

3. **Check Console**
   - Open browser console for any JavaScript errors

### React Router Issues

If you're using React Router, create a `public/_redirects` file:

```
/*    /index.html   200
```

Or add this to your `vite.config.js`:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Add this for SPA routing
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
```

## Free Tier Limitations

- **Build Time**: 750 hours/month (usually enough for small projects)
- **Bandwidth**: 100 GB/month
- **Sleep**: Free static sites don't sleep (always available)
- **Custom Domain**: Free SSL included

## Updating Your Site

Simply push changes to your main branch:
```bash
git add .
git commit -m "Update site"
git push origin main
```

Render will automatically rebuild and deploy!

## Support

- Render Documentation: [render.com/docs](https://render.com/docs)
- Render Community: [community.render.com](https://community.render.com)

