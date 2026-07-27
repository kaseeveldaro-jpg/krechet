import React, { useState } from "react";
import Eagle3D from "./components/Eagle3D";

const tariffs = [
  { id: "1", title: "1 мес", price: "199 ₽", note: "Базовый" },
  { id: "3", title: "3 мес", price: "549 ₽", note: "−8%" },
  { id: "6", title: "6 мес", price: "999 ₽", note: "−16%" },
  { id: "12", title: "12 мес", price: "1 799 ₽", note: "−25%" }
];

const nav = [
  ["profile", "Профиль", "◉"],
  ["tariffs", "Тарифы", "◇"],
  ["support", "Поддержка", "?"],
  ["settings", "Настройки", "⚙"],
  ["guide", "Инструкция", "▤"],
  ["about", "Информация", "i"]
];

function Page({ children, onBack }) {
  return (
    <div className="page page-enter">
      <button className="back" onClick={onBack}>← Назад</button>
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Profile({ onBack }) {
  return <Page onBack={onBack}>
    <SectionTitle eyebrow="ПРОФИЛЬ" title="Твой KRECHET" text="Основная информация о подписке и доступе." />
    <div className="profile-head card">
      <div className="avatar">K</div>
      <div><strong>@username</strong><span>Пользователь KRECHET</span></div>
    </div>
    <div className="card stack">
      <div className="row"><span>Статус</span><b className="active">Активна</b></div>
      <div className="row"><span>Тариф</span><b>1 мес</b></div>
      <div className="row"><span>Действует до</span><b>12.09.2026</b></div>
    </div>
    <div className="card">
      <div className="card-label">Устройства и участники</div>
      <div className="device-limit">2 / 2 бесплатно</div>
      <div className="device"><span>📱</span><div><b>iPhone</b><small>Вы · активно</small></div><em>●</em></div>
      <div className="device"><span>💻</span><div><b>MacBook</b><small>Вы · активно</small></div><em>●</em></div>
      <button className="gold-btn" onClick={() => alert("Демонстрация: приглашение будет доступно после подключения сервера.")}>＋ Добавить устройство / участника</button>
      <small className="muted">После двух бесплатных мест — 59 ₽/мес за каждое дополнительное.</small>
    </div>
    <button className="ghost-btn">История платежей →</button>
  </Page>;
}

function Tariffs({ onBack }) {
  const [selected, setSelected] = useState("1");
  return <Page onBack={onBack}>
    <SectionTitle eyebrow="ТАРИФЫ" title="Выбери срок" text="Сейчас это демонстрационный экран — покупки отключены." />
    <div className="tariff-grid">
      {tariffs.map(t => <button key={t.id} className={`tariff ${selected === t.id ? "selected" : ""}`} onClick={() => setSelected(t.id)}>
        <span>{t.title}</span><strong>{t.price}</strong><small>{t.note}</small>
      </button>)}
    </div>
    <div className="card selected-summary">
      <span>Выбранный тариф</span>
      <b>{tariffs.find(t => t.id === selected).title} · {tariffs.find(t => t.id === selected).price}</b>
    </div>
    <button className="gold-btn" onClick={() => alert("Покупки пока отключены. Позже сюда подключим оплату.")}>Продолжить</button>
  </Page>;
}

function Support({ onBack }) {
  return <Page onBack={onBack}>
    <SectionTitle eyebrow="ПОДДЕРЖКА" title="Мы на связи" text="В рабочей версии здесь появится связь с поддержкой." />
    <button className="wide-card" onClick={() => alert("Здесь будет ссылка на Telegram-поддержку.")}><span>Telegram</span><b>Написать →</b></button>
    <div className="card faq"><div className="card-label">Частые вопросы</div><p>Ответы на типичные вопросы будут здесь.</p></div>
  </Page>;
}

function Settings({ onBack }) {
  const [notifications, setNotifications] = useState(true);
  return <Page onBack={onBack}>
    <SectionTitle eyebrow="НАСТРОЙКИ" title="Настройки" />
    <div className="settings-list card">
      <div className="setting"><span>Язык</span><b>Русский</b></div>
      <div className="setting"><span>Тема</span><b>Системная</b></div>
      <div className="setting"><span>Уведомления</span><button className={`toggle ${notifications ? "on" : ""}`} onClick={() => setNotifications(v => !v)}><i /></button></div>
    </div>
  </Page>;
}

function Guide({ onBack }) {
  return <Page onBack={onBack}>
    <SectionTitle eyebrow="ИНСТРУКЦИЯ" title="Как пользоваться KRECHET" text="Здесь позже разместим пошаговые инструкции для всех устройств." />
    {["Android", "iPhone", "Windows", "macOS"].map((x, i) => <div className="guide-row" key={x}><span>0{i+1}</span><b>{x}</b><em>→</em></div>)}
  </Page>;
}

function About({ onBack }) {
  return <Page onBack={onBack}>
    <SectionTitle eyebrow="KRECHET" title="О сервисе" text="Быстрый и понятный VPN-интерфейс с акцентом на простоту." />
    <div className="card about-text"><p>KRECHET — демонстрационная версия Mini App. Сейчас здесь только интерфейс: сервер, оплата и выдача доступа ещё не подключены.</p></div>
    <div className="legal-links"><button>Политика конфиденциальности →</button><button>Пользовательское соглашение →</button></div>
  </Page>;
}

function Home({ onOpen }) {
  return <div className="home">
    <div className="mountains" />
    <div className="vignette" />
    <div className="brand">KRECHET<span>VPN</span></div>
    <div className="hero-copy"><span>СВОБОДА В СЕТИ</span><h1>КРЕЧЕТ</h1><p>Демонстрационный интерфейс</p></div>
    <div className="eagle-wrap"><Eagle3D /></div>
    <div className="home-nav">
      {nav.map(([id, label, icon]) => <button key={id} onClick={() => onOpen(id)}><i>{icon}</i><span>{label}</span></button>)}
    </div>
  </div>;
}

export default function App() {
  const [page, setPage] = useState("home");
  const close = () => setPage("home");
  const content = {
    profile: <Profile onBack={close} />,
    tariffs: <Tariffs onBack={close} />,
    support: <Support onBack={close} />,
    settings: <Settings onBack={close} />,
    guide: <Guide onBack={close} />,
    about: <About onBack={close} />
  }[page];

  return <main className="app">
    {page === "home" ? <Home onOpen={setPage} /> : content}
  </main>;
}