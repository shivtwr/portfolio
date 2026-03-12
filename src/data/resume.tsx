import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shiv Ji Tiwari",
  initials: "ST",
  url: "https://shivtiwari.com",
  location: "Lucknow, India",
  locationLink: "https://maps.app.goo.gl/kWPEHbkuwcJ2iEQX6",
  description: "Fullstack Developer & DeFi Enthusiast",
  summary:
    "2025 grad, constantly building and learning in the Fullstack & Web3 space. I like to own the process end-to-end, from crafting intuitive and sleek UIs to ensuring smooth distribution.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Solidity",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "mail.shivtiwari@gmail.com",
    tel: "+918471040291",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivtwr",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivjitiwari/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shivtwr",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@shiv.tiwaari",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mail.shivtiwari@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "",
      badges: [],
      location: "",
      title: "Associate Software Engineer",
      logoUrl: "/accenture.png",
      start: "March 2026",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "SRMU",
      href: "https://srmu.ac.in",
      degree: "Bachelor of Computer Application",
      logoUrl: "/srmu.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Solana Token Launchpad",
      href: "https://token-launch-shiv.netlify.app/",
      dates: "Sept 2025",
      active: true,
      description:
        "A dapp to launch your own tokens on the Solana blockchain. Attached metadata is uploaded to IPFS via Pinata.",
      technologies: [
        "React.js",
        "Typescript",
        "@solana/web3.js",
        "AWS EC2",
        "Pinata IPFS",
        "TailwindCSS",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/token-launchpad.png",
      video: "",
    },
  ],
} as const;
