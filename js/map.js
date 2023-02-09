const mapImg = document.querySelector(".contacts-info_map-img");
const map = document.querySelector(".contacts_map");
const overlay = document.querySelector(".contacts_overlay");

mapImg.addEventListener('click', mapClick);
overlay.addEventListener('click', overlayClick);

function mapClick() {
  map.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function overlayClick() {
  map.classList.add("hidden");
  overlay.classList.add("hidden");
}