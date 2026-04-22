'use client';
import styles from './home.module.css';
import { pageContent } from '@/public/textConstants';
import Button from '@/components/Button/button';
import { useRouter } from 'next/navigation';
import { useAuth } from './auth-context';

export default function Home() {
const router = useRouter();
const { loggedIn } = useAuth();

const handleSignupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push('/signup')
  }  

const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push('/login')
  }

  return (
    <div className={styles.container}>
      {loggedIn && <div className={styles.loggedInIndicator}>Logged in</div>}
        {!loggedIn && <div className={styles.loggedOutIndicator}> <div className={styles.bannerContainer}>
             <div className={styles.titleContainer}>
              <img src="/secretary-bird-2.png" alt="Bird Feed" className={styles.mainBirdImg}></img>
        <div className={styles.title}><div className={styles.titleText}>{pageContent.homePage.mainTitle}</div>
          <div className={styles.buttonContainer}>
              <Button variant="signup" onClick={handleSignupClick}>{pageContent.homePage.signupButtonText}</Button>
              <Button variant="login" onClick={handleLoginClick}>{pageContent.homePage.loginButtonText}</Button>
              </div>
        </div>
        </div>
        </div>
        </div>
        }
       <div className={styles.statsContainer}>
         <div className={styles.statsGrid}>
          {pageContent.homePage.statistics.map((stat) => {
            return(
              <div className={styles.statsCell} key={stat.label}>
            <div className={styles.statsTitle}>{stat.value}</div>
            <div className={styles.statsSubtitle}>{stat.label}</div>
          </div>
            )
          })}
         </div>
        </div>
        <div className={styles.overviewContainer}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              {pageContent.homePage.overview}
            </div>
            <div className={styles.overviewImgContainer}>
              <img src="/Bird-feed-v3.png" alt="Bird Feed" className={styles.birdFeedImg}></img>
            </div>
          </div>
          
        </div>
    </div>
  );
}