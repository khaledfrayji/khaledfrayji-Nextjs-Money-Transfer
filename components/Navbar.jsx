"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user credentials are stored in cookies
    const emailCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email="));
    const passwordCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("password="));
    if (emailCookie && passwordCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear cookies to log out the user
    document.cookie = "email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie =
      "password=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    // Redirect to the homepage after logout
    window.location.href = "/";
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div>
            <Link className={styles.logo} href="/">
              Global
            </Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
            <Link href="/send-money" className={styles.navLink}>
              Send Money
            </Link>
            <Link href="/support" className={styles.navLink}>
              Support
            </Link>
          </div>
          <div className={styles.actions}>
            {isLoggedIn ? (
              <button onClick={handleLogout} className={styles.button}>
                Logout
              </button>
            ) : (
              <Link href="/login" className={styles.button}>
                Login
              </Link>
            )}
          </div>
          <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
            <Link href="/send-money" className={styles.navLink}>
              Send Money
            </Link>
            <Link href="/track-transfer" className={styles.navLink}>
              Track Transfer
            </Link>
            <Link href="/support" className={styles.navLink}>
              Support
            </Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className={styles.button}>
                Logout
              </button>
            ) : (
              <Link href="/login" className={styles.navLink}>
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
