import styles from './home.module.css';
import { pageContent } from '@/public/textConstants';
import Button from '@/components/Button/button';

export default function Home({loggedIn = false}: {loggedIn?: boolean}) {
  return (
    <div className={styles.container}>
      {loggedIn && <div className={styles.loggedInIndicator}>Logged in</div>}
        {!loggedIn && <div className={styles.loggedOutIndicator}> <div className={styles.bannerContainer}>
             <div className={styles.titleContainer}>
              <img src="/secretary-bird-2.png" alt="Bird Feed" className={styles.mainBirdImg}></img>
              
        <div className={styles.title}><div className={styles.titleText}>{pageContent.homePage.mainTitle}</div>
          {/* <div className={styles.subtitle}>{pageContent.homePage.subHeader}</div> */}
          <div className={styles.buttonContainer}>
              <Button variant="signup">{pageContent.homePage.signupButtonText}</Button>
              <Button variant="login">{pageContent.homePage.loginButtonText}</Button>
              </div>
        </div>
        
        </div>
        </div>
       
        {/* <div className={styles.contentContainer}>
            <div className={styles.cardContainer}>
                <div className={styles.textContainer}>
                    <div className={styles.callToAction}>{pageContent.homePage.callToAction}</div>
                    <div><Button variant="signup">{pageContent.homePage.topButtonText}</Button></div>
                </div>
                <div className={styles.imageContainer}><img src="/bird-feed.png" alt="Bird Feed" className={styles.birdFeedImg}></img></div>
            </div>
        </div> */}
        </div>
        }
       
    </div>
  );
}