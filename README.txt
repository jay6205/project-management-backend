# Project Management Platform Backend API

## Overview
A comprehensive RESTful API backend service built with Node.js, Express.js, and MongoDB for a collaborative project management system. This backend provides secure user authentication, email verification, password management, and system health monitoring capabilities.

## Project Information
- **Name**: Project Management Platform Backend
- **Version**: 1.0.0
- **Author**: Dhananjay Balekar
- **License**: ISC
- **Type**: Backend API Service

## Tech Stack

### Core Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling library

### Authentication & Security
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcrypt** - Password hashing and verification
- **crypto** - Cryptographic token generation
- **cookie-parser** - HTTP cookie parsing middleware

### Email Services
- **nodemailer** - Email sending library
- **mailgen** - Email template generation
- **Mailtrap** - SMTP service for email testing

### Development & Utilities
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing middleware
- **express-validator** - Input validation middleware
- **express-session** - Session management
- **nodemon** - Development server with auto-restart
- **prettier** - Code formatting

## Project Structure

```
src/
├── app.js                    # Express application configuration
├── index.js                  # Application entry point
├── controllers/              # Request handlers
│   ├── auth.controllers.js   # Authentication logic
│   └── healthcheck.controllers.js # Health check logic
├── db/
│   └── index.js              # Database connection setup
├── middlewares/              # Custom middleware functions
│   ├── auth.middleware.js    # JWT authentication middleware
│   └── validator.middleware.js # Input validation middleware
├── models/                   # Database models
│   └── user.models.js        # User schema and methods
├── routes/                   # API route definitions
│   ├── auth.routes.js        # Authentication routes
│   └── healthcheck.routes.js # Health check routes
├── utils/                    # Utility functions and classes
│   ├── api-error.js          # Custom error handling class
│   ├── api-response.js       # Standardized response format
│   ├── async-handler.js      # Async error handling wrapper
│   ├── constants.js          # Application constants
│   └── mail.js               # Email service utilities
└── validators/               # Input validation schemas
    └── index.validator.js     # Validation rules
```

## Features

### 1. User Authentication System
- **User Registration**: Create new accounts with email verification
- **User Login**: Secure authentication with JWT tokens
- **Password Management**: Change password and forgot/reset password
- **Email Verification**: Account verification via email tokens
- **Token Management**: Access token refresh mechanism
- **Secure Logout**: Token invalidation and cookie clearing

### 2. Security Features
- JWT-based authentication with access and refresh tokens
- Password hashing using bcrypt
- Secure cookie management (httpOnly, secure)
- Input validation on all endpoints
- Email verification for account security
- Token-based password reset functionality
- CORS configuration for cross-origin requests

### 3. Email Services
- Email verification for new user accounts
- Password reset email functionality
- Professional email templates using Mailgen
- SMTP configuration with Mailtrap for testing

### 4. System Monitoring
- Health check endpoint for system status monitoring
- Database connection status verification

## API Endpoints

### Authentication Routes (`/api/v1/auth/`)

#### Public Endpoints
- `POST /register` - Register new user account
- `POST /login` - User authentication
- `GET /verify-email/:verificationToken` - Email verification
- `POST /refresh-token` - Refresh access token
- `POST /forgot-password` - Request password reset
- `POST /reset-password/:resetToken` - Reset forgotten password

#### Protected Endpoints (Require Authentication)
- `POST /logout` - User logout
- `GET /current-user` - Get current user information
- `POST /change-password` - Change user password
- `POST /resend-email-verification` - Resend verification email

### Health Check Routes (`/api/v1/healthcheck/`)
- `GET /` - System health status

## Database Schema

### User Model
```javascript
{
  avatar: {
    url: String,
    localPath: String
  },
  username: String (unique, lowercase, indexed),
  email: String (unique, lowercase, indexed),
  fullName: String,
  password: String (hashed),
  isEmailVerified: Boolean (default: false),
  refreshToken: String,
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  emailVerificationToken: String,
  emailVerificationExpiry: Date,
  timestamps: true
}
```

## Environment Variables Required

```env
# Database
MONGO_URI=mongodb://localhost:27017/project-management

# Server
EXPRESS_PORT=8000
CORS_ORIGIN=http://localhost:5173

# JWT Secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

# Email Configuration
MAIL_TRAP_SMTP_HOST=your_mailtrap_host
MAIL_TRAP_SMTP_PORT=your_mailtrap_port
MAIL_TRAP_SMTP_USER=your_mailtrap_username
MAIL_TRAP_SMTP_PASS=your_mailtrap_password
FORGOT_PASSWORD_REDIRECT_URL=your_frontend_url
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-management-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Create a `.env` file in the root directory
   - Add all required environment variables (see above)

4. **Database Setup**
   - Ensure MongoDB is running
   - Update `MONGO_URI` in `.env` file

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Usage Examples

### User Registration
```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123",
  "fullName": "John Doe"
}
```

### User Login
```bash
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Get Current User (Protected)
```bash
GET /api/v1/auth/current-user
Authorization: Bearer <access_token>
```

## Security Implementation

### Password Security
- Passwords are hashed using bcrypt with salt rounds of 10
- Password validation before saving to database
- Secure password comparison methods

### Token Security
- Access tokens expire in 15 minutes
- Refresh tokens expire in 7 days
- Tokens are stored in secure HTTP-only cookies
- Token refresh mechanism for seamless user experience

### Input Validation
- All inputs are validated using express-validator
- Email format validation
- Username length and format validation
- Password strength requirements

## Error Handling

The application uses a custom error handling system:

- **ApiError Class**: Standardized error format with status codes
- **ApiResponse Class**: Consistent response format for all endpoints
- **AsyncHandler**: Wrapper for async functions to catch errors
- **Validation Middleware**: Input validation with detailed error messages

## Development Features

### Code Quality
- Prettier for code formatting
- ESLint for code linting
- Consistent code structure and naming conventions

### Development Tools
- Nodemon for automatic server restart during development
- Environment variable management with dotenv
- Modular architecture for easy maintenance

## Future Enhancements (Based on PRD)

The current implementation includes the authentication foundation. Future development will include:

- Project management endpoints
- Task and subtask management
- Team member management
- File upload capabilities
- Role-based access control
- Project notes system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Note**: This is a backend API service. A frontend application is required to provide a complete user interface for the project management platform.
