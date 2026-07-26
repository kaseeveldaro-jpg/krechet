// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Данные пользователя (заглушка, потом из FastAPI)
const user = {
    id: tg.initDataUnsafe?.user?.id || 'Неизвестно',
    name: tg.initDataUnsafe?.user?.first_name || 'Пользователь',
    sub_end: null,
    devices: 1,
    max_devices: 5,
    invited: 0,
    paying: 0,
    trial_used: false,
};

// Текущий экран
let currentScreen = 'welcome';

// Показать экран
function showScreen(screen) {
    const content = document.getElementById('content');
    currentScreen = screen;

    const screens = {
        welcome: `
            <div class="welcome">
                <h2>Добро пожаловать, ${user.name}!</h2>
                <p>Выберите раздел в меню</p>
            </div>`,
        profile: `
            <div class="screen active">
                <h3>👤 Профиль</h3>
                <p>🆔 ID: <code>${user.id}</code></p>
                <p>📅 Подписка: ${user.sub_end ? '🟢 Активна' : '⚪ Не оформлена'}</p>
                <p>📱 Устройств: ${user.devices}/${user.max_devices}</p>
                <p>👥 Приглашено: ${user.invited}</p>
                <button class="btn" onclick="showScreen('keys')">🔗 Подключить VPN</button>
                <div class="back" onclick="showScreen('welcome')">🔙 Назад</div>
            </div>`,
        buy: `
            <div class="screen active">
                <h3>💰 Приобрести VPN</h3>
                <p>💎 Выбери срок подписки:</p>
                <button class="btn" onclick="alert('Пробный период')">🎁 Пробный период — 1₽ / 3 дня</button>
                <button class="btn" onclick="selectTariff(1, 199)">🟢 1 месяц — 199₽</button>
                <button class="btn" onclick="selectTariff(3, 499)">🔵 3 месяца — 499₽</button>
                <button class="btn" onclick="selectTariff(6, 899)">🟣 6 месяцев — 899₽</button>
                <button class="btn" onclick="selectTariff(12, 1499)">🔥 12 месяцев — 1499₽</button>
                <div class="back" onclick="showScreen('welcome')">🔙 Назад</div>
            </div>`,
        trial: `
            <div class="screen active">
                <h3>🎁 Пробный период</h3>
                <p>• 3 дня доступа<br>• Всего за 1₽<br>• Полный доступ<br>• Только для новых пользователей</p>
                <button class="btn primary" onclick="alert('Оплата 1₽')">💳 Оплатить 1₽</button>
                <div class="back" onclick="showScreen('welcome')">🔙 Назад</div>
            </div>`,
        referral: `
            <div class="screen active">
                <h3>👥 Бесплатные дни</h3>
                <p>• Друг купит подписку → тебе +7 дней<br>• Друг получит +14 дней</p>
                <p>📊 Приглашено: ${user.invited}<br>💰 Купили: ${user.paying}</p>
                <p>🔗 Твоя ссылка:</p>
                <div class="key-box">https://t.me/KrechetVPNbot?start=${user.id}</div>
                <button class="btn" onclick="shareLink()">📤 Поделиться</button>
                <div class="back" onclick="showScreen('welcome')">🔙 Назад</div>
            </div>`,
        keys: `
            <div class="screen active">
                <h3>🔑 Мои ключи</h3>
                <p>📱 Основное устройство:</p>
                <div class="key-box">vless://example-key@server.com:443?type=tcp&security=reality#Krechet</div>
                <button class="btn primary" onclick="copyKey()">📋 Скопировать ключ</button>
                <div class="back" onclick="showScreen('profile')">🔙 В профиль</div>
            </div>`,
        instructions: `
            <div class="screen active">
                <h3>📖 Инструкция</h3>
                <button class="btn" onclick="showIns('ios')">📱 iPhone / iPad</button>
                <button class="btn" onclick="showIns('android')">🤖 Android</button>
                <button class="btn" onclick="showIns('windows')">💻 Windows</button>
                <button class="btn" onclick="showIns('mac')">🍎 MacBook</button>
                <div class="back" onclick="showScreen('welcome')">🔙 Назад</div>
            </div>`,
    };

    content.innerHTML = screens[screen] || screens.welcome;
}

// Выбор тарифа
function selectTariff(months, amount) {
    alert(`Выбран тариф: ${months} мес. — ${amount}₽\nДалее оплата.`);
}

// Поделиться ссылкой
function shareLink() {
    const link = `https://t.me/KrechetVPNbot?start=${user.id}`;
    if (navigator.share) {
        navigator.share({ title: 'Krechet VPN', text: 'Попробуй быстрый VPN!', url: link });
    } else {
        alert('Ссылка скопирована: ' + link);
    }
}

// Копировать ключ
function copyKey() {
    const key = document.querySelector('.key-box').textContent;
    navigator.clipboard.writeText(key).then(() => {
        alert('✅ Ключ скопирован!');
    });
}

// Инструкции
function showIns(device) {
    const ins = {
        ios: '📱 iOS\n\n1. Скачай Happ или FoXray\n2. Скопируй ключ\n3. В приложении: + → Импорт из буфера\n4. Подключись\n\nГотово!',
        android: '🤖 Android\n\n1. Скачай v2rayNG\n2. Скопируй ключ\n3. В приложении: + → Импорт из буфера\n4. Нажми ▶️\n\nГотово!',
        windows: '💻 Windows\n\n1. Скачай v2rayN\n2. Скопируй ключ\n3. Серверы → Добавить из буфера\n4. Включи прокси\n\nГотово!',
        mac: '🍎 MacBook\n\n1. Скачай Happ или FoXray\n2. Скопируй ключ\n3. В приложении: + → Импорт из буфера\n4. Подключись\n\nГотово!',
    };
    alert(ins[device]);
}

// Загрузка
showScreen('welcome');