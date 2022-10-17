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

function toggleActivity() {
    if (menu.classList.contains('menu-active')) {
        menu.classList.remove('menu-active');
        menu.classList.add('menu-hidden');
    } else {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-active');
    }
}

shopButton.addEventListener('click', toggleActivity);