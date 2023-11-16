const PLAYER = new Audio();

PLAYER.src = './demo/Tiësto - The Business.mp3';
$('.p-title-control').text('Tiësto - The Business');

const CONTROLS = {
    play_pause: document.getElementById('play-pause-btn'),
    next: document.getElementById('next-btn'),
    prev: document.getElementById('prev-btn'),
    list: document.getElementById('control-list-songs-btn'),
    volume: document.getElementById('volume-btn'),
    like: document.getElementById('control-like-song-btn'),
    add_song: document.getElementById('control-add-song-btn'),
};



// listen to player events

const observerPlayBtn = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            if (CONTROLS.play_pause.classList.contains('fa-play')) {
                PLAYER.pause();
            } else {
                PLAYER.play();
            }
        }
    });
});

const observerPlayer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'src') { console.log('load new src'); PLAYER.load() }
    });
});

PLAYER.onplay = () => {
    PLAYER.addEventListener('timeupdate', () => {
        var percentPlayed = (PLAYER.currentTime / PLAYER.duration) * 100;

        // Устанавливаем новую ширину progress-bar с плавной анимацией
        $('.progress-bar').css('width', percentPlayed + '%');
        //$('.progress-bar').attr('aria-valuenow', percentPlayed);
    });
};

PLAYER.onpause = () => {
    console.log('pause');
}

PLAYER.onended = () => {
    $('.progress-bar').css('width', '0%');
}