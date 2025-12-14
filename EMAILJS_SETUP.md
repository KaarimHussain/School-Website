# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form functionality.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables in your email template:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Child's Name: {{child_name}}
Child's Age: {{child_age}}

Message:
{{message}}
```

4. Note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Configure Your .env File

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** 
- Replace `your_service_id_here`, `your_template_id_here`, and `your_public_key_here` with your actual values
- Do NOT commit your `.env` file to version control (it should be in `.gitignore`)
- The `.env.example` file is provided as a template

## Step 6: Restart Your Development Server

After adding the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Click the "Contact Us" button in the navbar
2. Fill out the contact form
3. Submit the form
4. Check your email inbox for the submission

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure your `.env` file exists and has all three variables set
- **Emails not sending**: Check that your EmailJS service is properly connected and your template variables match
- **CORS errors**: Make sure you're using the correct Public Key from your EmailJS account

## Template Variables Reference

The contact form sends the following variables to EmailJS:
- `from_name`: Parent's name
- `child_name`: Child's name
- `from_email`: Parent's email address
- `phone`: Phone number
- `child_age`: Child's age range (or "Not specified")
- `message`: Message content

Make sure your EmailJS template includes these variables using the `{{variable_name}}` syntax.

