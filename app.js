// Telegram Mini App

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();

    document.body.style.background = tg.backgroundColor || "#050608";
}

// Canvas

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w;
let h;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

// ---------- Перья ----------

const feathers = [];

class Feather {

    constructor() {

        this.reset(true);

    }

    reset(first = false) {

        this.x = Math.random() * w;

        this.y = first
            ? Math.random() * h
            : -30;

        this.size = 8 + Math.random() * 12;

        this.speed = .2 + Math.random() * .7;

        this.swing = Math.random() * 100;

        this.rotation = Math.random() * 360;

        this.alpha = .15 + Math.random() * .35;

        this.spin = (.2 + Math.random()) * (Math.random() > .5 ? 1 : -1);

    }

    update() {

        this.y += this.speed;

        this.swing += 0.02;

        this.rotation += this.spin;

        this.x += Math.sin(this.swing) * .5;

        if (this.y > h + 40) {

            this.reset();

        }

    }

    draw() {

        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotation * Math.PI / 180);

        ctx.globalAlpha = this.alpha;

        ctx.strokeStyle = "#ffffff";

        ctx.lineWidth = 1.2;

        ctx.beginPath();

        ctx.moveTo(0, -this.size);

        ctx.quadraticCurveTo(

            this.size * .8,

            0,

            0,

            this.size

        );

        ctx.quadraticCurveTo(

            -this.size * .8,

            0,

            0,

            -this.size

        );

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(0, -this.size);

        ctx.lineTo(0, this.size);

        ctx.stroke();

        ctx.restore();

    }

}

for (let i = 0; i < 45; i++) {

    feathers.push(new Feather());

}

// ---------- Искры ----------

const sparks = [];

class Spark {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = w / 2 + (Math.random() - .5) * 220;

        this.y = h / 2 + (Math.random() - .5) * 220;

        this.life = Math.random() * 80 + 40;

        this.radius = Math.random() * 2 + 1;

    }

    update() {

        this.life--;

        this.y -= .3;

        if (this.life <= 0) {

            this.reset();

        }

    }

    draw() {

        ctx.save();

        ctx.globalAlpha = this.life / 120;

        ctx.fillStyle = "#00d4ff";

        ctx.shadowBlur = 12;

        ctx.shadowColor = "#00d4ff";

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.radius,

            0,

            Math.PI * 2

        );

        ctx.fill();

        ctx.restore();

    }

}

for (let i = 0; i < 12; i++) {

    sparks.push(new Spark());

}

// ---------- Анимация ----------

function animate() {

    ctx.clearRect(0, 0, w, h);

    feathers.forEach(f => {

        f.update();

        f.draw();

    });

    sparks.forEach(s => {

        s.update();

        s.draw();

    });

    requestAnimationFrame(animate);

}

animate();

// ---------- Параллакс ----------

const falcon = document.querySelector(".falcon");

document.addEventListener("mousemove", e => {

    const x = (e.clientX / w - .5) * 12;

    const y = (e.clientY / h - .5) * 12;

    falcon.style.transform =
        `translate(${x}px,${y}px)`;

});

// ---------- Кнопки ----------

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform = "scale(.96)";

    });

    btn.addEventListener("mouseup", () => {

        btn.style.transform = "";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

// ---------- Кнопка Попробовать ----------

document.querySelector(".primary")
.addEventListener("click", () => {

    if (tg) {

        tg.HapticFeedback.impactOccurred("medium");

    }

    alert("Пробный доступ");

});

// ---------- Кнопка Тарифы ----------

document.querySelector(".secondary")
.addEventListener("click", () => {

    if (tg) {

        tg.HapticFeedback.selectionChanged();

    }

    alert("Открыть тарифы");

});
