import { NextFunction, Request, Response } from 'express'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'
import prisma from '../util/prisma'
import { transporter } from '../util/transporter'
import { generateWelcomeEmail } from '../mails/welcome'
import { generateNotificationEmail } from '../mails/notification'
import config from '../config/config'

interface ContactBody {
    name: string
    email: string
    phone?: string
    message: string
}

export default {
    contact: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, phone, message } = req.body as ContactBody

            if (!name || !email || !message) {
                return res.status(400).json({ error: 'Name, email, and message are required.' })
            }

            const contact = await prisma.contact.create({
                data: { name, email, phone, message }
            })

            // Send Welcome Email to User
            await transporter.sendMail({
                from: config.EMAIL_USER,
                to: email,
                subject: 'We received your message – Albero',
                html: generateWelcomeEmail({ name, email, message })
            })

            // Send Notification Email to Admin
            await transporter.sendMail({
                from: config.EMAIL_USER,
                to: config.ADMIN_EMAIL,
                subject: `New Contact Submission from ${name}`,
                html: generateNotificationEmail({ name, email, phone: phone || '', message })
            })

            return httpResponse(req, res, 200, responseMessage.SUCCESS, contact)
        } catch (err) {
            return httpError(next, err, req, 500)
        }
    }
}
