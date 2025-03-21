---
sidebar_position: 5
draft: true
---

# Activating Google Analytics for your Docusaurus site

## Step 1: Create a Google Analytics Tag

1. **Sign up or Log in to Google Analytics**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Sign in with your Google account

2. **Create a New Property**
   - Click on the **Admin** gear icon in the bottom left.
   - In the **Property** column, click **Create Property**.
     -> The **Create a property** wizard opens.
   - Enter your website name, select reporting time zone, currency, and click **Next**.
   - Select your industry and business size. Click **Next**.
   - Choose your business objectives. Click **Create**.

3. **Set Up a Data Stream**
   - After creating your property, you'll be prompted to set up a data stream.
   - Select **Web** as the platform.
   - Enter your website URL and a stream name (usually your website name).
   - Click **Create and continue**.

4. **Get Your Measurement ID**
   - Once created, you'll see your Measurement ID (starts with "G-").
   - Write this down as you'll need it for Docusaurus configuration.

## Step 2: Configure Docusaurus

1. Install the **plugin-google-gtag** plugin.

    ```bash
    npm install --save @docusaurus/plugin-google-gtag
    ```

2. **Open Your Docusaurus Configuration**
   - Open your `docusaurus.config.js` file in your project directory

3. **Add Google Analytics Configuration**
   
   For Google Analytics 4 (recommended):
   ```javascript
   module.exports = {
     // other configuration
     presets: [
       [
         '@docusaurus/preset-classic',
         {
           // other preset options
           gtag: {
             trackingID: 'G-XXXXXXX', // Your Measurement ID from step 1
             anonymizeIP: true, // Optional: Anonymize IP addresses
           },
         },
       ],
     ],
   };
   ```

4. **Save the File**

## Step 3: Test and Deploy

1. **Build Your Site**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy Your Site**
   - Deploy to your hosting platform (GitHub Pages, Netlify, Vercel, etc.)
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

3. **Verify Installation**
   - Visit your deployed website
   - Go to Google Analytics → Reports → Realtime
   - You should see your visit appear in real-time analytics

## Step 4: Additional Considerations

1. **Cookie Consent**
   - If serving users in regions with privacy regulations (like GDPR), consider adding a cookie consent banner
   - You can use libraries like `react-cookie-consent` or `cookiebot`

2. **Exclude Development Traffic**
   - Google Analytics doesn't track localhost by default
   - For custom domains in development, consider using browser extensions to block analytics during testing

3. **Custom Events**
   - For tracking specific interactions, you can use the gtag API:
   ```javascript
   window.gtag('event', 'button_click', {
     'event_category': 'engagement',
     'event_label': 'signup',
   });
   ```

4. **Environment-Specific Configuration**
   - Consider using different tracking IDs for production vs. staging environments

That's it! Your Docusaurus site should now be sending analytics data to Google Analytics.