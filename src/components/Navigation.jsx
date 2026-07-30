import React from 'react';

export default function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'pricing', label: 'Тарифы' },
    { id: 'profile', label: 'Профиль' },
    { id: 'instructions', label: 'Инструкции' },
    { id: 'support', label: 'Помощь' },
  ];

  return (
    <nav style={styles.navbar}>
      {navItems.map((item) => {
        const isActive = currentPage === item.id;
        return (
          <button
            key={item.id}
            style={{
              ...styles.navBtn,
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: isActive ? '600' : '400',
            }}
            onClick={() => setCurrentPage(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '65px',
    backgroundColor: 'var(--surface-color)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid var(--border-color)',
    zIndex: 100,
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    padding: '8px 4px',
    transition: 'color 0.2s',
  },
};
