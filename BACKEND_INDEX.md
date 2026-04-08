# Complete Backend index.js Code

Here is the complete `index.js` file for your Express.js backend server:

```javascript
// ==========================================
// Global Crescent Recruitment - Backend API
// ==========================================

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE
// ==========================================

// Parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS with configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ==========================================
// CONFIGURATION
// ==========================================

// Configure Email Transporter (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Test email transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email service is ready');
  }
});

// ==========================================
// VALIDATION FUNCTIONS
// ==========================================

// Validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number format
const validatePhone = (phone) => {
  const phoneRegex = /^[\\d\\s\\-\\+\\(\\)]+$/;
  return phoneRegex.test(phone) && phone.length >= 7;
};

// ==========================================
// ROUTES
// ==========================================

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Extract form data
    const { inquiryType, fullName, email, phone, company, subject, message } = req.body;

    // ==========================================
    // VALIDATION
    // ==========================================

    // Check all required fields
    if (!inquiryType || !fullName || !email || !phone || !subject || !message) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Validate phone format
    if (!validatePhone(phone)) {
      return res.status(400).json({
        error: 'Invalid phone format'
      });
    }

    // Company is required for employers and agencies
    if ((inquiryType === 'Employer' || inquiryType === 'Agency') && !company) {
      return res.status(400).json({
        error: 'Company is required for your inquiry type'
      });
    }

    // Validate inquiry type
    const validInquiryTypes = ['Worker', 'Employer', 'Agency'];
    if (!validInquiryTypes.includes(inquiryType)) {
      return res.status(400).json({
        error: 'Invalid inquiry type'
      });
    }

    // ==========================================
    // EMAIL TEMPLATES
    // ==========================================

    // Email to company
    const companyEmailHTML = `
      <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D60000; border-bottom: 3px solid #D60000; padding-bottom: 10px;">
            New Contact Form Submission - \${inquiryType}
          </h2>
          
          <div style="background-color: #f0f0f0; padding: 12px; border-left: 4px solid #D60000; margin: 15px 0;">
            <p style="margin: 0; color: #D60000; font-weight: bold;">Inquiry Type: \${inquiryType}</p>
          </div>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> \${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> \${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> \${phone}</p>
            \${company ? \`<p style="margin: 10px 0;"><strong>Company:</strong> \${company}</p>\` : ''}
            <p style="margin: 10px 0;"><strong>Subject:</strong> \${subject}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; color: #666;"><strong>Message:</strong></p>
            <p style="margin: 0; color: #333; white-space: pre-wrap; line-height: 1.6;">\${message}</p>
          </div>

          <div style="background: linear-gradient(135deg, #D60000 0%, #b30000 100%); color: white; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <p style="margin: 0;"><strong>Submitted at:</strong> \${new Date().toLocaleString()}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

          <p style="color: #999; font-size: 12px; margin: 0;">
            This is an automated message from Global Crescent Recruitment website. Please do not reply to this email.
          </p>
        </div>
      </div>
    `;

    // Confirmation email to user
    const userEmailHTML = `
      <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #D60000; margin: 0;">Global Crescent Recruitment</h2>
            <p style="color: #666; margin: 5px 0 0 0;">Contact Confirmation</p>
          </div>

          <p style="color: #333; font-size: 16px;">Dear \${fullName},</p>

          <p style="color: #666; line-height: 1.6;">
            Thank you for reaching out to Global Crescent Recruitment! We have received your inquiry and appreciate your interest in our services.
          </p>

          <div style="background-color: #f0f0f0; padding: 15px; border-left: 4px solid #D60000; margin: 20px 0; border-radius: 3px;">
            <p style="margin: 5px 0;"><strong>Inquiry Type:</strong> \${inquiryType}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> \${subject}</p>
            <p style="margin: 5px 0;"><strong>Received at:</strong> \${new Date().toLocaleString()}</p>
          </div>

          <p style="color: #666; line-height: 1.6;">
            Our team will review your message carefully and get back to you within 24-48 hours. If your inquiry is urgent, please feel free to contact us directly at:
          </p>

          <div style="background: linear-gradient(135deg, #D60000 0%, #b30000 100%); color: white; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> Info@gcrecruitmentltd.com</p>
            <p style="margin: 10px 0;"><strong>📱 Phone:</strong> +44 7493 478440 | +387 62 012 295</p>
          </div>

          <p style="color: #666; line-height: 1.6;">
            We look forward to working with you!
          </p>

          <p style="margin-top: 30px; color: #666;">
            Best regards,<br>
            <strong>Global Crescent Recruitment Team</strong>
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

          <p style="color: #999; font-size: 12px; margin: 0; text-align: center;">
            © 2024-2026 Global Crescent Recruitment. All Rights Reserved.
          </p>
        </div>
      </div>
    `;

    // ==========================================
    // SEND EMAILS
    // ==========================================

    // Send email to company
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to company email
      subject: \`New Contact Form Submission - \${inquiryType} - \${subject}\`,
      html: companyEmailHTML,
      replyTo: email,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We Received Your Message - Global Crescent Recruitment',
      html: userEmailHTML,
    });

    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================

    console.log(✅ New contact submission from \${fullName} (\${inquiryType}));

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);

    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// ==========================================
// ERROR HANDLING & 404
// ==========================================

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal Server Error'
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log('');
  console.log('╔════════════════════════════════════════════╗');
  console.log('║   Global Crescent Recruitment Backend     ║');
  console.log('╚════════════════════════════════════════════╝');
  console.log('');
  console.log(\`✅ Server running on http://localhost:\${PORT}\`);
  console.log(\`📧 Email Service: Configured for \${process.env.GMAIL_USER}\`);
  console.log(\`🔗 CORS Origin: \${process.env.FRONTEND_URL}\`);
  console.log(\`🔧 Environment: \${process.env.NODE_ENV || 'development'}\`);
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET  /api/health');
  console.log('  POST /api/contact');
  console.log('');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\\n🛑 Server shutting down...');
  process.exit(0);
});
```

## Key Features

1. **Express Server**: Lightweight and efficient HTTP server
2. **CORS Support**: Configured to accept requests from frontend
3. **Email Validation**: Checks email format before sending
4. **Phone Validation**: Validates phone number format
5. **HTML Emails**: Beautiful formatted emails to company and user
6. **Error Handling**: Comprehensive error handling and validation
7. **Environment Variables**: Secure credential management
8. **Health Check**: `/api/health` endpoint to verify server is running

## Installation

Save this file as `index.js` in your backend directory:

```bash
# Create backend directory
mkdir global_crescent_backend
cd global_crescent_backend

# Initialize npm
npm init -y

# Install dependencies
npm install express cors dotenv nodemailer

# Install dev dependency
npm install --save-dev nodemon

# Create the index.js file with the code above
touch index.js
```

## Running the Server

```bash
# Development mode (with auto-reload)
npx nodemon index.js

# Or production mode
node index.js
```

## Environment Setup

Create `.env` file:

```
PORT=5000
NODE_ENV=development
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
FRONTEND_URL=http://localhost:3000
```

## Testing

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "inquiryType": "Worker",
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "company": "",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

---

**Version**: 1.0.0  
**Last Updated**: April 7, 2026
