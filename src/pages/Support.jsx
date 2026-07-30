import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 'q1',
    question: 'VPN подключен, но нет интернета',
    answer: 'Скопируйте ваш новый ключ из раздела "Инструкции" и заново добавьте его в ваше приложение.'
  },
  {
    id: 'q2',
    question: 'Как продлить текущую подписку?',
    answer: 'Купите любой тариф на странице "Тарифы". Купленные дни прибавятся к вашему текущему остатку.'
  },
  {
    id: 'q3',
    question: 'Сколько устройств можно подключить?',
    answer: 'Один ключ поддерживает одновременное подключение до 5 устройств.'
  }
];

export default function Support() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleOpenChat = () => {
    alert('UI-заглушка: Переход в Telegram-чат поддержки');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Поддержка</h1>
        <p style={styles.subtitle}>Нужна помощь? Наша команда на связи</p>
      </div>

      <div style={styles.contactCard}>
        <h3 style={styles.contactTitle}>Служба заботы KRECHET</h3>
        <p style={styles.contactDesc}>Отвечаем быстро на любые технические вопросы</p>
        <button style={styles.contactButton} onClick={handleOpenChat}>
          Написать поддержке
        </button>
      </div>

      <div>
        <h2 style={styles.faqHeader}>Часто задаваемые вопросы</h2>
        <div style={styles.faqList}>
          {FAQ_DATA.map((item) => {
            const isActive = activeFaq === item.id;
            return (
              <div key={item.id} style={styles.faqCard}>
                <div style={styles.faqQuestionRow} onClick={() => toggleFaq(item.id)}>
                  <span style={styles.faqQuestion}>{item.question}</span>
                  <div style={{ ...styles.arrow, transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </div>
                </div>
                
                {isActive && (
                  <div style={styles.faqAnswerRow}>
                    <p style={styles.faqAnswer}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
  contactCard: {
    backgroundColor: 'var(--surface-color)',
    borderRadius: '14px',
    padding: '18px',
    border: '1px solid var(--border-color)',
    marginBottom: '30px',
  },
  contactTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  contactDesc: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '16px',
  },
  contactButton: {
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    border: 'none',
    padding: '12px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '10px',
    width: '100%',
    cursor: 'pointer',
  },
  faqHeader: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  faqCard: {
    backgroundColor: 'var(--surface-color)',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
  },
  faqQuestionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px',
    cursor: 'pointer',
  },
  faqQuestion: {
    fontSize: '14px',
    fontWeight: '500',
  },
  arrow: {
    fontSize: '10px',
    color: 'var(--text-secondary)',
    transition: 'transform 0.2s',
  },
  faqAnswerRow: {
    padding: '0 14px 14px 14px',
    borderTop: '1px solid #262626',
    paddingTop: '12px',
  },
  faqAnswer: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
};
