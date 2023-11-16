


//Изменение иконки плей на паузу и наоборот
CONTROLS.play_pause.addEventListener('click', function() {
    if (this.classList.contains('fa-play')) { this.classList = 'fa-solid fa-pause fa-fade'; $('.p-title-control').addClass('fa-fade') }
    else { this.classList = 'fa-solid fa-play'; $('.p-title-control').removeClass('fa-fade') }
});

// Настраиваем наблюдение за изменениями атрибутов класса
observerPlayBtn.observe(CONTROLS.play_pause, { attributes: true });
observerPlayer.observe(PLAYER, { attributes: true });

// Перемотка песни по клику на progress-bar
$('.progress').click(function (e) {
    const progressBarWidth = $(this).width();
    const clickX = e.pageX - $(this).offset().left;
    
    const newPositionProgress = (clickX / progressBarWidth) * 100;
    const newTime = (PLAYER.duration * newPositionProgress) / 100;

    $('.progress-bar').css('width', newPositionProgress + '%');
    //$('.progress-bar').attr('aria-valuenow', newPositionProgress);
    PLAYER.currentTime = newTime;
});
