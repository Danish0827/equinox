
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
// lib/Data.ts

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
    heading: "3D Modeling",
    description:
      "3D modeling creates digital representations of objects and environments, playing a crucial role in VR projects by creating immersive virtual environments, representing objects and characters, assigning textures and materials, simulating lighting effects, maintaining spatial understanding, and enabling user interaction for enhanced engagement in the VR experience.",
    image: "/application/application.png",
    categories: [
      { name: "Product Modeling", icon: "/3dModeling/product.png" },
      { name: "Architectural Visualization", icon: "/3dModeling/architecture.png" },
      { name: "Custom 3D Modeling Services", icon: "/3dModeling/custom.png" },
      { name: "Environmental Modeling", icon: "/3dModeling/environment.png" },
      { name: "Industrial Design", icon: "/3dModeling/industrial.png" },
      { name: "Medical Modeling", icon: "/3dModeling/medical.png" },
      { name: "3D Printing Preparation", icon: "/3dModeling/print.png" },
      { name: "Virtual Reality & Augmented Reality", icon: "/3dModeling/vrar.png" },
      { name: "Game Asset Creation", icon: "/3dModeling/game.png" },
      { name: "Character Modeling", icon: "/3dModeling/character.png" },
    ],
  },
  {
    heading: "Animation & Rigging",
    description:
      "Animation and rigging breathe life into 3D models, enabling character movement, realistic simulations, and engaging storytelling. Essential for games, films, and interactive media, they allow models to perform actions, express emotions, and react dynamically in virtual worlds.",
    image: "/3dModeling/3dModeling.png",
    categories: [
      { name: "Character Rigging", icon: "/3dModeling/cubes.png" },
      { name: "Facial Animation", icon: "/3dModeling/cubes.png" },
      { name: "Motion Capture", icon: "/3dModeling/cubes.png" },
      { name: "Physics Simulation", icon: "/3dModeling/cubes.png" },
      { name: "Game Animation", icon: "/3dModeling/cubes.png" },
      { name: "Character Rigging", icon: "/3dModeling/cubes.png" },
      { name: "Facial Animation", icon: "/3dModeling/cubes.png" },
      { name: "Motion Capture", icon: "/3dModeling/cubes.png" },
      { name: "Physics Simulation", icon: "/3dModeling/cubes.png" },
      { name: "Game Animation", icon: "/3dModeling/cubes.png" },
    ],
  },
   {
    heading: "Animation & Rigging",
    description:
      "Animation and rigging breathe life into 3D models, enabling character movement, realistic simulations, and engaging storytelling. Essential for games, films, and interactive media, they allow models to perform actions, express emotions, and react dynamically in virtual worlds.",
    image: "/design/design.png",
    categories: [
      { name: "Character Rigging", icon: "/3dModeling/cubes.png" },
      { name: "Facial Animation", icon: "/3dModeling/cubes.png" },
      { name: "Motion Capture", icon: "/3dModeling/cubes.png" },
      { name: "Physics Simulation", icon: "/3dModeling/cubes.png" },
      { name: "Game Animation", icon: "/3dModeling/cubes.png" },
      { name: "Character Rigging", icon: "/3dModeling/cubes.png" },
      { name: "Facial Animation", icon: "/3dModeling/cubes.png" },
      { name: "Motion Capture", icon: "/3dModeling/cubes.png" },
      { name: "Physics Simulation", icon: "/3dModeling/cubes.png" },
      { name: "Game Animation", icon: "/3dModeling/cubes.png" },
    ],
  },
];
