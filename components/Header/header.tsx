import styles from "./header.module.css";
import Link from "next/link";
// import Image from 'next/image';
// import hummingbird from '../../public/hummingbird.png';
import { pageContent } from "@/public/textConstants";
import MobileNavBar from "../Navbar/mobile-navbar";
import DesktopNavBar from "../Navbar/desktop-navbar";

// const imageStyle = {
//   borderRadius: '50%',
//   border: '1px solid #fff',
//   width: '200px',
//   height: 'auto',
//   alignItems: 'center',
//   justifyContent: 'center',
// }

export default function Header({ loggedIn = false }: { loggedIn?: boolean }) {
  return (
    <header className={styles.mainheader}>
      <div className={styles.logo}>
        {/* <img src ="/birdy-talk-logo.png" alt="Birdy Talk Logo" className={styles.logoImg}></img> */}
        {pageContent.header.mainTitle}
      </div>
      <DesktopNavBar loggedIn={loggedIn} />
      <MobileNavBar loggedIn={loggedIn} />
    </header>
  );
}
