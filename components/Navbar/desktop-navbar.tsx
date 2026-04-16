import styles from './desktop-navbar.module.css';
import Link from 'next/link';

import { pageContent } from '@/public/textConstants';
import Button from '../Button/button';

export default function DesktopNavBar({loggedIn = false}: {loggedIn?: boolean}) {
  return (
    <nav className={styles.navBar}>
       {loggedIn ? <ul className={styles.desktopNav}>
        {pageContent.header.navLinksLoggedIn.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
            </ul> : <ul className={styles.desktopNav}>
                 {pageContent.header.navLinksLoggedOut.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li key="login" className={styles.navItemLoginBtn}>
            <Link href="/login">Login</Link>
          </li>
            </ul>}
    </nav>
  );
}