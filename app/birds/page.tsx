'use client'
import styles from './birds.module.css';
import Table from '@/components/Table/table';
import { pageContent } from "@/public/textConstants";
import {lifeList} from '@/tests/example-data/lifelist';
import { useState } from 'react';
import SideDrawer from '@/components/SideDrawer/side-drawer';

export default function Birds() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [sideDrawerContent, setSideDrawerContent] = useState({})
  const columns = pageContent.lifeListPage.columns;
  const handleActionClick = (bird: any, event: React.MouseEvent<HTMLButtonElement>) => {
    setSideDrawerOpen(true)
    setSideDrawerContent(bird)
  }

  const handleDrawerClose = () => {
    setSideDrawerOpen(false)
  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>Life List</div>
        <div className={styles.birdTable}>
            <Table columns={columns} data={lifeList} handleClick={handleActionClick}/>
            <SideDrawer isOpen={sideDrawerOpen} handleClose={handleDrawerClose} birdData={sideDrawerContent}/>
        </div>
    </div>
  );
}