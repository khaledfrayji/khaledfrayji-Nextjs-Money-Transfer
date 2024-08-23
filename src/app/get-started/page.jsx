"use client";
import { useState, useEffect } from "react";
import styles from "./GetStarted.module.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function GetStarted() {
  const [amountVisible, setAmountVisible] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (!email) {
      router.replace(`/login?message=Please login to get started`);
    } else {
      setUserEmail(email);
    }
  }, [router]);

  const toggleAmountVisibility = () => {
    setAmountVisible(!amountVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardBackgroundText}>Global</div>
          <div className={styles.cardTop}>
            <span className={styles.cardAmount}>
              {amountVisible ? "$1,234.56" : "••••••••"}
            </span>
            <span className={styles.eyeIcon} onClick={toggleAmountVisibility}>
              <img src="/tool.png" alt="" />
            </span>
          </div>
          <div className={styles.cardDetails}>
            <p className={styles.cardId}>ID: 1234 5678 9012 3456</p>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href={'/send-money'} className={styles.sendButton}>Send Money</Link>
      </div>
    </div>
  );
}
