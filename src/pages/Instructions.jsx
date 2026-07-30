import React, { useState } from 'react';

const Icons = {
  Apple: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.81 1.44-.61.71-1.15 1.86-1.01 2.96 1.07.08 2.17-.56 2.83-1.36z"/>
    </svg>
  ),
  Android: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414C17.523 16.2731 16.7607 17.0276 15.82 17.0276H3.63301C2.69234 17.0276 1.93005 16.2731 1.93005 15.3414V8.40693H17.523V15.3414ZM14.9961 3.99595L16.5165 1.3626C16.634 1.15848 16.5647 0.898652 16.3582 0.78119C16.1558 0.663728 15.8943 0.733051 15.7769 0.937176L14.218 3.63378C12.8711 3.01353 11.3619 2.65698 9.72653 2.65698C8.09115 2.65698 6.58197 3.01353 5.23507 3.63378L3.67623 0.937176C3.5562 0.733051 3.29729 0.666279 3.09235 0.78119C2.88741 0.898652 2.81812 1.15848 2.93815 1.3626L4.45853 3.99595C1.96803 5.4842 0.301549 8.01633 0 10.985H19.4531C19.1515 8.01633 17.485 5.4842 14.9961 3.99595Z"/>
    </svg>
  ),
  Windows: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
    </svg>
  ),
};

const INSTRUCTIONS_DATA = [
  {
    id: 'ios',
    title: 'iOS (iPhone / iPad)',
    icon: <Icons.Apple />,
    steps: [
      'Установите V2Ray Tun из App Store.',
      'Скопируйте ваш персональный ключ.',
      'В приложении нажмите "+" -> "Import from Clipboard".',
      'Нажмите главную кнопку для подключения.'
    ]
  },
  {
    id: 'android',
    title: 'Android',
    icon: <Icons.Android />,
    steps: [
      'Скачайте v2rayNG из Google Play.',
      'Скопируйте ваш ключ доступа.',
      'Нажмите "+" и выберите "Импорт профиля из буфера обмена".',
      'Нажмите на круглую кнопку подключения внизу.'
    ]
  },
  {
    id: 'windows',
    title: 'Windows',
    icon: <Icons.Windows />,
    steps: [
      'Загрузите v2rayN и распакуйте архив.',
      'Запустите v2rayN.exe и скопируйте ваш ключ.',
      'Нажмите Ctrl+V внутри приложения.',
      'Включите "System Proxy" через иконку в трее.'
    ]
  },
  {
    id: 'macos',
    title: 'macOS',
    icon: <Icons.Apple />,
    steps: [
      'Установите FoXray из App Store.',
      'Скопируйте ваш ключ подписки.',
      'Импортируйте ключ из буфера обмена.',
      'Включите соединение.'
    ]
  }
];

export default function Instructions() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const handleCopyKey = () => {
    alert('UI-заглушка: Ключ скопирован!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Инструкции по настройке</h1>
        <p style={styles.subtitle}>Выберите ваше устройство для пошагового руководства</p>
      </div>

      <div style={styles.list}>
        {INSTRUCTIONS_DATA.map((platform) => {
          const isActive = activeTab === platform.id;
          return (
            <div key={platform.id} style={styles.card}>
              <div style={styles.cardHeader} onClick={() => toggleTab(platform.id)}>
                <div style={styles.platformInfo}>
                  <div style={styles.iconBox}>{platform.icon}</div>
                  <span style={styles.platformTitle}>{platform.title}</span>
                </div>
                <div style={{ ...styles.arrow, transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </div>
              </div>

              {isActive && (
                <div style={styles.cardBody}>
                  <div style={styles.stepsList}>
                    {platform.steps.map((step, idx) => (
                      <div key={idx} style={styles.stepItem}>
                        <div style={styles.stepNumber}>{idx + 1}</div>
                        <p style={styles.stepText}>{step}</p>
                      </div>
                    ))}
                  </div>

                  <div style={styles.keyBlock}>
                    <button style={styles.copyButton} onClick={handleCopyKey}>
                      Скопировать ключ
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
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
    marginBottom: '24px',
    marginTop: '10px',
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  card: {
    backgroundColor: 'var(--surface-color)',
    borderRadius: '14px',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 18px',
    cursor: 'pointer',
  },
  platformInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  iconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: '#262626',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  platformTitle: {
    fontSize: '16px',
    fontWeight: '600',
  },
  arrow: {
    fontSize: '10px',
    color: 'var(--text-secondary)',
    transition: 'transform 0.2s',
  },
  cardBody: {
    padding: '0 18px 18px 18px',
    borderTop: '1px solid #262626',
    paddingTop: '16px',
  },
  stepsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  stepItem: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '11px',
    fontWeight: '700',
    flexShrink: 0,
  },
  stepText: {
    fontSize: '13px',
    lineHeight: '1.4',
  },
  keyBlock: {
    marginTop: '18px',
  },
  copyButton: {
    backgroundColor: '#262626',
    color: 'var(--text-primary)',
    border: '1px solid #444',
    padding: '12px',
    fontSize: '13px',
    fontWeight: '600',
    borderRadius: '8px',
    width: '100%',
    cursor: 'pointer',
  },
};
