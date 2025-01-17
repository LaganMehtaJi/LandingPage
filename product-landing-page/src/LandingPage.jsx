import React from 'react';

const LandingPage = () => {
  // Inline styles object
  const styles = {
    landingPage: {
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: '#f5a623',
      color: 'white',
      padding: '50px 20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    headerTitle: {
      fontSize: '3.5rem',
      margin: '0',
      fontWeight: 'bold',
    },
    headerDescription: {
      fontSize: '1.5rem',
      marginTop: '10px',
      fontStyle: 'italic',
    },
    productDescription: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '40px',
      flexDirection: 'column',
      textAlign: 'center',
    },
    productImage: {
      width: '350px',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    productDetails: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '0 auto',
      color: '#333',
      lineHeight: '1.8',
      textAlign: 'center',
    },
    price: {
      fontSize: '2rem',
      color: '#e74c3c',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    ctaSection: {
      marginTop: '40px',
    },
    ctaButton: {
      backgroundColor: '#f5a623',
      color: 'white',
      fontSize: '1.5rem',
      padding: '15px 40px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      fontWeight: 'bold',
    },
    ctaButtonHover: {
      backgroundColor: '#e67e22',
    },
  };

  return (
    <div style={styles.landingPage}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Lala Perfume</h1>
        <p style={styles.headerDescription}>
          The essence of elegance and luxury, captured in a bottle.
        </p>
      </header>

      <section style={styles.productDescription}>
        <img
          src="https://th.bing.com/th/id/OIP.SBAHS3zaSkFLmlLTSCqryAHaEJ?w=302&h=180&c=7&r=0&o=5&pid=1.7" // Replace with actual product image URL
          alt="Lala Perfume"
          style={styles.productImage}
        />
        <div style={styles.productDetails}>
          <h2>Lala Perfume - A Fragrance Like No Other</h2>
          <p>
            Lala Perfume is a sophisticated blend of floral and woody notes,
            crafted for those who want to leave a lasting impression. Its subtle
            yet powerful fragrance is perfect for both everyday wear and special
            occasions. With Lala Perfume, experience luxury in every spray.
          </p>
        </div>
        <div style={styles.price}>
          <span>Price: $99</span>
        </div>
      </section>

      <section style={styles.ctaSection}>
        {/* Phone number in tel: protocol */}
        <a href="tel:+1234567890" style={{ textDecoration: 'none' }}>
          <button
            style={styles.ctaButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.ctaButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#f5a623')}
          >
            Buy Now
          </button>
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
