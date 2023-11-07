require("./server/.globals.js");
require("./server/.globals_mod.js");

//Подключение основных блоков
$('.navbar').load('./views/navbar.html');
$('.footer').load('./views/control_panel.html');
$('.home').load('./views/home.html');








function showBlock(name){
    $(`.${name}`).css('display', 'block')
}