"use client";
import styles from "./header.module.css";
import Link from "next/link";
// import Image from 'next/image';
// import hummingbird from '../../public/hummingbird.png';
import { pageContent } from "@/public/textConstants";
import MobileNavBar from "../Navbar/mobile-navbar";
import DesktopNavBar from "../Navbar/desktop-navbar";
import { usePathname } from 'next/navigation';
import { useAuth } from "../../app/auth-context";

// const imageStyle = {
//   borderRadius: '50%',
//   border: '1px solid #fff',
//   width: '200px',
//   height: 'auto',
//   alignItems: 'center',
//   justifyContent: 'center',
// }

export default function Header() {
  const pathname = usePathname();
  const { loggedIn } = useAuth();

  const hiddenRoutes = ["/login", "/signup"];

  if (pathname && hiddenRoutes.includes(pathname)) {
    return null; // Don't render the header on login and signup pages
  }

  if (loggedIn) {
    return null;
  }

  return (
    <header className={styles.mainheader}>
      <div className={styles.logo}>
        <a href="/">{pageContent.header.mainTitle}</a>
      </div>
      <DesktopNavBar loggedIn={loggedIn} />
      <MobileNavBar loggedIn={loggedIn} />
    </header>
  );
}
