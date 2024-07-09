import clsx from "clsx";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import Link from "next/link";

const MEDIA_LINKS = [
  {
    title: "Github",
    href: "https://github.com/stylessh/headless-motion",
    icon: Github,
  },
];

export function Header({ className }: { className?: string }) {
  return (
    <header className={clsx(styles.header, className)}>
      <h2 className={styles.title}>
        <Link href="/">headless-motion</Link>
      </h2>

      <ul className={styles.mediaLinks}>
        {MEDIA_LINKS.map(({ title, href, icon: Icon }) => (
          <li key={title}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <Icon size={20} />
              <span className="sr-only">{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
