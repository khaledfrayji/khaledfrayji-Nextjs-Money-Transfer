// components/SendMoney.js
"use client";
import { useState } from "react";
import styles from "./SendMoney.module.css";

export default function SendMoney() {
  const [cardId, setCardId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSendMoney = () => {
    // Logic to send money
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h2>Send Money</h2>
          <input
            type="text"
            placeholder="Recipient's Card ID"
            value={cardId}
            onChange={(e) => setCardId(e.target.value)}
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleSendMoney} className={styles.sendButton}>
            Send
          </button>
        </div>
        <div className={styles.imageSection}>
          <img src="/send-money.png" alt="Send Money" />
        </div>
      </div>

      {/* New Section with Parallax Background */}
      <div className={styles.processSection}>
        <h2>How to Send Money</h2>
        <p>
          Sending money is quick and easy with Global. Simply enter the
          recipient's Card ID, specify the amount, and hit send. Your money
          will be transferred securely and instantly.
        </p>
        <p>
          With Global, you can send money to anyone, anywhere, anytime. Our
          service ensures fast and secure transactions, so you can rest
          assured that your funds are in good hands.
        </p>
      </div>
    </>
  );
}
