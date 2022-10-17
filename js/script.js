// const cartCounter = document.getElementById("counter-number");

// // change font in cart 
// function changeCartFont() {
//     if (+cartCounter.textContent > 9) {
//         cartCounter.style.fontSize = "10px";
//     } else {
//         cartCounter.style.fontSize = "12px";
//     }
// };

// changeCartFont();

// let observer = new MutationObserver(changeCartFont);
// observer.observe(cartCounter, {
//     attributes: true,
// });


// setTimeout(() => cartCounter.textContent = "1", 2000);


const shopButton = document.querySelector(".shopButton");
const menu = document.querySelector(".menu");
const headerLogoMain = document.querySelector(".header_logo-main");
const body = document.querySelector(".body");

function toggleActivity() {
    if (menu.classList.contains('menu-active')) {
        menu.classList.remove('menu-active');
        menu.classList.add('menu-hidden');
       // headerLogoMain.style.display = 'flex';
        body.style.overflow = 'visible';
    } else {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-active');
        //headerLogoMain.style.display = 'none';
        body.style.overflow = 'hidden';
    }
}

shopButton.addEventListener('click', toggleActivity);

