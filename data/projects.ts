export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Road Infrastructure Development",
    category: "Infrastructure",
    description:
      "Construction and development of high-quality road infrastructure for Government authorities across Karnataka.",
    image: "/images/projects/HadagaliRoad.png",
    location: "Hadagali, Karnataka",
  },
  {
    id: 2,
    title: "Digital Connectivity Project",
    category: "Educational Technology",
    description:
      "Providing networking, digital infrastructure and connectivity solutions for Government educational institutions.",
    image: "/images/projects/BidarConnect.png",
    location: "Bidar, Karnataka",
  },
  {
    id: 3,
    title: "Government Recognition",
    category: "Corporate",
    description:
      "Recognition received for successful execution of Government infrastructure and educational technology initiatives.",
    image: "/images/projects/Recognition_Rishab.png",
    location: "Karnataka",
  },
];
