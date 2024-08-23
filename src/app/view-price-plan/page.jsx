// pages/view-price-plan.js
import styles from './page.module.css';

export default function ViewPricePlan() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Pricing Plans</h1>
      <p className={styles.subtitle}>
        Choose the plan that best suits your needs. All plans offer fast and secure transactions with no hidden fees.
      </p>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Basic Plan</h2>
          <p className={styles.planPrice}>$5.00 per transfer</p>
          <ul className={styles.planFeatures}>
            <li>Up to $500 per transfer</li>
            <li>Standard delivery time</li>
            <li>Basic support</li>
          </ul>
          <a href="#" className={styles.planBtn}>Get Started</a>
        </div>
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Standard Plan</h2>
          <p className={styles.planPrice}>$10.00 per transfer</p>
          <ul className={styles.planFeatures}>
            <li>Up to $1,000 per transfer</li>
            <li>Faster delivery time</li>
            <li>Priority support</li>
          </ul>
          <a href="#" className={styles.planBtn}>Get Started</a>
        </div>
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Premium Plan</h2>
          <p className={styles.planPrice}>$20.00 per transfer</p>
          <ul className={styles.planFeatures}>
            <li>Unlimited transfer amount</li>
            <li>Instant delivery</li>
            <li>24/7 support</li>
          </ul>
          <a href="#" className={styles.planBtn}>Get Started</a>
        </div>
      </div>
    </div>
  );
}
