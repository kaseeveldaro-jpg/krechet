import React from 'react';

export default function Home({ navigateTo }) {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.logo}>KRECHET</h1>
        <p style={styles.subtitle}>PREMIUM VPN SERVICE</p>

        <div style={styles.birdContainer}>
          <img 
            src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=KRECHET+BIRD" 
            alt="Krechet Bird" 
            className="floating-bird" 
          />
        </div>

        <button 
          style={styles.mainButton} 
          onClick={() => navigateTo('pricing')}
        >
          Купить VPN
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 65px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '6px',
    margin: '0',
  },
  subtitle: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
    letterSpacing: '2px',
  },
  birdContainer: {
    margin: '10px 0 50px 0',
    width: '100%',
  },
  mainButton: {
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    border: 'none',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '700',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '300px',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.12)',
  },
};
