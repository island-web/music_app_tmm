require("./server/.globals.js");
require("./server/.globals_mod.js");

//Подключение основных блоков
$('.navbar').load('./views/navbar.html');
$('.footer').load('./views/control_panel.html');
$('.home').load('./views/home.html');
$('.profile').load('./views/profile.html');clearImmediate
$('.my_playlists').load('./views/my_playlists.html');



// аля react rout только проще и быстрее
function showBlock(name) {
    
    const mainWindow = document.getElementById('main-window');

    // Получаем все дочерние элементы div внутри "main-window"
    const divs = mainWindow.querySelectorAll('div');

    // Перебираем все дочерние элементы и присваиваем им стиль display: none
    divs.forEach(div => { div.style.display = 'none' });

    //присваиваем display: block для полученого блока
    $(`.${name}`).css('display', 'block');
}

SOCK_.on("connect", () => { console.log("Connect to server!") });
SOCK_.emit("get_all_playlists");
SOCK_.on("all_playlists", (data) => { console.log(data) });







