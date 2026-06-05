'use client';
import styles from './profile.module.css';
import Button from '@/components/Button/button';
import { users } from '@/tests/example-data/profile';
import {following} from '@/tests/example-data/following';
import {followers} from '@/tests/example-data/followers';
import { FaRegHeart, FaUserCheck, FaUser, FaPlus } from "react-icons/fa6";
import { useState } from 'react';

function ProfileTab() {
    return (
        <div className={styles.profileContent}>Profile</div>
    )
}

function FollowersTab() {
    return (
        <div className={styles.followContent}>
            {followers.map((user) => (

                <div key={user.id} className={styles.followItem}>
                    <img src={user.profilePicture} alt={user.displayName} className={styles.followImg} />
                    <div className={styles.followInfo}>
                        <div className={styles.followName}>{user.displayName}</div>
                        <div className={styles.followUsername}>@{user.username}</div>
                    </div>
                    {user.following ? <div className={styles.unfollowButton}><Button>Remove</Button></div> : <div className={styles.followButton}><Button variant='smallIcon'><FaPlus size={12}/>Add</Button></div>}
                    
                </div>
            ))}
        </div>
    )
}

function FollowingTab() {
    return (
        <div className={styles.followContent}>
            {following.map((user) => (

                <div key={user.id} className={styles.followItem}>
                    <img src={user.profilePicture} alt={user.displayName} className={styles.followImg} />
                    <div className={styles.followInfo}>
                        <div className={styles.followName}>{user.displayName}</div>
                        <div className={styles.followUsername}>@{user.username}</div>
                    </div>
                    <div className={styles.unfollowButton}><Button>Remove</Button></div>
                    
                </div>
            ))}
        </div>
    )
}

export default function Profile() {
    const [activeTab, setActiveTab] = useState('profile');

    const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Handle navigation button clicks (e.g., switch between profile, followers, following)
        setActiveTab(event.currentTarget.id);
    }

    return(
        <div className={styles.container}>
            <div className={styles.profileHeadContainer}>
                <img src="/background.png" alt="Bird Feed" className={styles.profileHeadImg}></img>
                <div className={styles.profileInfoContainer}>
                    <img className={styles.profileImg} src={users[0].profilePicture} alt="Profile" />
                    <div className={styles.userStats}>
                        <div className={styles.statItem}><div><FaRegHeart className={styles.icon} size={16}/></div><div className={styles.statNumber}>{users[0].followers}</div> <div className={styles.statLabel}>Followers</div></div>
                        <div className={styles.statItem}><div><FaUserCheck className={styles.icon} size={16}/></div><div className={styles.statNumber}>{users[0].following}</div> <div className={styles.statLabel}>Following</div></div>
                    </div>
                    
                </div>
                <div className={styles.profileNavContainer}>
                    <div className={activeTab === 'profile' ? styles.activeNavItem : styles.profileNavItem}>
                        <Button variant='icon' onClick={handleNavClick} id='profile'>
                            <div><FaUser className={styles.icon} size={16}/></div>
                            Profile
                        </Button>
                    </div>
                    <div className={activeTab === 'followers' ? styles.activeNavItem : styles.profileNavItem}>
                        <Button variant='icon' onClick={handleNavClick} id='followers'>
                            <div><FaRegHeart className={styles.icon} size={16}/></div>
                            Followers
                        </Button>
                    </div>
                    <div className={activeTab === 'following' ? styles.activeNavItem : styles.profileNavItem}>
                        <Button variant='icon' onClick={handleNavClick} id='following'>
                            <div><FaUserCheck className={styles.icon} size={16}/></div>
                            Following
                        </Button>
                    </div>
                </div>
            </div>
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'followers' && <FollowersTab />}
                {activeTab === 'following' && <FollowingTab />}
          
        </div>
    )
}