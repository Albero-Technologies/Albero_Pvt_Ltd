import { pricingData } from '@/constants/pricing'
import { cn } from '@/lib/utils'

// type CURRENCY = 'USD' | 'EUR' | 'INR'

// interface AddOnServicesProps {
//     currency: CURRENCY
// }

export function AddOnServices() {
    return (
        <div className="w-full max-w-7xl mx-auto mt-16 px-5">
            <h2 className="text-2xl font-bold text-center text-white mb-8">Add-On Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingData.services.map((service, idx) => (
                    <div
                        key={idx}
                        className={cn('rounded-2xl border border-white/10 bg-[#161616] p-6 text-center shadow-lg hover:shadow-xl transition')}>
                        <h3 className="text-lg font-semibold mb-2 text-white">{service.name}</h3>
                        {/* <p className="text-xl font-bold text-white">
                            {service.priceRange[currency.toLowerCase() as keyof typeof service.priceRange]}{' '}
                            <span className="text-sm font-normal text-gray-400">{service.frequency}</span>
                        </p> */}
                        <p className="mt-3 text-sm text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
