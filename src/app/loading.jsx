
import styles from './loading.module.css'; 

export default function SkeletonLoader() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonSubtitle}></div>
      <div className={styles.skeletonButton}></div>
      <div className={styles.skeletonSearch}></div>
      <div className={styles.skeletonUserIcons}>
        <div className={styles.skeletonUserIcon}></div>
        <div className={styles.skeletonUserIcon}></div>
        <div className={styles.skeletonUserIcon}></div>
        <div className={styles.skeletonUserIcon}></div>
      </div>
    </div>
  );
}
