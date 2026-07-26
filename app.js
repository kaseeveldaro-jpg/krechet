const tg = window.Telegram?.WebApp;


// Telegram Mini App

if (tg) {

    tg.expand();

    tg.ready();

}



// Переключение страниц

function openPage(pageId) {


    const pages = document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });



    const target = document.getElementById(pageId);


    if (target) {

        target.classList.add("active");

    }



    // вибрация Telegram

    if (tg?.HapticFeedback) {

        tg.HapticFeedback.impactOccurred("light");

    }

}



// выбор тарифа


const tariffButtons =
document.querySelectorAll(".tariff button");


const payButton =
document.querySelector(".pay");



tariffButtons.forEach(button => {


    button.addEventListener("click", () => {



        tariffButtons.forEach(btn => {

            btn.style.borderColor =
            "rgba(255,255,255,.15)";

            btn.style.boxShadow =
            "none";

        });



        button.style.borderColor =
        "#00d4ff";


        button.style.boxShadow =
        "0 0 25px #00d4ff";



        if(payButton){

            let price =
            button.textContent
            .replace(/\s+/g," ")
            .trim();


            payButton.textContent =
            "💳 Оплатить " + price;

        }



        if(tg?.HapticFeedback){

            tg.HapticFeedback.selectionChanged();

        }


    });


});





// кнопка "Попробовать за 1₽"

const trialButton =
document.querySelector(".main-btn");


if(trialButton){

    trialButton.addEventListener("click",()=>{


        openPage("tariffs");


    });

}





// эффект запуска


window.addEventListener("load",()=>{


    document.body.style.opacity="0";


    setTimeout(()=>{


        document.body.style.transition =
        "opacity .8s ease";


        document.body.style.opacity="1";


    },100);


});





console.log(
"KRECHET VPN v2 loaded"
);
