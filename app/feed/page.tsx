'use client';
import styles from './feed.module.css';
import Button from '@/components/Button/button';
import { FaImages } from "react-icons/fa6";
import Input from '@/components/Input/input';
import {posts} from '@/tests/example-data/posts';
import {users} from '@/tests/example-data/profile';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa6";

export default function Feed() {

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("You liked this post!")
  }  
  const handleComment = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("You want to comment this post!")
  }  

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
          <div className={styles.postContainer} key={post.id}>
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
              {post.type === "sighting" && <div>Spotted a <a href="https://www.google.com" className={styles.birdLink}>{post.bird.commonName}</a> at {post.location.name}</div>}
             </div>
             {post.media.length > 0 && <div className={styles.postMedia}>
              {post.media.map((mediaUrl, index) => {
                return <img key={index} className={styles.postMediaImg} src={mediaUrl} alt={`Post media ${index + 1}`} />
              })}
              </div>}
             <div className={styles.postActions}><Button variant="action" onClick={handleLike} id={post.id}><FaRegHeart size={20}/> Like</Button><Button variant="action" onClick={handleComment}><FaRegCommentDots size={20}/> Comment</Button></div>
          </div>
        )
      })}
    </div>
  );
}