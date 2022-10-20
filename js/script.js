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
    const isActive = menu.classList.contains('menu-active');

    if (isActive) {
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
    const isActive = e.target.nextElementSibling.classList.contains('menu_sublist-active');

    if (isActive) {
        e.target.nextElementSibling.classList.remove('menu_sublist-active');
        e.target.nextElementSibling.classList.add('menu_sublist-hidden');
        e.target.classList.remove("sublist_open");
        e.target.classList.add("sublist_close");
    } else {
        e.target.nextElementSibling.classList.remove('menu_sublist-hidden');
        e.target.nextElementSibling.classList.add('menu_sublist-active');
        e.target.classList.remove("sublist_close");
        e.target.classList.add("sublist_open");    
    }
}

shopButton.addEventListener('click', toggleMenuActivity);

menuSublists.forEach(element => {
    element.addEventListener('click', toggleSubMenuActivity);
});


// menu
const menuListItems = document.querySelectorAll(".menu-list_item-link");

function toggleVisible(e) {
    const menuImg = document.querySelector(".menu_img-" + e.target.classList[1]);
    //console.log(menuImg);

    const isVisible = menuImg.classList.contains("invisible");

    if (isVisible) {
        menuImg.classList.remove("invisible");
        menuImg.classList.add("visible");
    } else {
        menuImg.classList.remove("visible");
        menuImg.classList.add("invisible");
    }
}

menuListItems.forEach(listItem => {

    listItem.addEventListener('mouseover', toggleVisible, true);
    listItem.addEventListener('mouseout', toggleVisible, true);
});


