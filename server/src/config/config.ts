import dotenvFlow from 'dotenv-flow'

// Load .env files ONLY in development
if (process.env.ENV !== 'production') {
  dotenvFlow.config()
}

export default {
    // General
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // Database
    DATABASE_URL: process.env.DATABASE_URL,

    // EMAIL
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL
}
