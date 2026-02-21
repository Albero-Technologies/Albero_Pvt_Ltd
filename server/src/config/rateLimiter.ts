// src/config/rateLimiter.ts
import { RateLimiterPostgres } from 'rate-limiter-flexible'
import { Pool } from 'pg'

export let rateLimiterPostgres: RateLimiterPostgres | null = null

const DURATION = 1000 // 180 seconds
const POINTS = 3600 // 20 requests

export const initRateLimiter = (databaseUrl: string): void => {
    if (!databaseUrl) {
        throw new Error('DATABASE_URL environment variable is not defined')
    }

    const pool = new Pool({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false }
    })

    rateLimiterPostgres = new RateLimiterPostgres({
        storeClient: pool,
        points: POINTS,
        duration: DURATION,
        tableName: 'Rate_Limiter'
    })
}
