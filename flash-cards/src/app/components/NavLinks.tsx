"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.scss";

export default function NavLinks() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/admin/new", label: "Admin" },
  ];

  return (
    <>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
