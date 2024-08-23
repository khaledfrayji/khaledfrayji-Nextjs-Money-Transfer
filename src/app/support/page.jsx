'use client';
import { useState } from 'react';
import styles from './support.module.css';

export default function Support() {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqItems = [
    {
      question: "How do I get started?",
      answer: "To get started ,first login or sign up if you are a new user , credentials will be stored in the cookie.",
    },
    {
      question: "How do I receive money?",
      answer: "You can receive money from your global card.",
    },
    {
      question: "Where can I use my global card?",
      answer: "You can use your global card as a visa card over all the Internet",
    },
    {
      question: "How do I contact customer service?",
      answer: "You can contact customer service via our support email at support@moneytransfer.com or call us at +1 800 123 4567.",
    },
    {
      question: "What security measures are in place for my transactions?",
      answer: "We use advanced encryption protocols and multi-factor authentication to ensure your transactions and personal data are secure.",
    },
    {
      question: "Can I cancel a transfer?",
      answer: "Once a transfer is processed, it cannot be canceled. Please contact customer service immediately if you have any issues.",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Support Center</h1>
        <p>Your satisfaction is our priority. Find answers to common questions or get in touch with us for further assistance.</p>
      </header>

      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please reach out to us:</p>
        <ul>
          <li>Email: <a href="mailto:support@moneytransfer.com">support@moneytransfer.com</a></li>
          <li>Phone: <a href="tel:+18001234567">+1 800 123 4567</a></li>
        </ul>
      </section>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
              <span>{faqOpen[index] ? '-' : '+'}</span> {item.question}
            </div>
            {faqOpen[index] && <div className={styles.faqAnswer}>{item.answer}</div>}
          </div>
        ))}
      </section>
    </div>
  );
}
