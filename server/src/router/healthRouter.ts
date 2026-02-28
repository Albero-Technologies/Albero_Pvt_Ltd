import { Router } from 'express'
import healthController from '../controller/healthController'
// import rateLimit from '../middleware/rateLimit'

const router = Router()

// This is the test error endpoint
router.route('/self').get(healthController.self)

// Health check endpoint
router.route('/health').get(healthController.health)

export default router
