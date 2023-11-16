const { ipcRenderer } = require('electron');

global.getAllPlaylists = () => {
    return {
        muzred: [
            {id:1, name: "Test_muz_red", style: "Lounge", count_songs: 300, img_path: 'https://musictmm.com/newApp/img/playlist_posters/muzred/1.jpg', date_create: '07-11-2023', description: "Best songs from muzred"},
            {id:2, name: "Test_muz_red_2", style: "Rock", count_songs: 200, img_path: 'https://musictmm.com/newApp/img/playlist_posters/muzred/2.jpg', date_create: '06-11-2023', description: "Best songs from muzred 2"},
        ],
        styles: [
            {id:3, name: "Test_styles", style: "Lounge", count_songs: 140, img_path: 'https://musictmm.com/newApp/img/playlist_posters/styles/3.jpg', date_create: '07-11-2023', description: "Best songs from styles"},
        ],
        segment: [
            {id:4, name: "Test_segment", style: "Restoran", count_songs: 320, img_path: 'https://musictmm.com/newApp/img/playlist_posters/muzred/4.jpg', date_create: '07-11-2023', description: "Best songs from segment"},
        ]
    }
}

// Listen from main process



// Listen from server

    



//global functions

global.closeApp = () => { localStorage.setItem('auth', 'false'); ipcRenderer.send('quit-app') }

global.changeControlButton = () => {
    const controlButton = document.getElementById('control-button');
    (controlButton.classList.contains('fa-chevron-up')) ? controlButton.classList.replace('fa-chevron-up', 'fa-chevron-down') : controlButton.classList.replace('fa-chevron-down', 'fa-chevron-up');
}
