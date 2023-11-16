require("./server/.globals.js");
require("./server/.globals_mod.js");

const { ipcRenderer } = require('electron');


// аля react rout только проще и быстрее
function showBlock(name) {
    
    // Проверяем есть ли в sessionStorage запись о последнем нажатом меню и если есть то скрываем его блок
    if(sessionStorage.getItem('menu-button-click')) { $(`.${sessionStorage.getItem('menu-button-click')}`).css('display', 'none') }

    // Записываем в sessionStorage id нового нажатого меню
    sessionStorage.setItem('menu-button-click', name);

    // Получаем блок с id="main-window"
    const mainWindow = document.getElementById('main-window');

    // Присваиваем блоку стиль display: block
    $(`.${name}`).css('display', 'block');
    
}

 

if(localStorage.getItem('auth') !== 'true') {
    //Подключение блока авторизации
    $('.login-window').load('./views/login.html');
    $('.login-window').css('display', 'contents');
}else {
    //Подключение основных блоков
    $('.navbar').load('./views/navbar.html');
    $('.footer').load('./views/control_panel.html');
    $('.home').load('./views/home.html');
    $('.profile').load('./views/profile.html');
    $('.my_playlists').load('./views/my_playlists.html');
    showBlock('home');
}