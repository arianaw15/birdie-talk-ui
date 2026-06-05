'use client';
import Button from "../Button/button";
import styles from "./side-nav.module.css";
import { FaRegNewspaper, FaDove, FaGear, FaUserGroup, FaUser } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { useAuth } from "../../app/auth-context";
import { users } from '@/tests/example-data/profile';
import { usePathname } from "next/navigation";

export default function SideNav() {
    const { loggedIn, setLoggedIn } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
    setLoggedIn(false);
    router.push('/');
}

const handleFeedClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push('/feed');
}

const handleBirdsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push('/birds');
}

const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push('/profile');
}

if (!loggedIn || pathname==='/createProfile') {
    return null; // Don't render the side nav if not logged in or the user is still creating their profile
}

return(
    <div className={styles.container}>
        <img className={styles.profileImg} src={users[0].profilePicture} alt="Profile" />
        <div className={styles.profileName}>{users[0].displayName}</div>
        <div className={styles.userName}>{users[0].username}</div>
        <div className={styles.navButtons}>
            <Button variant="icon" onClick={handleFeedClick}><FaRegNewspaper className={styles.icon} size={20}/>Bird Feed</Button>
            <Button variant="icon" onClick={handleBirdsClick}><FaDove className={`${styles.icon} ${styles.birdIcon}`} size={20}/>My Birds</Button>
            <Button variant="icon" onClick={handleProfileClick}><FaUser className={styles.icon} size={20}/>Profile</Button>
            <Button variant="icon"><FaGear className={styles.icon} size={20}/>Settings</Button>
        </div>
        <div className={styles.logoutBtn}>
            <Button variant="logout" onClick={handleClick}>Logout</Button>
        </div>
    </div>
)
}