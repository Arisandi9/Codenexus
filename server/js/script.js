
const search_icon_mobile = document.querySelector('.search-icon-mobile');
const search_mobile = document.querySelector('.search-mobile');
const search = document.querySelector('.search');
const search_icon = document.querySelector('.search-icon');


search_icon_mobile.addEventListener('click', (e) => {
    search_mobile.classList.toggle('show-menu-mobile');
})
search_icon.addEventListener('click', (e) => {
    search.classList.toggle('show-menu');
})

