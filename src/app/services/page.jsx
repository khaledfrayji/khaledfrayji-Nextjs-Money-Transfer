'use client';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "International Money Transfers",
      description:
        "Send money globally with competitive exchange rates and low fees, ensuring your funds reach their destination quickly and securely.",
     
    },
    {
      title: "Currency Exchange",
      description:
        "Get the best rates for currency exchange, whether you’re traveling or sending money abroad.",
     
    },
    {
      title: "Mobile Wallet Transfers",
      description:
        "Transfer money directly to mobile wallets, allowing recipients to access funds instantly and conveniently.",
     
    },
    {
      title: "Bill Payments",
      description:
        "Pay bills across borders easily, ensuring timely payments for utilities, loans, and other services.",
    
    },
    {
      title: "Transaction Tracking",
      description:
        "Track your transfers in real-time with detailed updates, giving you peace of mind that your money is on its way.",
  
    },
    {
      title: "24/7 Customer Support",
      description:
        "Access our dedicated support team anytime, day or night, to assist with any inquiries or issues.",
  
    },
  ];
  

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our Services</h1>
        <p>Discover a wide range of professional services designed to help your business thrive.</p>
      </header>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
