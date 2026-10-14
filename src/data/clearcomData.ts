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
  address: "Vision Plaza, Mombasa Road, 5th Floor, Suite 35, Nairobi, Kenya",
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
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.775373859663!2d36.8502573757912!3d-1.328328635650392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11c793ff433b%3A0xe5a14c330dfd7f02!2sVision%20Plaza%2C%20Mombasa%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
};

export const PARTNERS_LIST: Partner[] = [
  { name: "3CX", tier: "Advanced Certified Partner", category: "VoIP & Communications", badgeColor: "#00a8e8", description: "Software PBX, WebRTC Video, Softphone & CRM Integration" },
  { name: "Yeastar", tier: "Certified Solution Partner", category: "Business Phone Systems", badgeColor: "#0288d1", description: "P-Series Hybrid & Cloud Unified Communications" },
  { name: "Fanvil", tier: "Official Hardware Partner", category: "IP Phones & Intercoms", badgeColor: "#e64a19", description: "Enterprise HD Desk Phones, Video Doorbells & Headsets" },
  { name: "Microsoft", tier: "Cloud Solution Provider (CSP)", category: "Cloud & Productivity", badgeColor: "#00a4ef", description: "Microsoft 365, Azure Cloud, Teams & Defender" },
  { name: "Sophos", tier: "Authorized Security Partner", category: "Cybersecurity & Firewall", badgeColor: "#0070d2", description: "Intercept X Endpoint Protection & Next-Gen XGS Firewalls" },
  { name: "Bitdefender", tier: "Enterprise Partner", category: "Cybersecurity", badgeColor: "#ed1c24", description: "GravityZone Cloud Security, Ransomware & EDR Protection" },
  { name: "Acronis", tier: "Certified Cloud Partner", category: "Backup & Recovery", badgeColor: "#002d62", description: "Cyber Protect Cloud, Disaster Recovery & Ransomware Shield" },
  { name: "Kaseya", tier: "MSP Technology Partner", category: "IT Management & RMM", badgeColor: "#174291", description: "Enterprise Remote Monitoring, Patch Automation & IT Assets" },
  { name: "Hikvision", tier: "Certified Systems Integrator", category: "CCTV & Physical Security", badgeColor: "#d32f2f", description: "Smart AI IP Cameras, NVR Systems & Biometric Access Control" },
  { name: "Ubiquiti", tier: "Enterprise Partner", category: "Networking & Wi-Fi", badgeColor: "#0559C9", description: "UniFi High-Density Wi-Fi 6/7, Switches & Gateways" },
  { name: "TP-Link", tier: "Omada Certified Partner", category: "Networking Solutions", badgeColor: "#00a0e9", description: "Omada SDN Cloud Controllers, Business Routers & PoE" },
  { name: "Dell", tier: "Authorized Partner", category: "Hardware & Servers", badgeColor: "#007db8", description: "PowerEdge Enterprise Servers, Latitude & OptiPlex" },
  { name: "HP", tier: "Business Solutions Partner", category: "Hardware & Laptops", badgeColor: "#0096d6", description: "ProLiant Servers, EliteBook Workstations & Printers" },
  { name: "Lenovo", tier: "Enterprise Solutions Partner", category: "Hardware & ThinkPad", badgeColor: "#e2231a", description: "ThinkSystem Servers, ThinkPad Business Fleet & Desktops" },
  { name: "Logitech", tier: "Video Collaboration Partner", category: "Meeting Room Solutions", badgeColor: "#00b8fc", description: "Rally Bar, MeetUp & High-Definition Teams/Zoom Rooms" },
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "managed-it",
    slug: "managed-it-services",
    title: "Managed IT Services",
    badge: "Most Popular",
    iconName: "ShieldCheck",
    shortDesc: "Complete, proactive IT management that keeps your systems running 24/7 without costly business interruptions.",
    fullDesc: "Eliminate unexpected IT crises with Clearcom's end-to-end Managed IT Services. We serve as your dedicated in-house IT department—providing 24/7 proactive monitoring, instant remote helpdesk, preventative maintenance, asset tracking, and on-site dispatch across Nairobi.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    included: [
      "24/7/365 network, server, and workstation monitoring",
      "Dedicated Nairobi-based helpdesk with 15-minute response SLA",
      "Automated OS and third-party software patch management",
      "Regular preventative maintenance & hardware health diagnostics",
      "IT asset inventory tracking and lifecycle renewal planning",
      "Rapid on-site emergency dispatch across Nairobi & Kenya",
      "Predictable, transparent per-seat monthly flat rate"
    ],
    keyBenefits: [
      "Zero unpredictable IT repair bills with flat-rate support",
      "99.98% average client system uptime",
      "Free up your staff to focus on revenue-generating core work",
      "Immediate access to certified senior IT engineers"
    ],
    idealFor: "SMEs, corporate offices, law firms, clinics, and businesses with 5 to 500+ computer users needing worry-free IT.",
    techPartners: ["Kaseya", "Microsoft", "Dell", "HP", "Lenovo"]
  },
  {
    id: "3cx-phone-systems",
    slug: "3cx-phone-systems",
    title: "3CX Business Phone Systems",
    badge: "Communication Specialist",
    iconName: "PhoneCall",
    shortDesc: "Award-winning software VoIP PBX with iOS/Android apps, video conferencing, live chat, and deep CRM integration.",
    fullDesc: "Transform your company's communication with 3CX—the world-renowned software PBX deployed and maintained by Clearcom's certified engineers. Cut telecom bills by up to 80% using modern SIP trunks, give remote staff mobile softphones with office extensions, and integrate WhatsApp, website live chat, and CRM calls seamlessly into one unified dashboard.",
    heroImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Cloud-hosted or on-premise 3CX PBX deployment & configuration",
      "Mobile softphone apps (iOS & Android) with push notifications",
      "Browser web client with zero-install calling and status visibility",
      "Built-in HD WebRTC video conferencing & screen sharing (no per-seat fee)",
      "Website live chat and WhatsApp business integration",
      "Custom Digital Receptionist (IVR) and ring groups",
      "Call recording, agent whisper, barge-in, and compliance auditing",
      "Seamless CRM integrations (Salesforce, HubSpot, Zoho, Microsoft 365)",
      "Migration from outdated analog PABX lines to Safaricom/Airtel SIP trunks",
      "Comprehensive staff training and ongoing SLA maintenance"
    ],
    keyBenefits: [
      "Slash telecommunication costs by 50% to 80%",
      "Work from anywhere in Kenya or abroad with your office landline number",
      "Unlimited users per license—pay only for simultaneous call channels",
      "Never miss a high-value customer inquiry or sales call"
    ],
    idealFor: "Modern enterprises, hybrid/remote teams, call centers, customer service hubs, and growing businesses wanting low call costs.",
    techPartners: ["3CX", "Fanvil", "Microsoft"]
  },
  {
    id: "yeastar-phone-systems",
    slug: "yeastar-phone-systems",
    title: "Yeastar Business Phone Systems",
    badge: "Hardware & Hybrid Leader",
    iconName: "Headphones",
    shortDesc: "Enterprise-grade P-Series VoIP PBX paired with rugged Fanvil desk phones, call center analytics, and hybrid resilience.",
    fullDesc: "Yeastar P-Series PBX delivers reliable, carrier-grade unified communications engineered for modern businesses. Whether you prefer a dedicated on-premise hardware appliance for maximum autonomy or a high-availability cloud PBX, Clearcom pairs Yeastar with Fanvil IP desk phones and executive video terminals to create an unbeatable business telephony solution.",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Yeastar P-Series appliance (P550, P560, P570) or cloud PBX setup",
      "Linkus UC mobile, desktop, and web client unified applications",
      "Auto-provisioning for Fanvil X-Series, V-Series & H-Series hotel IP phones",
      "Hybrid PSTN, GSM, ISDN, and SIP trunk multi-carrier gateway support",
      "Advanced Call Center suite: real-time wallboard, SLA alerts, queue callbacks",
      "Integrated audio conferencing, visual voicemail, and operator panel",
      "Multi-site branch office telephone networking with free internal calls",
      "Fanvil IP video intercoms, paging horns, and executive touch-screen consoles",
      "Complete structured telephony cabling, rack mounting & Kenyan SLA support"
    ],
    keyBenefits: [
      "Rock-solid hardware reliability with zero cloud dependency if needed",
      "Native auto-provisioning saves hours of deployment time",
      "Rich call center performance analytics and agent metrics out-of-the-box",
      "Seamless upgrade path from traditional PSTN/GSM lines to fiber SIP trunks"
    ],
    idealFor: "Offices, manufacturing facilities, hotels, hospitals, multi-branch banks, and organizations preferring dedicated appliance hardware.",
    techPartners: ["Yeastar", "Fanvil"]
  },
  {
    id: "it-consulting",
    slug: "it-consulting-support",
    title: "IT Consulting & Strategy",
    badge: "Executive Advisory",
    iconName: "Compass",
    shortDesc: "Strategic technology roadmaps, vendor management, IT infrastructure audits, and vCIO guidance to drive growth.",
    fullDesc: "Technology should propel your business forward, not drag it down. Clearcom provides strategic IT consulting and Virtual Chief Information Officer (vCIO) services. We assess your existing IT architecture, identify security and workflow bottlenecks, design future-proof technology roadmaps, and optimize vendor contracts.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Comprehensive IT infrastructure, security & compliance audits",
      "Dedicated Virtual CIO (vCIO) strategic guidance and quarterly reviews",
      "3- to 5-year technology roadmapping aligned with your growth goals",
      "IT budgeting, CAPEX/OPEX cost optimization, and licensing audits",
      "Vendor evaluation, procurement negotiation, and ISP contract review",
      "Business continuity, disaster recovery, and risk assessment planning",
      "Staff technology adoption frameworks and security training"
    ],
    keyBenefits: [
      "Avoid costly technology procurement mistakes and over-licensing",
      "Align IT investments directly with measurable business profitability",
      "Gain executive-level IT leadership without executive-salary overhead",
      "Uncover hidden security vulnerabilities before bad actors exploit them"
    ],
    idealFor: "Growing SMEs, executive leadership teams, non-profits, and institutions seeking strategic technology direction.",
    techPartners: ["Microsoft", "Sophos", "Kaseya"]
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity-data-protection",
    title: "Cybersecurity & Data Protection",
    badge: "High Threat Defense",
    iconName: "Lock",
    shortDesc: "Multi-layered defense with Sophos Intercept X, Bitdefender GravityZone, next-gen firewalls, and anti-phishing protection.",
    fullDesc: "Kenyan businesses face escalating cyber threats—from sophisticated email spear-phishing and ransomware attacks to insider data leaks. Clearcom designs multi-layered, zero-trust security architectures utilizing industry leaders Sophos and Bitdefender to safeguard your confidential files, customer records, and banking credentials.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Sophos Intercept X Advanced with Deep Learning & EDR/XDR",
      "Bitdefender GravityZone Business Security Enterprise",
      "Next-generation hardware firewalls (Sophos XGS) with deep packet inspection",
      "Enterprise email protection: anti-spam, spoofing protection (SPF/DKIM/DMARC)",
      "Real-time ransomware rollback and cryptographic file locking shields",
      "Employee simulated phishing testing and security awareness training",
      "Vulnerability assessments, network penetration tests & Kenya Data Protection compliance"
    ],
    keyBenefits: [
      "Prevent costly ransomware extortions and catastrophic data losses",
      "Protect your brand reputation and client confidentiality",
      "Comply with Kenya Data Protection Act (KDPA) regulatory requirements",
      "24/7 automated threat containment before attacks spread across your LAN"
    ],
    idealFor: "Financial firms, legal practices, healthcare providers, e-commerce, and any company holding sensitive customer data.",
    techPartners: ["Sophos", "Bitdefender", "Microsoft"]
  },
  {
    id: "backup-recovery",
    slug: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    badge: "Business Continuity",
    iconName: "Database",
    shortDesc: "Automated Acronis & Kaseya cloud backups, instant server virtualization, and guaranteed 15-minute recovery point.",
    fullDesc: "Hardware fails, fires occur, and ransomware strikes without warning. Can your business survive losing its financial databases or ERP systems? Clearcom's Backup & Disaster Recovery solutions provide immutable, automated backups stored securely both on-site and in encrypted tier-IV cloud repositories.",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Acronis Cyber Protect Cloud automated hybrid backup (Local + Cloud)",
      "Kaseya Unified Backup for physical servers, virtual machines & endpoints",
      "Immutable, ransomware-proof cloud storage with 256-bit AES encryption",
      "Microsoft 365 cloud-to-cloud backup (Exchange, SharePoint, OneDrive, Teams)",
      "Disaster recovery virtualization: spin up servers in the cloud within 15 minutes",
      "Automated scheduled disaster recovery testing & verification reports",
      "Dedicated Kenyan disaster recovery engineers on standby"
    ],
    keyBenefits: [
      "Near-zero data loss with aggressive Recovery Point Objectives (RPO)",
      "Resume operations in minutes instead of weeks after catastrophic events",
      "Immunity from ransomware demands thanks to immutable restore points",
      "Peace of mind knowing backups are tested and verified continuously"
    ],
    idealFor: "Enterprises with mission-critical ERPs, accounting systems, legal archives, and medical records.",
    techPartners: ["Acronis", "Kaseya", "Microsoft"]
  },
  {
    id: "cloud-microsoft-365",
    slug: "cloud-microsoft-365-solutions",
    title: "Cloud & Microsoft 365 Solutions",
    badge: "Certified CSP",
    iconName: "Cloud",
    shortDesc: "Official Microsoft 365 licensing, Azure cloud migration, SharePoint document management, and Entra ID security.",
    fullDesc: "Accelerate your team's productivity with modern cloud workspaces. As a certified Microsoft Cloud Solution Provider (CSP), Clearcom handles official licensing, seamless email migration from cPanel/Google Workspace, SharePoint intranet structuring, and Microsoft Azure cloud server deployments.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Microsoft 365 Business Basic, Standard & Premium licensing & renewal",
      "Zero-downtime email migration to Microsoft Exchange Online",
      "SharePoint Online document management architecture & access permissions",
      "OneDrive for Business configuration with automatic desktop backup",
      "Microsoft Teams deployment for voice, video, and internal collaboration",
      "Microsoft Entra ID (Azure AD) Single Sign-On and Multi-Factor Auth (MFA)",
      "Microsoft Azure cloud server migrations (Windows Server, Linux, SQL)"
    ],
    keyBenefits: [
      "Empower employees to collaborate securely from any device or location",
      "Local Kenyan invoicing with transparent pricing and flexible renewals",
      "Eliminate noisy on-premise server power bills and maintenance hassles",
      "Enterprise-grade email deliverability and anti-spam protection"
    ],
    idealFor: "Businesses moving from legacy webmail or physical on-premise file servers to modern collaborative cloud workspaces.",
    techPartners: ["Microsoft"]
  },
  {
    id: "networking-wifi",
    slug: "networking-wifi-solutions",
    title: "Networking & Wi-Fi Infrastructure",
    badge: "High Performance",
    iconName: "Wifi",
    shortDesc: "High-density Ubiquiti & TP-Link Omada Wi-Fi 6/7, Cat6A structured cabling, enterprise switching, and multi-branch VPNs.",
    fullDesc: "A slow, dropped-connection network cripples daily business productivity. Clearcom designs and implements rock-solid wired and wireless networks built for high throughput, seamless roaming, and ironclad security using TP-Link Omada and Ubiquiti UniFi enterprise systems.",
    heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Enterprise Cat6 / Cat6A structured cabling with certified testing & labeling",
      "Ubiquiti UniFi & TP-Link Omada high-density Wi-Fi 6/7 access points",
      "Managed Gigabit, 2.5G & 10G PoE+ network switches and server racks",
      "Dual-WAN failover router setups (seamless Safaricom + Liquid/Zuku switching)",
      "Secure site-to-site IPsec / WireGuard VPNs connecting branch offices",
      "VLAN segregation for corporate, VoIP, CCTV, and guest Wi-Fi networks",
      "Professional Wi-Fi RF heatmapping and coverage optimization surveys"
    ],
    keyBenefits: [
      "Zero dead zones with seamless, intelligent Wi-Fi roaming across your office",
      "Uninterrupted internet uptime via automatic dual-ISP failover",
      "Bandwidth prioritization ensuring VoIP and video calls never stutter",
      "Clean, orderly server rack cabling that makes troubleshooting effortless"
    ],
    idealFor: "Offices, warehouses, schools, hotels, residential estates, and multi-story commercial buildings.",
    techPartners: ["Ubiquiti", "TP-Link"]
  },
  {
    id: "cctv-security",
    slug: "cctv-security-systems",
    title: "CCTV & Physical Security Systems",
    badge: "Surveillance & Access",
    iconName: "Video",
    shortDesc: "Hikvision AI ColorVu surveillance, high-definition NVR recording, biometric access control, and mobile remote monitoring.",
    fullDesc: "Protect your physical premises, assets, and personnel with intelligent security systems. Clearcom installs commercial Hikvision CCTV with 24/7 full-color night vision, AI-driven vehicle and human intrusion detection, smart NVR recording, and biometric door access systems with integrated time-and-attendance.",
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Hikvision ColorVu HD & 4K IP cameras with 24/7 vivid color night vision",
      "Network Video Recorders (NVR) with high-endurance surveillance hard drives",
      "Secure mobile app live viewing & instant push motion alert configuration",
      "AI human and vehicle classification (eliminates false insect/wind alarms)",
      "Biometric fingerprint, facial recognition & RFID card door access control",
      "Automated employee time-and-attendance software integration with payroll",
      "Surge protection, power backup (UPS), and tidy structured conduit cabling"
    ],
    keyBenefits: [
      "Monitor your premises live from anywhere in the world on your smartphone",
      "Deter theft, vandalism, and unauthorized intrusion with visible smart cameras",
      "Automate accurate payroll attendance and eliminate buddy-punching",
      "High-definition video evidence accepted for legal and insurance claims"
    ],
    idealFor: "Offices, retail stores, manufacturing warehouses, educational institutions, and secure commercial facilities.",
    techPartners: ["Hikvision"]
  },
  {
    id: "hardware-procurement",
    slug: "hardware-procurement-integration",
    title: "Hardware Procurement & Integration",
    badge: "Enterprise Supply",
    iconName: "Laptop",
    shortDesc: "Official Dell, HP, Lenovo enterprise laptops, desktops, servers, and Logitech video conferencing solutions with warranty.",
    fullDesc: "Stop buying grey-market consumer hardware that breaks down after a few months. Clearcom procures authentic, enterprise-grade business laptops, high-performance desktops, rackmount servers, and conference room systems directly from certified distributors of Dell, HP, Lenovo, and Logitech.",
    heroImage: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Business-grade laptops & desktops (Dell Latitude/OptiPlex, HP EliteBook, Lenovo ThinkPad)",
      "Enterprise server supply & configuration (Dell PowerEdge, HP ProLiant)",
      "Logitech Rally, MeetUp & Tap conference room video systems",
      "Complete pre-delivery setup: OS hardening, custom imaging & software installation",
      "Genuine manufacturer warranty support and local parts replacement",
      "Network printers, multi-function scanners, and enterprise UPS battery backups",
      "Eco-friendly decommissioning and secure certified data sanitization of old PCs"
    ],
    keyBenefits: [
      "100% genuine equipment backed by official local Kenyan manufacturer warranties",
      "Turnkey deployment: computers arrive fully configured and ready for user login",
      "Save money with volume corporate pricing and flexible payment terms",
      "Standardize your company hardware fleet for simplified IT administration"
    ],
    idealFor: "Companies onboarding staff, setting up modern conference boardrooms, or refreshing aging computing infrastructure.",
    techPartners: ["Dell", "HP", "Lenovo", "Logitech"]
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
