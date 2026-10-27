export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  iconName: string;
  heroImage: string;
  included: string[];
  keyBenefits: string[];
  idealFor: string;
  techPartners: string[];
}

export interface IndustrySolution {
  title: string;
  icon: string;
  description: string;
  keyNeeds: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  service: string;
}

export interface Partner {
  name: string;
  tier: string;
  category: string;
  badgeColor: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "CLEARCOM ENTERPRISES LTD",
  shortName: "Clearcom",
  tagline: "Effortless IT Support, like it never even happened.",
  foundedYear: 2012,
  website: "https://www.clearcom.co.ke",
  address: "Vision Plaza, Mombasa Road, 5th Floor, Suite 35, Nairobi, Kenya",
  addressShort: "Vision Plaza, Mombasa Rd, Nairobi",
  city: "Nairobi",
  country: "Kenya",
  phone: "+254 795 768 010",
  phoneDisplay: "+254 795 768 010",
  email: "info@clearcom.co.ke",
  whatsapp: "+254795768010",
  workingHours: {
    weekdays: "Mon – Fri: 8:00 AM – 5:00 PM",
    saturday: "Sat: 9:00 AM – 1:00 PM",
    sunday: "Sun: Closed",
    support: "24/7 Priority Emergency Helpdesk for SLA Clients",
  },
  socialLinks: {
    facebook: "https://facebook.com/clearcomltd",
    twitter: "https://twitter.com/clearcomltd",
    instagram: "https://instagram.com/clearcomltd",
    linkedin: "https://linkedin.com/company/clearcom-enterprises",
    whatsapp: "https://wa.me/254795768010",
    telegram: "https://t.me/clearcomke",
    tiktok: "https://tiktok.com/@clearcomltd",
  },
  aboutParagraph:
    "Clearcom Enterprises Ltd is a Nairobi-based ICT solutions provider dedicated to helping businesses leverage technology for growth, efficiency, and resilience. With more than 10 years of combined industry experience, we specialize in providing secure, cost-effective, and innovative IT solutions tailored to the needs of small and mid-sized businesses across Africa. We bridge the gap between technology investments and measurable business growth. Our approach is strategic, customer-centric, and focused on empowering organizations to thrive in today’s dynamic digital landscape.",
  taglineExtended:
    "Clearcom Enterprises LTD provides end-to-end IT services, from equipment and cloud to security and support, so your technology just works.",
  mapsUrl: "https://maps.google.com/?q=Vision+Plaza+Mombasa+Road+Nairobi",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.775373859663!2d36.8502573757912!3d-1.328328635650392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11c793ff433b%3A0xe5a14c330dfd7f02!2sVision%20Plaza%2C%20Mombasa%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
};

export const PARTNERS_LIST: Partner[] = [
  { name: "Ubiquiti", tier: "Enterprise Partner", category: "Networking & Wi-Fi", badgeColor: "#0559C9", description: "UniFi High-Density Wi-Fi 6/7, Switches & Gateways" },
  { name: "TP-Link", tier: "Certified Partner", category: "Networking Solutions", badgeColor: "#00a0e9", description: "Omada SDN Cloud Controllers, Business Routers & PoE" },
  { name: "Logitech", tier: "Video Collaboration Partner", category: "Meeting Room Solutions", badgeColor: "#00b8fc", description: "Rally Bar, MeetUp & High-Definition Teams/Zoom Rooms" },
  { name: "HP", tier: "Business Partner", category: "Hardware & Laptops", badgeColor: "#0096d6", description: "ProLiant Servers, EliteBook Workstations & Printers" },
  { name: "Hikvision", tier: "Certified Partner", category: "CCTV & Physical Security", badgeColor: "#d32f2f", description: "Smart AI IP Cameras, NVR Systems & Biometric Access Control" },
  { name: "Fanvil", tier: "Certified Hardware Partner", category: "IP Phones & Intercoms", badgeColor: "#e64a19", description: "Enterprise HD Desk Phones, Video Doorbells & Headsets" },
  { name: "VMware", tier: "Certified Partner", category: "Virtualization & Cloud", badgeColor: "#4b5563", description: "vSphere Virtualization, Cloud Infrastructure & Hybrid Data Centers" },
  { name: "Yeastar", tier: "Certified Partner", category: "Business Phone Systems", badgeColor: "#0288d1", description: "P-Series Hybrid & Cloud Unified Communications" },
  { name: "Microsoft", tier: "Cloud Solution Provider (CSP)", category: "Cloud & Productivity", badgeColor: "#00a4ef", description: "Microsoft 365, Azure Cloud, Teams & Defender" },
  { name: "3CX", tier: "Certified Partner", category: "VoIP & Communications", badgeColor: "#00a8e8", description: "Software PBX, WebRTC Video, Softphone & CRM Integration" },
  { name: "ESET", tier: "Certified Partner", category: "Cybersecurity & Antivirus", badgeColor: "#00828a", description: "Proactive Endpoint Protection, Mobile Security & Antivirus" },
  { name: "Sophos", tier: "Certified Partner", category: "Cybersecurity & Firewall", badgeColor: "#0070d2", description: "Intercept X Endpoint Protection & Next-Gen XGS Firewalls" },
  { name: "Bitdefender", tier: "Cybersecurity Partner", category: "Endpoint & EDR Security", badgeColor: "#ed1c24", description: "GravityZone Cloud Security, Ransomware & EDR Protection" },
  { name: "Lenovo", tier: "Business Partner (Classic)", category: "Hardware & ThinkPad", badgeColor: "#e2231a", description: "ThinkSystem Servers, ThinkPad Business Fleet & Desktops" },
  { name: "Yealink", tier: "Certified Partner", category: "VoIP Phones & Conferencing", badgeColor: "#00828a", description: "Enterprise IP Telephony, Video Bars & Unified Communications" },
  { name: "Acronis", tier: "Certified Partner", category: "Backup & Recovery", badgeColor: "#002d62", description: "Cyber Protect Cloud, Disaster Recovery & Ransomware Shield" },
];

// Service descriptions, capabilities, and images from https://www.clearcom.co.ke/services/
export const SERVICES_LIST: ServiceDetail[] = [
  {
    "id": "hardware-procurement",
    "slug": "it-equipment-integration",
    "title": "IT Equipment & Integration",
    "iconName": "Laptop",
    "shortDesc": "Reliable hardware and seamless integration services.",
    "fullDesc": "Reliable hardware and seamless integration services.",
    "heroImage": "/images/services/it-equipment-integration.jpg",
    "included": [
      "Supply of new and refurbished laptops, desktops, and servers",
      "Network setup including routers, firewalls, and switches",
      "Structured cabling and wireless access point installations",
      "Printer and peripheral setup and management",
      "System integration and vendor coordination"
    ],
    "keyBenefits": [],
    "idealFor": "",
    "techPartners": []
  },
  {
    "id": "communication-collaboration",
    "slug": "communication-collaboration",
    "title": "Communication & Collaboration",
    "iconName": "PhoneCall",
    "shortDesc": "Empower your team with modern communication tools.",
    "fullDesc": "Empower your team with modern communication tools.",
    "heroImage": "/images/services/communication-collaboration.jpg",
    "included": [
      "VoIP phone systems using 3CX or Yeastar",
      "Intercom and IP-based telephony for office setups",
      "Call routing, IVR, voicemail-to-email, and call recording",
      "Integration with Microsoft Teams and CRMs",
      "Handset provisioning and user training"
    ],
    "keyBenefits": [],
    "idealFor": "",
    "techPartners": [
      "3CX",
      "Yeastar",
      "Microsoft"
    ]
  },
  {
    "id": "cloud-solutions",
    "slug": "cloud-solutions",
    "title": "Cloud Solutions",
    "iconName": "Cloud",
    "shortDesc": "Scalable and secure cloud platforms to grow your business.",
    "fullDesc": "Scalable and secure cloud platforms to grow your business.",
    "heroImage": "/images/services/cloud-solutions.jpg",
    "included": [
      "Migration of servers and files to Microsoft Azure or OneDrive",
      "Hybrid environments for on-prem/cloud flexibility",
      "Cloud backup for critical data and applications",
      "Virtual desktops and remote work enablement",
      "Ongoing support and cost optimization"
    ],
    "keyBenefits": [],
    "idealFor": "",
    "techPartners": [
      "Microsoft"
    ]
  },
  {
    "id": "cybersecurity",
    "slug": "cybersecurity-services",
    "title": "Cybersecurity Services",
    "iconName": "Lock",
    "shortDesc": "Protect your business from cyber threats and data breaches.",
    "fullDesc": "Protect your business from cyber threats and data breaches.",
    "heroImage": "/images/services/cybersecurity-services.jpg",
    "included": [
      "Endpoint protection with Microsoft Defender or Sophos",
      "Email security with anti-spam and phishing filters",
      "Multi-Factor Authentication (MFA) enforcement",
      "Regular vulnerability assessments and patching",
      "Backup and disaster recovery planning"
    ],
    "keyBenefits": [],
    "idealFor": "",
    "techPartners": [
      "Microsoft",
      "Sophos"
    ]
  },
  {
    "id": "microsoft-365-solutions",
    "slug": "microsoft-365-solutions",
    "title": "Microsoft 365 Solutions",
    "iconName": "Cloud",
    "shortDesc": "Unlock the full power of Microsoft 365 for your business.",
    "fullDesc": "Unlock the full power of Microsoft 365 for your business.",
    "heroImage": "/images/services/microsoft-365-solutions.jpg",
    "included": [
      "Licensing, setup, and deployment of Microsoft 365 apps",
      "Email migration to Exchange Online with zero data loss",
      "Teams and SharePoint configuration for better collaboration",
      "Security policies to protect your users and data",
      "Training and onboarding to boost productivity"
    ],
    "keyBenefits": [],
    "idealFor": "",
    "techPartners": [
      "Microsoft"
    ]
  },
  {
    "id": "managed-it",
    "slug": "managed-it-support",
    "title": "Managed IT Support",
    "iconName": "ShieldCheck",
    "shortDesc": "Reliable support to keep your systems running smoothly.",
    "fullDesc": "Reliable support to keep your systems running smoothly.",
    "heroImage": "/images/services/managed-it-support.jpg",
    "included": [
      "Proactive maintenance and monitoring to prevent downtime",
      "Unlimited helpdesk and remote support for fast issue resolution",
      "Onsite visits when you need hands-on assistance",
      "IT asset management and regular health checks",
      "Monthly reporting and insights for continuous improvement"
    ],
    "keyBenefits": [],
    "idealFor": "",
    "techPartners": []
  }
];

export const COMPARISON_3CX_VS_YEASTAR = {
  title: "3CX vs Yeastar: Which Fits Your Business?",
  subtitle: "Both are world-class communications platforms. Here is how to choose the right fit for your Kenyan enterprise:",
  features: [
    {
      criteria: "Primary Architecture",
      threeCX: "Software-first PBX (Deploy on Linux/Windows, Cloud or Private VPS)",
      yeastar: "Appliance & Cloud Hybrid (Dedicated rackmount hardware or Cloud PBX)"
    },
    {
      criteria: "Licensing Model",
      threeCX: "Simultaneous Call Channels (Unlimited users, pay for active calls)",
      yeastar: "Per User / Extension or one-off Hardware Appliance license"
    },
    {
      criteria: "Remote & Mobile Apps",
      threeCX: "Industry-leading 3CX Mobile (iOS/Android) & Browser Web Client",
      yeastar: "Linkus UC App for Desktop, Web, and Mobile (iOS/Android)"
    },
    {
      criteria: "Hardware IP Phone Compatibility",
      threeCX: "Supports Fanvil, Yealink, Snom and standard SIP endpoints",
      yeastar: "Seamless plug-and-play auto-provisioning with Fanvil & Yeastar IP phones"
    },
    {
      criteria: "Legacy Line Gateways (FXS/FXO/GSM)",
      threeCX: "Requires external certified VoIP gateways (Patton/Grandstream/Fanvil)",
      yeastar: "Native modular slots in P-Series hardware for GSM SIM, FXO & ISDN"
    },
    {
      criteria: "Microsoft Teams Integration",
      threeCX: "Deep direct routing integration with Teams phone system",
      yeastar: "Teams integration supported via Yeastar Linkus & Operator Panel"
    },
    {
      criteria: "Webinar & Video Conferencing",
      threeCX: "Included WebRTC video conferencing with up to 250 participants",
      yeastar: "Integrated video calls and multi-party web meeting rooms"
    },
    {
      criteria: "Best Suited For",
      threeCX: "Call centers, modern hybrid teams, CRM-heavy sales, cost per user optimization",
      yeastar: "Offices wanting physical appliance reliability, hotel PBX, analog PSTN/GSM backup"
    }
  ]
};

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    title: "Schools & Educational Institutions",
    icon: "GraduationCap",
    description: "High-density student Wi-Fi, computer lab setups, campus-wide CCTV surveillance, and broadcast bell intercom systems.",
    keyNeeds: ["Safe web filtering & firewall", "Campus-wide Wi-Fi roaming", "Biometric gate & dorm access", "Cloud document collaboration"]
  },
  {
    title: "Healthcare Clinics & Hospitals",
    icon: "Activity",
    description: "Ultra-reliable network uptime, HIPAA/KDPA patient data security, intercom paging, and 24/7 critical system recovery.",
    keyNeeds: ["Zero-downtime medical LAN", "Ransomware-proof patient backups", "Consultation room VoIP phones", "Access control for pharmacy"]
  },
  {
    title: "Financial & Legal Practices",
    icon: "Briefcase",
    description: "Ironclad cybersecurity, encrypted email communication, confidential document backups, and audited phone call recording.",
    keyNeeds: ["Strict KDPA compliance audits", "Call recording for dispute resolution", "Multi-factor authentication (MFA)", "Encrypted document storage"]
  },
  {
    title: "Logistics, Warehouses & Retail",
    icon: "Truck",
    description: "Rugged barcode scanner networks, multi-angle security cameras, branch-to-headquarters VPN, and point-of-sale uptime.",
    keyNeeds: ["Long-range warehouse Wi-Fi", "HD night-vision perimeter CCTV", "Dual-WAN internet failover", "Site-to-site branch networking"]
  },
  {
    title: "NGOs & Non-Profit Organizations",
    icon: "Globe",
    description: "Specialized Microsoft 365 non-profit licensing, remote fieldwork communication, secure data storage, and low-cost VoIP.",
    keyNeeds: ["Discounted non-profit cloud grants", "Remote staff softphones", "Cross-border secure VPNs", "Predictable flat monthly costs"]
  },
  {
    title: "Corporate SMEs & Professional Firms",
    icon: "Building2",
    description: "All-in-one outsourced Managed IT, boardroom video conferencing bars, fast response helpdesk, and proactive maintenance.",
    keyNeeds: ["15-min emergency response SLA", "Modern Logitech meeting rooms", "Standardized Dell/HP laptops", "Total IT peace of mind"]
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Free Consultation & IT Audit",
    description: "We visit your Nairobi premises or conduct a comprehensive virtual discovery session to analyze your network, cybersecurity vulnerabilities, and business goals."
  },
  {
    step: "02",
    title: "Tailored Architecture & Plan",
    description: "We present a transparent, itemized proposal featuring exact technology recommendations, predictable costs, and a clear implementation timeline."
  },
  {
    step: "03",
    title: "Zero-Downtime Deployment",
    description: "Our certified engineers configure, install, and migrate your systems outside business hours to ensure zero operational disruption to your team."
  },
  {
    step: "04",
    title: "Proactive 24/7 Support & Care",
    description: "We continuously monitor your infrastructure, apply patches, block threats, and provide 15-minute response helpdesk support whenever you need us."
  }
];

export const TRUST_STATS = [
  { value: "99.98%", label: "Uptime Delivered", subtext: "Guaranteed SLA for managed clients" },
  { value: "< 15 Mins", label: "Emergency Response", subtext: "Fast Kenyan helpdesk & dispatch" },
  { value: "150+", label: "Businesses Supported", subtext: "Across Nairobi and wider Kenya" },
  { value: "12+ Years", label: "Proven Experience", subtext: "Established excellence since 2012" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Mwangi",
    role: "Managing Partner",
    company: "Apex Legal Advocates LLP",
    location: "Upper Hill, Nairobi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Clearcom migrated our entire legal firm from an ancient Panasonic analog PBX to 3CX. Our advocates now take client calls on their smartphones wherever they are, and our monthly phone bills dropped by over 65%. Their Managed IT support is truly effortless—just as promised.",
    service: "3CX Business Phone Systems & Managed IT"
  },
  {
    name: "Faith Njeri",
    role: "Operations Director",
    company: "Savannah Logistics & Freight Ltd",
    location: "Mombasa Road, Nairobi",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Being along Mombasa Road, we needed an IT partner who could be on-site within minutes if our warehouse network stumbled. Clearcom installed our Ubiquiti Wi-Fi, Hikvision CCTV, and Yeastar PBX. Their team is exceptionally certified, responsive, and trustworthy.",
    service: "Networking, Yeastar PBX & CCTV"
  },
  {
    name: "Dr. Kelvin Omondi",
    role: "Medical Director",
    company: "Capital Care Medical Centre",
    location: "Westlands, Nairobi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Patient records require uncompromising security. Clearcom deployed Sophos Intercept X and Acronis immutable cloud backups. When a staff member clicked a suspicious link last month, Sophos neutralized it instantly without any data loss. Clearcom is our most reliable technology partner.",
    service: "Cybersecurity & Acronis Backup"
  },
  {
    name: "Sarah Kimani",
    role: "Country Director",
    company: "East Africa Educational Trust (NGO)",
    location: "Kilimani, Nairobi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Clearcom secured our non-profit Microsoft 365 deployment and standardized our Lenovo ThinkPad fleet. Their proactive IT maintenance means our team hasn't faced a single unexpected work disruption in over eighteen months. Exceptional professionalism!",
    service: "Microsoft 365 & Hardware Procurement"
  }
];

export const FAQS = [
  {
    category: "Phone Systems",
    question: "What is the difference between 3CX and Yeastar phone systems?",
    answer: "3CX is a software-based PBX built for Windows/Linux or Cloud hosting, featuring a unique licensing model based on simultaneous calls (unlimited users) and seamless CRM/WhatsApp/browser client integrations. Yeastar P-Series offers dedicated on-premise hardware appliances as well as cloud PBX, with native modular analog/GSM line gateways and plug-and-play Fanvil phone auto-provisioning. Clearcom installs, customizes, and supports both systems based on your exact business workflow."
  },
  {
    category: "Phone Systems",
    question: "Can our staff keep their desk phone numbers when working from home or traveling?",
    answer: "Yes, absolutely! Both 3CX and Yeastar include mobile apps (iOS & Android) and laptop softphones. When someone dials your office landline number, your phone rings simultaneously on your desk phone, your mobile app, or your laptop wherever you have an internet connection."
  },
  {
    category: "Managed IT",
    question: "How fast will Clearcom respond when our office experiences an IT issue?",
    answer: "For clients on our Managed IT Service Agreements, we guarantee a critical response time of under 15 minutes. Over 90% of issues are resolved immediately via our remote support console. If on-site intervention is required, our Mombasa Road engineers are rapidly dispatched across Nairobi."
  },
  {
    category: "Managed IT",
    question: "What is included in your Managed IT Services flat monthly rate?",
    answer: "Our Managed IT package covers 24/7 server and workstation monitoring, antivirus and malware protection, patch management, unlimited remote helpdesk, preventative hardware tune-ups, data backup verification, network management, and regular IT strategic reviews with no surprise hourly invoices."
  },
  {
    category: "Cybersecurity & Cloud",
    question: "Can you help us migrate our emails and files to Microsoft 365 without losing emails?",
    answer: "Yes. Clearcom has migrated dozens of Kenyan companies to Microsoft 365 from cPanel webmail, G-Suite, and local on-premise Exchange servers. We conduct migrations seamlessly in the background with zero data loss and zero email downtime."
  },
  {
    category: "Hardware & Procurement",
    question: "Are your Dell, HP, and Lenovo computers genuine with Kenyan warranty?",
    answer: "Yes. We source all hardware directly through authorized official distributors in Kenya. Every laptop, desktop, server, and Logitech conference unit comes with genuine manufacturer warranty and full local service center support."
  },
  {
    category: "General",
    question: "Where is Clearcom Enterprises located, and do you serve clients outside Nairobi?",
    answer: "Our headquarters are located at Vision Plaza, 5th Floor, Suite 35, along Mombasa Road in Nairobi. While our primary rapid on-site dispatch is across the greater Nairobi metropolitan area, we also deliver network cabling, PBX deployments, and 24/7 remote managed support to clients in Mombasa, Kisumu, Nakuru, Eldoret, and throughout Kenya."
  }
];
