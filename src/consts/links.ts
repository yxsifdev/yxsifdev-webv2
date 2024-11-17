import Discord from "@/icons/Discord.astro";
import Github from "@/icons/Github.astro";
import X from "@/icons/X.astro";
import Instagram from "@/icons/Instagram.astro";
import File from "@/icons/File.astro";
import ProjectIcon from "@/icons/Project.astro";

export const links = [
  { Icon: Discord, url: "https://discord.com" },
  { Icon: Github, url: "https://github.com/yxsifdev" },
  { Icon: X, url: "https://x.com/yxsifdev" },
  { Icon: Instagram, url: "https://instagram.com/yxsif.dev" },
];

export const NavRedirect = [
  {
    Icon: ProjectIcon,
    label: "Proyectos",
    to: "/projects",
  },
  {
    Icon: File,
    label: "Otros",
    to: "/others",
  },
];
