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
const menuSublists = document.querySelectorAll(".menu-sublist");

function toggleMenuActivity() {
    if (menu.classList.contains('menu-active')) {
        menu.classList.remove('menu-active');
        menu.classList.add('menu-hidden');
        body.style.overflow = 'visible';
    } else {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-active');
        body.style.overflow = 'hidden';
    }
}

function toggleSubMenuActivity(e) {
    if (e.target.nextElementSibling.classList.contains('menu_sublist-active')) {
        e.target.nextElementSibling.classList.remove('menu_sublist-active');
        e.target.nextElementSibling.classList.add('menu_sublist-hidden');
    } else {
        e.target.nextElementSibling.classList.remove('menu_sublist-hidden');
        e.target.nextElementSibling.classList.add('menu_sublist-active');
    }
}

shopButton.addEventListener('click', toggleMenuActivity);

menuSublists.forEach(element => {
    element.addEventListener('click', toggleSubMenuActivity);
});

