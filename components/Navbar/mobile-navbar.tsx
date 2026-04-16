'use client';
import React from 'react';
import styles from './mobile-navbar.module.css';
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
// import Button from '@mui/material/Button';
import Button from '../Button/button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { pageContent } from '@/public/textConstants';

export default function MobileNavBar({loggedIn = false}: {loggedIn?: boolean}) {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
   const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>

       {loggedIn ? <ul className={styles.mobileNav}>
        <Button variant="menu" onClick={handleClick}><FaBars /></Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {pageContent.header.navLinksLoggedIn.map((link) => (
          <MenuItem key={link.href} onClick={handleClose}>
            <Link href={link.href}>{link.label}</Link>
          </MenuItem>
        ))}
        </Menu>
            </ul> : <ul className={styles.mobileNav}>
              {/* <Button variant="menu" onClick={handleClick}><FaBars /></Button> */}
              
              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {pageContent.header.navLinksLoggedOut.map((link) => (
          <MenuItem key={link.href} onClick={handleClose}>
            <Link href={link.href}>{link.label}</Link>
          </MenuItem>
        ))}
      </Menu>
                <li className={styles.navItem}><Link href="/login">Login</Link></li>
                {/* <li className={styles.navItem}><Link href="/register">Register</Link></li> */}
            </ul>}
    </nav>
  );
}