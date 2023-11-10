require("./server/.globals.js");
require("./server/.globals_mod.js");

//Подключение основных блоков
$('.navbar').load('./views/navbar.html');
$('.footer').load('./views/control_panel.html');
$('.home').load('./views/home.html');
$('.profile').load('./views/profile.html');clearImmediate
$('.my_playlists').load('./views/my_playlists.html');

//Подключение модальных окон
$('#login-modal').load('./views/modals/login.html');



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

SOCK_.on("connect", () => { console.log("Connect to server!") });

SOCK_.on("all_playlists", (data) => { console.log(data) });







