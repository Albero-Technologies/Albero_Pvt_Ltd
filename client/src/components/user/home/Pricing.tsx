import { PricingSection } from '@/components/ui/pricing'
import { Badge } from '@/components/ui/badge'
import { AddOnServices } from './AddOnServices'
import React from 'react'
import { pricingData } from '@/constants/pricing'

export default function Pricing() {
    const [currency, setCurrency] = React.useState<'USD' | 'EUR' | 'INR'>('USD')

    return (
        <section
            id="pricing"
            className="w-full overflow-hidden bg-black py-8 md:py-20">
            <div className="text-center mb-16">
                <Badge
                    variant="outline"
                    className="mb-6 text-white text-xl">
                    {pricingData.badgeTitle}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pricingData.heading}</h2>
                <p className="text-lg max-w-2xl mx-auto text-white px-5">{pricingData.description}</p>
            </div>

            {/* Pricing Plans */}
            <PricingSection
                plans={pricingData.plans}
                currency={currency}
                setCurrency={setCurrency}
            />

            {/* Add-On Services */}
            <AddOnServices />
        </section>
    )
}
