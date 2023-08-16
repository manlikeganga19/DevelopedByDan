import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoIosArrowRoundForward,
  IoIosAttach,
} from "react-icons/io";

// import Logo from './assets/Logo.jpg';
import FurnitureLand from "./assets/furnitureland.jpg";
import HomeLand from "./assets/Homeland.jpg";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "projects",
    href: "project",
  },
  {
    name: "contact",
    href: "contact",
  },
];
export const hero = {
  title: "Software developer and designer",
  subtitle:
    "Welcome to my corner of the digital realm! I'm thrilled to have you here. I'm Daniel, a passionate software developer and creative designer on an exhilarating journey to transform ideas into elegant, functional, and user-centric digital experiences.",
  buttonText: "Check My Work",
};
export const stats = [
  {
    value: "2+",
    text: "Years of experience",
  },
  {
    value: "5+",
    text: "projects built from scratch",
  },
  {
    value: "2",
    text: "projects contributed in",
  },
  {
    value: '2',
    text: 'projects contributed in'
  }
];

export const projects = {
  title: "projects i have built",
  subtitle: "Get my latest projects with source code immediately",
  link: "check out",
  icon: <IoIosArrowRoundForward />,
  projects: [
    {
      name: "furnitureland",
      image: <FurnitureLand />,
      icon: <IoIosAttach />,
    },
    {
      name: "Homeland",
      image: <HomeLand />,
      icon: <IoIosAttach />,
    },
  ],
};

export const footer = {
  social: [
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoLinkedin />,
      href: "#",
    },
  ],
};
