const plans = [
    {
        name: 'HTML/CSS',
        tag: 'Basic',
        info: 'Perfect for simple static websites',
        price: 180,
        features: [
            { text: 'Up to 5 static pages (HTML, CSS, JS)' },
            { text: 'Fully responsive design' },
            { text: 'Basic SEO setup (meta tags, sitemap)' },
            { text: 'Fast-loading lightweight site' },
            { text: 'Contact form with email integration' },
            { text: '1 round of revisions included' },
            { text: 'Email support (Mon–Fri)' }
        ],
        btn: {
            text: 'Contact Us',
            variant: 'outline'
        }
    },
    {
        name: 'WordPress',
        tag: 'Standard',
        info: 'Flexible CMS for blogs, business, and e-commerce',
        price: 300,
        features: [
            { text: 'Custom WordPress theme design & setup' },
            { text: 'Up to 10 pages with CMS editing' },
            { text: 'E-commerce support (WooCommerce)' },
            { text: 'SEO plugins & optimization' },
            { text: 'Blog setup with categories & tags' },
            { text: 'Plugin integration (forms, sliders, galleries)' },
            { text: '2 rounds of revisions included' },
            { text: 'Email & chat support' }
        ],
        btn: {
            text: 'Contact Us',
            variant: 'secondary'
        }
    },
    {
        name: 'MERN Stack',
        tag: 'Most Popular',
        info: 'Best for startups & businesses scaling fast',
        price: 1800,
        features: [
            { text: 'Full-stack app with MongoDB, Express, React, Node.js' },
            { text: 'Dynamic pages with CMS or admin panel' },
            { text: 'User authentication & roles' },
            { text: 'E-commerce functionality (shopping cart, payments)' },
            { text: 'API integrations (third-party services)' },
            { text: 'Advanced SEO + analytics setup' },
            { text: '3 rounds of revisions included' },
            { text: 'Priority email & chat support' }
        ],
        btn: {
            text: 'Get Premium Quote',
            variant: 'default'
        },
        highlighted: true
    },
    {
        name: 'Laravel Advanced',
        tag: 'Enterprise',
        info: 'Enterprise-grade solution with PHP & Laravel',
        price: 600,
        features: [
            { text: 'Custom Laravel backend with scalable architecture' },
            { text: 'Advanced e-commerce (multi-vendor, subscriptions)' },
            { text: 'Robust REST APIs / GraphQL support' },
            { text: 'Integration with CRM, ERP, or internal tools' },
            { text: 'Advanced security (JWT, OAuth, 2FA)' },
            { text: 'Performance optimization & caching' },
            { text: 'Dedicated project manager' },
            { text: 'Ongoing maintenance & updates' },
            { text: '24/7 premium support' }
        ],
        btn: {
            text: 'Contact Enterprise Team',
            variant: 'destructive'
        }
    }
]

const services = [
    {
        name: 'Maintenance Plans',
        priceRange: {
            inr: '₹5,000 – ₹25,000',
            usd: '$60 – $300',
            eur: '€55 – €255'
        },
        frequency: '/ month',
        description: 'Regular updates, security patches, and technical support'
    },
    {
        name: 'Hosting & Domain',
        priceRange: {
            inr: '₹3,000 – ₹10,000',
            usd: '$36 – $120',
            eur: '€32 – €100'
        },
        frequency: '/ year',
        description: 'Reliable hosting with SSL certificates and domain management'
    },
    {
        name: 'UI/UX Design',
        priceRange: {
            inr: '₹10,000 – ₹50,000',
            usd: '$120 – $600',
            eur: '€110 – €510'
        },
        frequency: '',
        description: 'Custom design solutions and user experience optimization'
    },
    {
        name: 'SEO & Marketing',
        priceRange: {
            inr: '₹15,000 – ₹70,000',
            usd: '$180 – $840',
            eur: '€165 – €715'
        },
        frequency: '',
        description: 'Search engine optimization and digital marketing campaigns'
    }
]

export const pricingData = {
    badgeTitle: 'Pricing',
    heading: 'Transparent, Affordable Pricing',
    description: 'Choose the perfect plan for your project. All prices include design, development, and initial support.',
    plans: plans,
    services: services
}
