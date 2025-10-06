Project Camp Backend
A backend service built with Node.js, Express, and MongoDB, designed for a collaborative project management system.
Currently, the implemented modules include user authentication, email verification,password reset and a system health check API.

Features
1. User Authentication & Authorization
Secure authentication flow with JWT-based access and refresh tokens.

Implemented Endpoints (/api/v1/auth)

POST /register – Register a new user account with email verification.
POST /login – Authenticate user and issue access and refresh tokens.
POST /logout – Clear authentication cookies and log out the user.
GET /current-user – Retrieve current logged-in user details (secured).
POST /change-password – Change user password after login (secured).
POST /refresh-token – Refresh access token using valid refresh token.
GET /verify-email/:verificationToken – Verify user email via verification token.
POST /forgot-password – Request password reset email.
POST /reset-password/:resetToken – Reset password using reset token.
POST /resend-email-verification – Resend email verification link (secured).

2. Health Check API
Endpoint (/api/v1/healthcheck)

GET / – Returns system status for uptime monitoring and diagnostics.

What I Learned

Implemented JWT-based authentication with refresh tokens.
Learned how to handle secure cookie management in Express.
Implemented email verification and password reset flows.
Understood error handling and middleware patterns using custom classes.
Set up MongoDB models for user management and token tracking.
Used environment variables securely for token secrets and configuration.
Learned how to use the crypto module and bcrypt for hashing passwords.
Understood how to use mongoose for data modelling.
Learned how to send emails using nodemailer and configure them with Mailtrap's SMTP credentials and then verify accordingly(email verification).

Tech Stack

Node.js – Backend runtime
Express.js – Web framework
MongoDB (Mongoose) – Database and ODM
JWT (jsonwebtoken) – Token-based authentication
bcrypt – Password hashing
cookie-parser – Handling cookies in Express
dotenv – Environment variable management
nodemailer – Email verification and password reset links
Mailtrap- SMTP service for testing of outgoing emails without sending emails to real users
