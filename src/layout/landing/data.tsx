import {
  IconDiscord,
  IconMedium,
  IconTelegram,
  IconTwitter,
} from "../../components";
import { FaLinkedin } from "react-icons/fa6";


export const navLinkData = [
  {
    label: "Home",
    to: "#home",
  },
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Tokenomics",
    to: "#tokenomics",
  },
  {
    label: "Roadmap",
    to: "#roadmap",
  },
  {
    label: "Whitepaper",
    to: "https://gamerhub-2.gitbook.io/gamerhub-whitepaper-v1/",
  },
];

export const socialLinks = [
  {
    icon: <IconTelegram />,
    link: "#",
  },
  {
    icon: <IconDiscord />,
    link: "#",
  },
  {
    icon: <IconTwitter />,
    link: "#",
  },
  {
    icon: <IconMedium />,
    link: "#",
  },
  {
    icon: <FaLinkedin size={20} />,
    link: "#",
  },
];
