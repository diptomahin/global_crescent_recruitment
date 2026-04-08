# Backend Setup Guide for Global Crescent Recruitment

This guide provides comprehensive instructions for setting up and running the backend API server for the Global Crescent Recruitment React application.

## Overview

The backend is an Express.js server that handles:
- Contact form submissions
- Email notifications (Gmail SMTP)
- CORS for frontend communication
- Environment variable management

## Prerequisites

- Node.js v16 or higher
- npm or yarn package manager
- Gmail account (for email functionality)
- Basic familiarity with terminal commands

## Installation Steps

### Step 1: Create Backend Project Structure

```bash
# Create a backend directory (at the same level as your React project, or anywhere you prefer)
mkdir global_crescent_backend
cd global_crescent_backend

# Initialize npm project
npm init -y
```

### Step 2: Install Required Packages

```bash
npm install express cors dotenv nodemailer axios
npm install --save-dev nodemon
```

**Package Descriptions:**
- `express`: Web framework for Node.js
- `cors`: Middleware to enable Cross-Origin Resource Sharing
- `dotenv`: Load environment variables from .env file
- `nodemailer`: Send emails via SMTP
- `axios`: HTTP client for API requests
- `nodemon`: Auto-restart server on file changes (dev only)

### Step 3: Create Project Structure

```
global_crescent_backend/
├── index.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── routes/
    └── contact.js
```

### Step 4: Create Environment File

Create `.env` file in the backend root:

```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Frontend Configuration
FRONTEND_URL=http://localhost:3000
```

**Note**: For Gmail, you need to:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character app password in `GMAIL_APP_PASSWORD`

### Step 5: Create .env.example

Create `.env.example` for documentation:

```bash
PORT=5000
NODE_ENV=development
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:3000
```

### Step 6: Update package.json Scripts

Modify your `package.json` scripts:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### Step 7: Create .gitignore

```
node_modules/
.env
.env.local
npm-debug.log
.DS_Store
dist/
build/
*.log
```

## Backend Implementation

### Main Server File (index.js)

See the [index.js code file](BACKEND_INDEX.md) for complete implementation.

### Contact Route (routes/contact.js)

See the [contact.js code file](BACKEND_CONTACT.md) for route implementation.

## Running the Backend

### Development Mode (with auto-reload)

```bash
npm run dev
```

Output should show:
```
Server is running on http://localhost:5000
```

### Production Mode

```bash
npm start
```

## Testing the API

### Using curl

```bash
# Test contact endpoint
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "inquiryType": "Worker",
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "",
    "subject": "Job Inquiry",
    "message": "I am interested in working with your company"
  }'
```

### Using Postman

1. Create a POST request to `http://localhost:5000/api/contact`
2. Set header: `Content-Type: application/json`
3. Use the same JSON body from the curl example
4. Click Send

## Frontend Configuration

### Update Vite Proxy Configuration

In `vite.config.js`, the proxy is already configured:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }
  }
}
```

This automatically forwards `/api/*` requests to the backend.

### Frontend Environment File

Create `.env` in frontend root (if needed):

```
VITE_API_URL=http://localhost:5000/api
```

## Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
brew install heroku  # macOS
# or
choco install heroku  # Windows

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set GMAIL_USER=your-email@gmail.com
heroku config:set GMAIL_APP_PASSWORD=your-app-password
heroku config:set FRONTEND_URL=https://your-frontend-url.com

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Deploy to DigitalOcean App Platform

1. Create a new App on DigitalOcean App Platform
2. Connect your GitHub repository
3. Configure Build Command: `npm install`
4. Configure Run Command: `npm start`
5. Add Environment Variables in App Platform dashboard
6. Deploy

### Deploy to AWS Lambda (Advanced)

For serverless deployment, use frameworks like:
- AWS SAM (Serverless Application Model)
- AWS Lambda with API Gateway

## Troubleshooting

### Issue: "Cannot POST /api/contact"

**Solution**: Ensure the route is defined and the app is running on port 5000.

```bash
# Check if server is running
curl http://localhost:5000/api/health
```

### Issue: "Email not sending"

**Cause**: Incorrect Gmail credentials or App Password

**Solution**:
1. Verify 2-FA is enabled on Gmail account
2. Generate new App Password
3. Update `.env` file
4. Restart server

### Issue: "CORS error"

**Cause**: Frontend and backend URLs don't match CORS configuration

**Solution**: Update `FRONTEND_URL` in `.env` to match where frontend is running:

```env
FRONTEND_URL=http://localhost:3000
```

### Issue: "Port 5000 already in use"

**Solution**: 
```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process (use PID from above)
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or use different port
PORT=5001 npm run dev
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development/production |
| `GMAIL_USER` | Gmail email address | user@gmail.com |
| `GMAIL_APP_PASSWORD` | 16-char Gmail app password | xxxx xxxx xxxx xxxx |
| `FRONTEND_URL` | Frontend application URL | http://localhost:3000 |

## API Endpoints

### POST /api/contact

Send a contact form submission.

**Request Body**:
```json
{
  "inquiryType": "Worker|Employer|Agency",
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "company": "string (required for Employer/Agency)",
  "subject": "string",
  "message": "string"
}
```

**Response - Success (200)**:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response - Error (400/500)**:
```json
{
  "error": "Error message describing what went wrong"
}
```

## Health Check Endpoint

### GET /api/health

Check if the server is running.

**Response**:
```json
{
  "status": "ok"
}
```

## Performance Tips

1. **Implement Rate Limiting**: Use `express-rate-limit` to prevent abuse
2. **Add Validation**: Validate all inputs server-side
3. **Implement Caching**: Cache frequently accessed data
4. **Monitor Logs**: Use `winston` or similar for logging
5. **Use SSL/TLS**: Always use HTTPS in production

## Security Recommendations

1. ✅ Use environment variables for secrets (don't commit `.env`)
2. ✅ Validate all input data
3. ✅ Sanitize email addresses
4. ✅ Implement rate limiting
5. ✅ Use HTTPS in production
6. ✅ Set secure CORS policies
7. ✅ Keep dependencies updated

## Next Steps

1. Install dependencies: `npm install`
2. Create `.env` file with your credentials
3. Run development server: `npm run dev`
4. Test with provided curl command
5. Connect frontend by ensuring proxy is configured
6. Deploy when ready

## Support & Further Reading

- Express.js Docs: https://expressjs.com/
- Nodemailer Docs: https://nodemailer.com/
- CORS Docs: https://enable-cors.org/
- Node.js Best Practices: https://nodejs.org/en/docs/guides/nodejs-web-app-security/

---

**Last Updated**: April 7, 2026  
**Backend Version**: 1.0.0  
**Project**: Global Crescent Recruitment
