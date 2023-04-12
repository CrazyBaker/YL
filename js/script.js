const shopButton = document.querySelector(".shopButton");
const menu = document.querySelector(".menu");
const headerLogoMain = document.querySelector(".header_logo-main");
const body = document.querySelector("body");
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
const studioListItems = document.querySelectorAll(".studio-col_item-link");

function toggleVisibleCategoty(e) {
    const category = e.target.dataset.category;
    const menuImg = document.querySelector(".menu_img-" + category);
    const isVisible = menuImg.classList.contains("invisible");

    if (isVisible) {
        menuImg.classList.remove("invisible");
        menuImg.classList.add("visible");
    } else {
        menuImg.classList.remove("visible");
        menuImg.classList.add("invisible");
    }
}

function toggleStudioCategoty(e) {
    const category = e.target.dataset.studiocat;

    const studioImg = document.querySelector(".studio_img-" + category);
    const isVisible = studioImg.classList.contains("visible");

    if (isVisible) {
        studioImg.classList.remove("visible");
        studioImg.classList.add("invisible");

    } else {
        studioImg.classList.remove("invisible");
        studioImg.classList.add("visible");
    }
}

menuListItems.forEach(listItem => {

    listItem.addEventListener('mouseover', toggleVisibleCategoty, true);
    listItem.addEventListener('mouseout', toggleVisibleCategoty, true);
});

studioListItems.forEach(listItem => {

    listItem.addEventListener('mouseover', toggleStudioCategoty, true);
    listItem.addEventListener('mouseout', toggleStudioCategoty, true);
});

//Product favorite-icon
const favoriteIcon = document.querySelector(".product_description-favorites-icon");

function toggleFavoriteIcon (e) {
    const isActive = e.target.classList.contains("product_description-favorites-icon_active");
    
    if(isActive) {
        e.target.classList.remove("product_description-favorites-icon_active");
    } else {
        e.target.classList.add("product_description-favorites-icon_active");
    }
}

if(favoriteIcon) {
    favoriteIcon.addEventListener('click',toggleFavoriteIcon);
}


// Slider
const coverImgList = document.querySelectorAll(".slider_img-cover");
const mainSlide = document.querySelector(".slider_main-slide");
const slideWrapper = document.querySelector(".slider_main-wrapper");
const sliderLeftButton = document.querySelector('.slider_left-button');
const sliderRightButton = document.querySelector('.slider_right-button');

function selectImg (e) {
    coverImgList.forEach((coverElement) => coverElement.classList.remove('cover-active'))
    e.target.classList.add("cover-active");

    coverImgList.forEach((coverElement) => {
        if (coverElement.classList.contains('cover-active')) {
            mainSlide.attributes.src.nodeValue = `${e.target.nextElementSibling.attributes.src.nodeValue}`;
            mainSlide.style.backgroundSize = 'cover';
        }
    })

};

function prevSlide() {
    for (let i = 0; i < coverImgList.length; ++i) {
        if (coverImgList[i].classList.contains('cover-active')) {            
            coverImgList[i].classList.remove('cover-active');
            if (i - 1 < 0) {
                coverImgList[coverImgList.length - 1].classList.add('cover-active');
                slideWrapper.style.right = (coverImgList.length - 1) * 534 + "px"
                break;
            }  
            coverImgList[i - 1].classList.add('cover-active');  
            slideWrapper.style.right = Number(slideWrapper.style.right.substr(0, slideWrapper.style.right.length - 2)) - 534 + "px"; 
            break;
        }
    }
}

function nextSlide() {
    for (let i = 0; i < coverImgList.length; ++i) {
        if (coverImgList[i].classList.contains('cover-active')) {
            coverImgList[i].classList.remove('cover-active');
            if (i + 1 > coverImgList.length - 1) {
                coverImgList[0].classList.add('cover-active');
                slideWrapper.style.right = 0 + "px"
                break;
            }  
            coverImgList[i + 1].classList.add('cover-active'); 
            slideWrapper.style.right = Number(slideWrapper.style.right.substr(0, slideWrapper.style.right.length - 2)) + 534 + "px"; 
            break;
        }
    }
}

coverImgList.forEach((coverElement) => {
        coverElement.addEventListener('click', selectImg);
    }
);

sliderLeftButton.addEventListener('click', prevSlide);
sliderRightButton.addEventListener('click', nextSlide);