export const STATIC_GLOBALS = {
    company_logo: "https://hunterscontracting.com/img/logo-white.png", // Valid placeholder or actual asset needed
    footer_text: "<p>© 2024 Hunter's Contracting. All rights reserved.</p>",
    footer_images: [
        "https://hunterscontracting.com/img/logos/6250-CGB-black.png",
        "https://hunterscontracting.com/img/logos/6250-CGP-logo.png",
        "https://hunterscontracting.com/img/logos/6250-NAHB-black.png"
    ]
};

export const STATIC_PAGES = [
    { title: "Custom Homes", slug: "/customHomes", navigation: true },
    { title: "Commercial", slug: "/commercial", navigation: true },
    { title: "Remodeling", slug: "/remodeling", navigation: true },
    { title: "Reviews", slug: "/reviews", navigation: true },
    { title: "Contact", slug: "/contact", navigation: true },
];

export const STATIC_HOME = {
    cover_photo: "https://hunterscontracting.com/img/bkgd/7525-mainsail-exterior.jpg", // Using a nice image from the site
    about_company: {
        blocks: [
            {
                id: "1",
                type: "header",
                data: {
                    text: "Building Excellence Since 1987",
                    level: 2
                }
            },
            {
                id: "2",
                type: "paragraph",
                data: {
                    text: "Hunter's Contracting is a premier general contractor serving Virginia with excellence in custom luxury homes and commercial developments. With over three decades of experience, we have built a reputation for quality, integrity, and superior craftsmanship."
                }
            },
            {
                id: "3",
                type: "paragraph",
                data: {
                    text: "We are dedicated to turning your vision into reality, whether it's a dream home or a commercial project that stands out."
                }
            }
        ]
    }
};
