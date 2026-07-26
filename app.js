const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Частицы (перья)
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particlesContainer.appendChild(particle);
}

function navigate(screen) {
    if (screen === 'trial') {
        tg.showPopup({
            title: '🎁 Пробный период',
            message: '3 дня доступа за 1₽\n\nПолный доступ ко всем функциям.\nТолько для новых пользователей.',
            buttons: [
                { id: 'pay', type: 'default', text: '💳 Оплатить 1₽' },
                { type: 'cancel', text: 'Назад' }
            ]
        });
    } else if (screen === 'buy') {
        tg.showPopup({
            title: '💰 Тарифы',
            message: '🟢 1 мес — 199₽\n🔵 3 мес — 499₽\n🟣 6 мес — 899₽\n🔥 12 мес — 1499₽',
            buttons: [{ type: 'ok', text: 'Понял' }]
        });
    }
}
