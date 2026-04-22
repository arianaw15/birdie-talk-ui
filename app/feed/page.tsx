import styles from './feed.module.css';
import Button from '@/components/Button/button';
import { FaImage } from "react-icons/fa6";
import { FaImages } from "react-icons/fa6";
import Input from '@/components/Input/input';

export default function Feed() {
  return (
    <div className={styles.container}>
      <div className={styles.newPostContainer}>
        <div className={styles.newPostProfile}>
          <img className={styles.postProfileImg} src="/profile-example.jpg" alt="Profile" />
          <div className={styles.inputContainer}> <div className={styles.inputBox}><Input placeholder="Share something..." variant="post" /></div></div>
</div>
    <div className={styles.media}>
      <div className={styles.addMediaBtn}><Button variant="icon"><FaImages className={styles.icon} size={20}/>Add photos</Button></div>
      
      <div className={styles.postBtn}><Button variant="post"> Post</Button></div>
    </div>

      </div>
    </div>
  );
}