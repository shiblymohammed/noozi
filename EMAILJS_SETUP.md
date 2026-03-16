# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Make sure to use these variable names in your template:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email  
   - `{{subject}}` - email subject
   - `{{message}}` - email message

5. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General" in your dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
};
```

## Step 6: Test the Form
1. Run your development server
2. Open the contact modal
3. Fill out and submit the form
4. Check your email to confirm it works

## Troubleshooting
- Make sure all IDs are correct
- Check that your email service is properly configured
- Verify your template variables match the form field names
- Check the browser console for any error messages

## Security Note
The public key is safe to expose in client-side code. EmailJS is designed to work this way and includes built-in rate limiting and spam protection.