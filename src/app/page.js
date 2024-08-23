import Footer from '../../components/Footer';
import styles from './page.module.css';


export default function Home() {
  return (
    <>
     
      <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Send Money or <span className={styles.highlight}>Receive Payments</span> Globally
        </h1>
        <p className={styles.subtitle}>
          Experience fast, secure, and reliable international money transfers at the best rates. Trusted by millions worldwide.
        </p>
        <a href="/get-started" className={styles.getStartedBtn}>
          Get Started
        </a>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Where do you want to send money?"
            className={styles.searchInput}
          />
      
        </div>
        <div className={styles.regularUsers}>
          <div className={styles.userIcons}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className={styles.userIcon} />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" className={styles.userIcon} />
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="User 3" className={styles.userIcon} />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User 4" className={styles.userIcon} />
        
          </div>
          <p className={styles.userCount}>
            45k+ Regular Users. <a href="/view-price-plan" className={styles.highlight}>View Price Plan</a>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/money-transfer.png" alt="Money Transfer" /> 
      </div>
      
    </div>
    <Footer/>
    </>
   
  );
}
