'use client';
import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css'; // Make sure you create and include this CSS file

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie exists
    const cookieAccepted = document.cookie.includes('cookiesAccepted=true');
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set a cookie to remember that the user has accepted cookies
    document.cookie = 'cookiesAccepted=true; path=/; max-age=31536000'; // Cookie expires in 1 year
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <p>This website uses cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      <button className={styles.acceptButton} onClick={acceptCookies}>Accept</button>
    </div>
  );
};

export default CookieBanner;
