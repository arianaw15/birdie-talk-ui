'use client'

import Button from '../Button/button';
import styles from './side-drawer.module.css';
import { FaXmark } from "react-icons/fa6";

interface SideDrawerProps {
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  isOpen: boolean;
  birdData?: any;
}
export default function SideDrawer({ handleClose, id, isOpen = false, birdData}: SideDrawerProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && handleClose) {
      handleClose(event as any);
    }
  };

  if (isOpen) {
    return (
        <div className={styles.container} onClick={handleBackdropClick}>
          <div className={styles.drawerContainer}>
          <div className={styles.header}>
            {birdData?.bird?.image && <img key={id} className={styles.mainImg} src={birdData.bird.image} alt={`Main image ${id}`} />}
          </div>
          <div className={styles.body}>
            <div className={styles.drawerTitle}>{birdData.commonName}</div>
            <div className={styles.drawerSubtitle}>{birdData.scientificName}</div>

             <div className={styles.drawerFooter}>
            <Button onClick={handleClose} variant="sideDrawer"><FaXmark size={20}/> Close</Button>
           </div>
          </div>
          
          </div>
        
        </div>
    )
  }
  
   return
}