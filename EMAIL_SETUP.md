# Contact Form Email Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm packages already installed: nodemailer, sweetalert2

## Gmail Configuration Steps

### 1. Enable 2-Factor Authentication on Gmail
1. Go to https://myaccount.google.com/
2. Select "Security" in the left menu
3. Scroll down to "How you sign in to Google"
4. Enable "2-Step Verification"
5. Complete the verification process

### 2. Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device type)
3. Click "Generate"
4. Google will display a 16-character password
5. Copy this password (you'll need it for .env.local)

### 3. Configure .env.local
Open the `.env.local` file in your project root and update:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_EMAIL_TO=Info@gcrecruitmentltd.com
SUPPORT_EMAIL_TO=Support@gcrecruitmentltd.com
NEXT_PUBLIC_SITE_NAME=Global Crescent Recruitment
```

Replace:
- `your-email@gmail.com` with your actual Gmail address
- `xxxx xxxx xxxx xxxx` with the 16-character app password (keep the spaces)

### 4. Test Your Setup
1. Start the development server: `npm run dev`
2. Navigate to the Contact Us page
3. Fill out the form and submit
4. You should receive:
   - A confirmation email to the contact form submitter
   - A notification email to your info@gcrecruitmentltd.com address

## Features Implemented

✅ **Contact Form API Route** - Handles form submissions at `/api/contact`
✅ **Email Notifications** - Sends emails to both company and customer
✅ **Beautiful HTML Emails** - Professional email templates with company branding
✅ **SweetAlert2 Integration** - User-friendly success/error notifications
✅ **Form Validation** - Server-side validation of all fields
✅ **Loading States** - Visual feedback while email is being sent
✅ **Error Handling** - Graceful error messages if something goes wrong

## Troubleshooting

### Email not sending?
1. Verify your Gmail password in .env.local is correct (exactly as shown by Google)
2. Make sure 2-Factor Authentication is enabled
3. Check that the app password is 16 characters (you can copy it with or without spaces)
4. Ensure your Gmail account allows "Less secure app access" if you're not using an app password

### Port already in use?
If port 3000 is already in use:
```bash
# Kill the process using port 3000 (Windows)
taskkill /PID [PID_NUMBER] /F

# Or run on a different port
npm run dev -- -p 3001
```

## Email Templates

The system sends two emails:
1. **Company Email** - Receives the form submission details
2. **Customer Email** - Receives a confirmation message with company contact info

Both emails include:
- Company branding and colors
- All submitted form data
- Contact information
- Professional formatting

## Security Notes
- Never commit .env.local to version control
- Keep your app password private
- The .env.local file is already added to .gitignore
- Never expose your Gmail password or app password in client-side code
