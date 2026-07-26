
// Telegram Mini App

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.expand();
    tg.ready();
}


// Переключение экранов

function openScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    const target = document.getElementById(screenId);


    if (target) {

        target.classList.add("active");

    }


    // вибрация Telegram при нажатии

    if (tg && tg.HapticFeedback) {

        tg.HapticFeedback.impactOccurred("light");

    }

}



// Выбор тарифа

const prices = document.querySelectorAll(".price");

const payButton = document.querySelector(".pay-btn");


prices.forEach(price => {


    price.addEventListener("click", () => {


        prices.forEach(item => {

            item.classList.remove("active");

        });


        price.classList.add("active");


        let value = price.textContent
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")[0];


        if(payButton){

            payButton.textContent =
            "💳 Оплатить " + value;

        }


        if (tg && tg.HapticFeedback){

            tg.HapticFeedback.selectionChanged();

        }


    });


});



// Плавное появление при запуске

window.addEventListener("load", () => {


    document.body.style.opacity = "0";


    setTimeout(() => {


        document.body.style.transition =
        "opacity .8s ease";


        document.body.style.opacity = "1";


    },100);


});



// Подготовка под 3D сокола

console.log(
"KRECHET VPN SYSTEM READY"
);
