import styles from './feed.module.css';
import Button from '@/components/Button/button';
import { FaImages } from "react-icons/fa6";
import Input from '@/components/Input/input';
import {posts} from '@/tests/example-data/posts';
import {users} from '@/tests/example-data/profile';

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
      {posts.map((post) => {
        return(
          <div className={styles.postContainer}>
            {users.map((user) => {
              if (user.id === post.userId) {
                return (
                <div className={styles.postProfile} key={user.username}>
                  <img className={styles.postProfileImg} src={user.profilePicture} alt={user.displayName} />
                  <div className={styles.postNameTime}><div className={styles.postDisplayName}>{user.displayName}</div><div className={styles.postTime}>{post.time}</div></div>
                </div>
              )
              }
              
             })}
             <div className={styles.postText}>
              {post.type === "freeform" && <div>{post.text}</div>}
              {post.type === "sighting" && <div>Spotted a {post.bird.commonName} at {post.location.name}</div>}
             </div>
             {post.media.length > 0 && <div className={styles.postMedia}>
              {post.media.map((mediaUrl, index) => {
                return <img key={index} className={styles.postMediaImg} src={mediaUrl} alt={`Post media ${index + 1}`} />
              })}
              </div>}
             <div></div>
          </div>
        )
      })}
    </div>
  );
}