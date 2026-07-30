import React, { useState } from 'react';

const TARIFFS = [
  { id: '1_month', title: '1 Месяц', pricePerMonth: 200, total: 200, badge: null },
  { id: '3_months', title: '3 Месяца', pricePerMonth: 180, total: 540, badge: null },
  { id: '6_months', title: '6 Месяцев', pricePerMonth: 150, total: 900, badge: 'Популярно' },
  { id: '12_months', title: '12 Месяцев', pricePerMonth: 100, total: 1200, badge: 'Выгодно' },
];

export default function Pricing() {
  const [selectedTariff, setSelectedTariff] = useState('12_months');

  const handleBuy = () => {
    alert('UI-заглушка: Переход к оплате тарифа');
  };

  const activeTariff = TARIFFS.find((t) => t.id === selectedTariff);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Выберите подписку</h1>
        <p style={styles.subtitle}>Безлимитный доступ и максимальная скорость</p>
      </div>

      <div style={styles.tariffsList}>
        {TARIFFS.map((tariff) => {
          const isSelected = selectedTariff === tariff.id;
          return (
            <div 
              key={tariff.id}
              style={{
                ...styles.card,
                ...(isSelected ? styles.cardSelected : {})
              }}
              onClick={() => setSelectedTariff(tariff.id)}
            >
              {tariff.badge && (
                <div style={{
                  ...styles.badge,
                  ...(isSelected ? styles.badgeSelected : {})
                }}>
                  {tariff.badge}
                </div>
              )}

              <div style={styles.cardContent}>
                <div>
                  <h3 style={styles.cardTitle}>{tariff.title}</h3>
                  <p style={styles.totalPrice}>{tariff.total} ₽ итого</p>
                </div>
                <div style={styles.priceBlock}>
                  <span style={styles.pricePerMonth}>{tariff.pricePerMonth} ₽</span>
                  <span style={styles.perMonthLabel}>/ мес</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={styles.footer}>
        <button style={styles.buyButton} onClick={handleBuy}>
          Оплатить {activeTariff?.total} ₽
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px 20px 120px 20px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    marginTop: '10px',
    marginBottom: '24px',
    textAlign: 'center',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
  },
  tariffsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  card: {
    position: 'relative',
    backgroundColor: 'var(--surface-color)',
    borderRadius: '14px',
    padding: '18px',
    cursor: 'pointer',
    border: '1px solid var(--border-color)',
    transition: 'all 0.2s ease',
  },
  cardSelected: {
    border: '1px solid var(--text-primary)',
    backgroundColor: '#222222',
  },
  badge: {
    position: 'absolute',
    top: '-10px',
    right: '16px',
    backgroundColor: '#333333',
    color: 'var(--text-secondary)',
    padding: '3px 10px',
    borderRadius: '100px',
    fontSize: '11px',
    fontWeight: '600',
  },
  badgeSelected: {
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  totalPrice: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
  },
  priceBlock: {
    textAlign: 'right',
  },
  pricePerMonth: {
    fontSize: '20px',
    fontWeight: '700',
  },
  perMonthLabel: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginLeft: '2px',
  },
  footer: {
    position: 'fixed',
    bottom: '75px',
    left: 0,
    right: 0,
    padding: '12px 20px',
    background: 'linear-gradient(to top, var(--bg-color) 80%, transparent)',
    display: 'flex',
    justifyContent: 'center',
  },
  buyButton: {
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    border: 'none',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '700',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    cursor: 'pointer',
  },
};
