import React from 'react';

const USER_DATA = {
  name: 'Alex',
  username: '@alex_tg',
  status: 'active',
  tariff: '12 Месяцев',
  expiresAt: '15 Сентября 2027',
  devicesUsed: 2,
  devicesTotal: 5,
};

export default function Profile({ navigateTo }) {
  const isActive = USER_DATA.status === 'active';

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.avatar}>
          {USER_DATA.name.charAt(0).toUpperCase()}
        </div>
        <div style={styles.userInfo}>
          <h2 style={styles.name}>{USER_DATA.name}</h2>
          <p style={styles.username}>{USER_DATA.username}</p>
        </div>
      </div>

      <div style={styles.subscriptionCard}>
        <div style={styles.statusRow}>
          <div style={styles.statusBadge}>
            <span style={{ ...styles.statusDot, backgroundColor: isActive ? '#4ade80' : '#f87171' }}></span>
            {isActive ? 'Подписка активна' : 'Нет подписки'}
          </div>
        </div>
        
        <h3 style={styles.expiresText}>
          {isActive ? `До ${USER_DATA.expiresAt}` : 'Оформите подписку'}
        </h3>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Текущий тариф</p>
          <p style={styles.statValue}>{USER_DATA.tariff}</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Устройства</p>
          <p style={styles.statValue}>{USER_DATA.devicesUsed} / {USER_DATA.devicesTotal}</p>
        </div>
      </div>

      <div style={styles.actions}>
        <button style={styles.primaryButton} onClick={() => navigateTo('pricing')}>
          {isActive ? 'Продлить подписку' : 'Купить VPN'}
        </button>
        
        <button style={styles.secondaryButton} onClick={() => navigateTo('instructions')}>
          Инструкции по настройке
        </button>

        <button style={styles.textButton} onClick={() => navigateTo('support')}>
          Поддержка и помощь
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
    marginTop: '10px',
  },
  avatar: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    backgroundColor: 'var(--surface-color)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: '18px',
    fontWeight: '600',
  },
  username: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
  },
  subscriptionCard: {
    backgroundColor: 'var(--surface-color)',
    borderRadius: '14px',
    padding: '20px',
    marginBottom: '12px',
    border: '1px solid var(--border-color)',
  },
  statusRow: {
    marginBottom: '10px',
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: 'var(--text-secondary)',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  expiresText: {
    fontSize: '20px',
    fontWeight: '700',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '24px',
  },
  statCard: {
    backgroundColor: 'var(--surface-color)',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
  },
  statLabel: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '6px',
  },
  statValue: {
    fontSize: '15px',
    fontWeight: '600',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  primaryButton: {
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    border: 'none',
    padding: '14px',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '12px',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: 'var(--surface-color)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    padding: '14px',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '12px',
    cursor: 'pointer',
  },
  textButton: {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    border: 'none',
    padding: '12px',
    fontSize: '13px',
    cursor: 'pointer',
  },
};
