
export const introData = {
  logo: "/equinox.png",
  earthImage: "/earths.png",
  description: [
    "We are a technology-driven company specializing in improving your company's operations through enhanced services and customized transitions.",
    "We leverage our expertise in business process transformation and cultural transformation to help you stay ahead of the competition by fostering ongoing innovation, evolution, and seamless migration of data and processes to the cloud.",
  ],
  contact: {
    office: {
      title: "HEAD OFFICE",
      lines: [
        "Prestige Corniche, 62, Richmond Rd, Xavier Layout,",
        "Victoria Layout, Bengaluru, Karnataka 560025",
      ],
    },
    website: {
      title: "WEBSITE",
      url: "https://www.equinoxtechsolutions.com",
      label: "www.equinoxtechsolutions.com",
    },
    email: {
      title: "REACH US",
      address: "hello@equinoxtechsolutions.com",
    },
  },
};


export interface Category {
  name: string;
  icon: string;
}

export interface Service {
  heading: string;
  description: string;
  image: string;
  categories: Category[];
}

export const servicesData: Service[] = [
  {
    heading: "AR, VR, MR Application",
    description:
      "Equinox Tech Solutions stands at the forefront of the dynamic world of Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) applications. As a leading company in this domain, Equinox is committed to providing cutting-edge solutions that elevate immersive experience to new heights.",
    image: "/application/application.png",
    categories: [
      { name: "AR/VR/MR Consulting", icon: "/application/vr-technology.png" },
      { name: "Custom App Development", icon: "/application/web-development.png" },
      { name: "Content Development", icon: "/application/content.png" },
      { name: "Training and Simulations", icon: "/application/training.png" },
      { name: "Marketing and Advertising", icon: "/application/online-advertising.png" },
      { name: "AR/VR/MR Visualization", icon: "/application/technology.png" },
      { name: "API Integration", icon: "/application/integration.png" },
      { name: "AR/VR/MR Gaming", icon: "/application/game-controller.png" },
      { name: "Maintenance and Support", icon: "/application/system.png" },
      { name: "Hardware Solutions", icon: "/application/motherboard.png" },
    ]
  },
  {
    heading: "3D Modelling",
    description:
      "3D modeling creates digital representations of objects and environments, playing a crucial role in VR projects by creating immersive virtual environments, representing objects and characters, assigning textures and materials, simulating lighting effects, maintaining spatial understanding, and enabling user interaction for enhanced engagement in the VR experience.",
    image: "/3dModeling/3dModeling.png",
    categories: [
      { name: "Product Modeling", icon: "/3dModeling/cubes.png" },
      { name: "Architectural Visualization", icon: "/3dModeling/design.png" },
      { name: "Custom 3D Modeling Services", icon: "/3dModeling/3d-modeling.png" },
      { name: "Environmental Modeling", icon: "/3dModeling/sustainable.png" },
      { name: "Industrial Design", icon: "/3dModeling/prototype.png" },
      { name: "Medical Modeling", icon: "/3dModeling/modelling.png" },
      { name: "3D Printing Preparation", icon: "/3dModeling/model-preparation.png" },
      { name: "Virtual Reality & Augmented Reality", icon: "/3dModeling/virtual-tour.png" },
      { name: "Game Asset Creation", icon: "/3dModeling/gaming.png" },
      { name: "Character Modeling", icon: "/3dModeling/immersive.png" },
    ],
  },
  {
    heading: "UI/UX Design",
    description:
      "Equinox Tech Solutions offers innovative design services that prioritize delivering exceptional user experiences. We specialize in user- centered design, including in-depth user research, wire-framing, prototyping, visual design, usability testing, and ongoing support. Our goal is to ensure seamless digital product experience.",
    image: "/design/design.png",
    categories: [
      { name: "User Research", icon: "/design/research.png" },
      { name: "User Personas & Journey Mapping", icon: "/design/persona.png" },
      { name: "Visual Design", icon: "/design/visual-communication.png" },
      { name: "Wireframing & Prototyping", icon: "/design/prototype.png" },
      { name: "Information Architecture", icon: "/design/structure.png" },
      { name: "Interaction Design", icon: "/design/interface.png" },
      { name: "Responsive and Adaptive Design", icon: "/design/ui-design.png" },
      { name: "Usability Testing", icon: "/design/ab-testing.png" },
      { name: "UI/UX Audit and Optimization", icon: "/design/web-maintenance.png" },
      { name: "Design System Development", icon: "/design/web-design.png" },
    ],
  },
  {
    heading: "App Development",
    description:
      "Equinox Tech Solutions specializes in mobile app development, including hybrid, native, and progressive web apps. We use frameworks like React Native, Flutter, and lonic to create cross-platform apps for iOS and Android. Our focus is on delivering customized solutions with high quality and user-friendly experience.",
    image: "/development/development.png",
    categories: [
      { name: "Mobile App Strategy", icon: "/development/app.png" },
      { name: "UI UX Design", icon: "/development/web-design.png" },
      { name: "Native App Development", icon: "/development/native.png" },
      { name: "Hybrid App Development", icon: "/development/cloud-service.png" },
      { name: "Mobile Web App Development", icon: "/development/coding.png" },
      { name: "Backend Development", icon: "/development/web-development.png" },
      { name: "API Integration", icon: "/development/integration.png" }, // corrected from ΑΡΙ to API
      { name: "App Testing and Quality Assurance", icon: "/development/quality-control.png" },
      { name: "App Deployment and Maintenance", icon: "/development/deployment.png" },
      { name: "App Analytics and Monitoring", icon: "/development/trading.png" },
    ],
  },
  {
    heading: "Digital Branding Strategy",
    description:
      "Digital branding is using digital platforms and strategies to communicate a brand's identity, build a positive image, and establish a strong reputation online. It helps businesses reach and connect with their target audience, build trust and loyalty, and drive growth and success.",
    image: "/branding/branding.png",
    categories: [
      { name: "Brand Identity Development", icon: "/branding/branding1.png" },
      { name: "Website Design And Development", icon: "/branding/coding.png" },
      { name: "Content Strategy", icon: "/branding/content-writing.png" },
      { name: "Social Media Management", icon: "/branding/content.png" },
      { name: "Search Engine Optimization", icon: "/branding/seo.png" },
      { name: "Analytics and Reporting", icon: "/branding/monitor.png" },
      { name: "Online Reputation Management", icon: "/branding/reputation-management.png" },
      { name: "Email Marketing", icon: "/branding/email.png" },
      { name: "Pay-Per-Click (PPC) Advertising", icon: "/branding/pay-per-click.png" },
      { name: "Influencer Marketing", icon: "/branding/influencer.png" },
    ],
  },
  {
    heading: "Business Automation",
    description:
      "Equinox Tech Solutions offers custom automation solutions to streamline business processes. We specialize in developing tailored solutions that boost productivity, reduce costs, and eliminate manual tasks. Our team analyzes existing processes, identifies areas for improvement, and designs automated workflows using the latest technologies.",
    image: "/business/business.png",
    categories: [
      { name: "Business Process Analysis", icon: "/business/brifcase.png" },
      { name: "Robotic Process Automation", icon: "/business/robotic.png" },
      { name: "Workflow Automation", icon: "/business/strategy.png" },
      { name: "Document Management", icon: "/business/project.png" },
      { name: "Analytics and Reporting", icon: "/business/monitor.png" },
      { name: "Sales & Marketing Automation", icon: "/business/growth.png" },
      { name: "Data Integration & Data Migration", icon: "/business/data-processing.png" },
      { name: "CRM", icon: "/business/crm.png" },
      { name: "Inventory & Supply Chain Automation", icon: "/business/inventory-management.png" },
      { name: "Compliance & Regulatory", icon: "/business/compliant.png" },
    ],
  },
  {
    heading: "IT Consultation",
    description:
      "Equinox Tech Solutions' IT consulting services help accelerate technology success by delivering customized solutions that streamline software infrastructure and align IT with business objectives. Partnering with us modernizes technology infrastructure and drive sustainable growth in today's fast-paced business landscape.",
    image: "/consultation/consultation.png",
    categories: [
      { name: "IT Strategy Development", icon: "/consultation/it-consulting.png" },
      { name: "Creating a Path to Success", icon: "/consultation/promotion.png" },
      { name: "IT Infrastructure and Design", icon: "/consultation/information-technology.png" },
      { name: "IT Vendor Management", icon: "/consultation/provision.png" },
      { name: "Cybersecurity Consultation", icon: "/consultation/consulting.png" },
      { name: "IT Project Management", icon: "/consultation/manager.png" },
      { name: "Risk Management for Business", icon: "/consultation/risk.png" },
      { name: "Cloud Computing Consultation", icon: "/consultation/cloud-service.png" },
      { name: "Accelerating Digital Growth", icon: "/consultation/grow.png" },
      { name: "Ensuring IT Compliance", icon: "/consultation/update.png" },
    ],
  },
  {
    heading: "Cloud Solutions",
    description:
      "Unlock the power of the cloud with Equinox Tech Solutions' customized solutions. In today's rapidly evolving digital landscape, businesses need innovative technologies to stay competitive, and cloud solutions offer enhanced flexibility, scalability, and cost- efficiency.",
    image: "/cloud/cloud.png",
    categories: [
      { name: "Software as a Service", icon: "/cloud/web-development.png" },
      { name: "Infrastructure as a Service", icon: "/cloud/social-services.png" },
      { name: "Platform as a Service", icon: "/cloud/digital-platform.png" },
      { name: "Disaster Recovery as a Service", icon: "/cloud/disaster-recovery.png" },
      { name: "Cloud Storage", icon: "/cloud/cloud1.png" },
      { name: "Backup as a Service", icon: "/cloud/backup.png" },
      { name: "Cloud Security", icon: "/cloud/secure-data.png" },
      { name: "Cloud Migration", icon: "/cloud/migration.png" },
      { name: "Cloud Consulting", icon: "/cloud/cloud-computing.png" },
      { name: "Cloud Monitoring", icon: "/cloud/remote-access.png" },
    ],
  },
  {
    heading: "Quality Assurance Testing",
    description:
      "At Equinox, from QA consulting and test planning to manual and automated testing, performance and security testing, and usability testing, our team collaborates closely with clients to enhance the overall quality and performance of their software products",
    image: "/quality/quality.png",
    categories: [
      { name: "Functional Testing", icon: "/quality/functional.png" },
      { name: "Performance Testing", icon: "/quality/performance.png" },
      { name: "Security Testing", icon: "/quality/checklist.png" },
      { name: "Usability Testing", icon: "/quality/testing.png" },
      { name: "Compatibility Testing", icon: "/quality/sharing.png" },
      { name: "Regression Testing", icon: "/quality/regression.png" },
      { name: "Acceptance Testing", icon: "/quality/user-acceptance-testing.png" },
      { name: "Integration Testing", icon: "/quality/integration.png" },
      { name: "Exploratory Testing", icon: "/quality/medicine.png" },
      { name: "Automation Testing", icon: "/quality/testing1.png" },
    ],
  },
  {
    heading: "Digital Experience",
    description:
      "Digital experience refers to the overall experience that users have with digital products, services, and platforms, such as websites, mobile apps, social media, and other digital channels. It encompasses all aspects of a user's interaction with digital technology, including design, functionality, usability, accessibility, and performance.",
    image: "/digital/digital.png",
    categories: [
      { name: "Responsive Web Design", icon: "/digital/responsive.png" },
      { name: "User-Friendly Navigation", icon: "/digital/User-Friendly.png" },
      { name: "Personalization & Customization", icon: "/digital/personalization.png" },
      { name: "Interactive And Engaging Elements", icon: "/digital/interactive.png" },
      { name: "Marketing And Advertising", icon: "/digital/online-advertising.png" },
      { name: "Accessibility", icon: "/digital/accessibility.png" },
      { name: "Fast Page Load Times", icon: "/digital/fast-website.png" },
      { name: "Integration With Third-Party Services", icon: "/digital/connection.png" },
      { name: "Integration With Third-Party Services", icon: "/digital/technology.png" },
      { name: "Chatbot And Virtual Assistant", icon: "/digital/chatbot.png" },
    ]
  },
];
