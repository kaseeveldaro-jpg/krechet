const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

const user = {
    id: tg.initDataUnsafe?.user?.id || '12345',
    name: tg.initDataUnsafe?.user?.first_name || 'Гость',
};

function HomeScreen() {
    return `
    <div class="screen">
        <div class="falcon-bg">🦅</div>
        <div class="header">
            <div class="logo">KRECHET</div>
            <div class="sub">Скорость хищника</div>
        </div>
        <div class="card" onclick="navigate('profile')">
            <div class="icon">👤</div>
            <div class="title">Профиль</div>
            <div class="desc">Статус подписки, устройства</div>
        </div>
        <div class="card" onclick="navigate('buy')">
            <div class="icon">💰</div>
            <div class="title">Приобрести VPN</div>
            <div class="desc">Тарифы от 199₽/мес</div>
        </div>
        <div class="card" onclick="navigate('trial')">
            <div class="icon">🎁</div>
            <div class="title">Пробный период</div>
            <div class="desc">3 дня за 1₽</div>
        </div>
        <div class="card" onclick="navigate('referral')">
            <div class="icon">👥</div>
            <div class="title">Бесплатные дни</div>
            <div class="desc">Пригласи друга — получи +7 дней</div>
        </div>
        <div class="card" onclick="navigate('keys')">
            <div class="icon">🔑</div>
            <div class="title">Мои ключи</div>
            <div class="desc">Подключить устройства</div>
        </div>
        <div class="card" onclick="navigate('instructions')">
            <div class="icon">📖</div>
            <div class="title">Инструкция</div>
            <div class="desc">Настройка за 2 минуты</div>
        </div>
    </div>
    <div class="bottom-nav">
        <button class="active" onclick="navigate('home')">🏠 Главная</button>
        <button onclick="navigate('profile')">👤 Профиль</button>
        <button onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

function ProfileScreen() {
    return `
    <div class="screen">
        <div class="header">
            <div class="logo">👤 Профиль</div>
        </div>
        <div class="card"><div class="title">🆔 ID</div><div class="desc">${user.id}</div></div>
        <div class="card"><div class="title">📅 Подписка</div><div class="desc">⚪ Не оформлена</div></div>
        <div class="card"><div class="title">📱 Устройства</div><div class="desc">0 / 5</div></div>
        <button class="btn primary" onclick="navigate('keys')">🔗 Подключить VPN</button>
        <button class="btn back" onclick="navigate('home')">← Назад</button>
    </div>
    <div class="bottom-nav">
        <button onclick="navigate('home')">🏠 Главная</button>
        <button class="active" onclick="navigate('profile')">👤 Профиль</button>
        <button onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

function BuyScreen() {
    return `
    <div class="screen">
        <div class="header"><div class="logo">💰 Приобрести VPN</div></div>
        <p style="color:#888;margin-bottom:16px;z-index:1;position:relative;">💎 Выбери срок подписки:</p>
        <button class="btn" onclick="selectTariff('trial')"><span class="tariff"><span class="months">🎁 Пробный</span><span class="price">1₽ / 3 дня</span></span></button>
        <button class="btn" onclick="selectTariff(1)"><span class="tariff"><span class="months">🟢 1 месяц</span><span class="price">199₽</span></span></button>
        <button class="btn" onclick="selectTariff(3)"><span class="tariff"><span class="months">🔵 3 месяца</span><span class="price">499₽</span></span></button>
        <button class="btn" onclick="selectTariff(6)"><span class="tariff"><span class="months">🟣 6 месяцев</span><span class="price">899₽</span></span></button>
        <button class="btn" onclick="selectTariff(12)"><span class="tariff"><span class="months">🔥 12 месяцев</span><span class="price">1499₽</span></span></button>
        <button class="btn back" onclick="navigate('home')">← Назад</button>
    </div>
    <div class="bottom-nav">
        <button onclick="navigate('home')">🏠 Главная</button>
        <button onclick="navigate('profile')">👤 Профиль</button>
        <button class="active" onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

function KeysScreen() {
    return `
    <div class="screen">
        <div class="header"><div class="logo">🔑 Мои ключи</div></div>
        <div class="card"><div class="title">📱 Основное устройство</div></div>
        <div class="key-box">vless://example-key-abc123@server.com:443?type=tcp&security=reality#Krechet-VPN</div>
        <button class="btn primary" onclick="copyKey()">📋 Скопировать ключ</button>
        <button class="btn back" onclick="navigate('home')">← Назад</button>
    </div>
    <div class="bottom-nav">
        <button onclick="navigate('home')">🏠 Главная</button>
        <button onclick="navigate('profile')">👤 Профиль</button>
        <button onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

function InstructionsScreen() {
    return `
    <div class="screen">
        <div class="header"><div class="logo">📖 Инструкция</div></div>
        <button class="btn" onclick="showIns('ios')">📱 iPhone / iPad</button>
        <button class="btn" onclick="showIns('android')">🤖 Android</button>
        <button class="btn" onclick="showIns('windows')">💻 Windows</button>
        <button class="btn" onclick="showIns('mac')">🍎 MacBook</button>
        <button class="btn back" onclick="navigate('home')">← Назад</button>
    </div>
    <div class="bottom-nav">
        <button onclick="navigate('home')">🏠 Главная</button>
        <button onclick="navigate('profile')">👤 Профиль</button>
        <button onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

function TrialScreen() {
    return `
    <div class="screen">
        <div class="header"><div class="logo">🎁 Пробный период</div></div>
        <div class="card"><div class="title">⏳ 3 дня доступа</div></div>
        <div class="card"><div class="title">💰 Всего за 1₽</div></div>
        <div class="card"><div class="title">🔓 Полный доступ</div></div>
        <button class="btn primary" onclick="alert('Оплата 1₽')">💳 Оплатить 1₽</button>
        <button class="btn back" onclick="navigate('home')">← Назад</button>
    </div>
    <div class="bottom-nav">
        <button onclick="navigate('home')">🏠 Главная</button>
        <button onclick="navigate('profile')">👤 Профиль</button>
        <button onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

function ReferralScreen() {
    return `
    <div class="screen">
        <div class="header"><div class="logo">👥 Бесплатные дни</div></div>
        <div class="card"><div class="title">➕ Пригласи друга</div><div class="desc">Друг купит → тебе +7 дней</div></div>
        <div class="card"><div class="title">🎁 Другу</div><div class="desc">+14 дней к первой покупке</div></div>
        <div class="key-box">https://t.me/KrechetVPNbot?start=${user.id}</div>
        <button class="btn primary" onclick="shareLink()">📤 Поделиться ссылкой</button>
        <button class="btn back" onclick="navigate('home')">← Назад</button>
    </div>
    <div class="bottom-nav">
        <button onclick="navigate('home')">🏠 Главная</button>
        <button onclick="navigate('profile')">👤 Профиль</button>
        <button onclick="navigate('buy')">💰 Купить</button>
        <button onclick="window.open('https://t.me/krechet_support', '_blank')">💬 Чат</button>
    </div>
    `;
}

// Навигация
const screens = { home: HomeScreen, profile: ProfileScreen, buy: BuyScreen, keys: KeysScreen, instructions: InstructionsScreen, trial: TrialScreen, referral: ReferralScreen };

function navigate(screen) {
    const app = document.getElementById('app');
    const current = app.querySelector('.screen');
    if (current) current.classList.add('leaving');

    setTimeout(() => {
        if (screens[screen]) app.innerHTML = screens[screen]();
        else app.innerHTML = HomeScreen();
        app.scrollTop = 0;
    }, 150);
}

function selectTariff(months) {
    tg.showPopup({ title: 'Оплата', message: `Тариф: ${months} мес.\nСумма: от 199₽\n\nОплата в разработке`, buttons: [{ type: 'ok' }] });
}

function copyKey() {
    const key = document.querySelector('.key-box')?.textContent;
    if (key) { navigator.clipboard.writeText(key).then(() => tg.showPopup({ message: '✅ Ключ скопирован!' })); }
}

function shareLink() {
    const link = `https://t.me/KrechetVPNbot?start=${user.id}`;
    if (navigator.share) navigator.share({ title: 'Krechet VPN', url: link });
    else tg.showPopup({ message: 'Ссылка скопирована!' });
}

function showIns(device) {
    const ins = { ios: '📱 iOS\n1. Скачай Happ\n2. Скопируй ключ\n3. + → Импорт из буфера\n4. Подключись', android: '🤖 Android\n1. Скачай v2rayNG\n2. Скопируй ключ\n3. + → Импорт из буфера\n4. Нажми ▶️', windows: '💻 Windows\n1. Скачай v2rayN\n2. Скопируй ключ\n3. Серверы → Добавить\n4. Включи прокси', mac: '🍎 Mac\n1. Скачай Happ\n2. Скопируй ключ\n3. + → Импорт из буфера\n4. Подключись' };
    tg.showPopup({ title: 'Инструкция', message: ins[device], buttons: [{ type: 'ok' }] });
}

navigate('home');
