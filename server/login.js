$('.login-modal').css('display', 'block');

function closeDialogWindow() { ipcRenderer.send('reload-app') }

function auth() {

    const lgn = $('#login').val();
    const pswd = $('#password').val();

    $('.login-modal').css('display', 'none');
    $('.result-login').css('display', 'block');

    $('.result-login').html(`
        <h3 class="brand-name-result" style="margin-bottom: 5%">Check your data ...</h3>
        <img src="./img/preload.gif" alt="loading" style="width: 100px; height: 100px; margin: 0 auto;">
    `);
    setTimeout(() => { SOCK_.emit('auth', { login: lgn, password: pswd}) }, 2000);
}

SOCK_.on('auth', (res) => {
    if(res.status) {

        $('.result-login').html(`
            <h3 class="brand-name">Welcome, ${res.data.login}!</h3>
            <p class="brand-name">Application will be reload in 2 seconds ...</p>
        `);

        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', JSON.stringify(res.data));

        setTimeout(() => { window.location.reload() }, 2000);
        
    } else {
        $('.result-login').css('display', 'none');
        $('.login-modal').css('box-shadow', '0px 0px 5px 3px red');
        $('.login-modal').css('border', '1px solid red');
        $('.brand-name').html('Wrong login or password! Try again ...');
        $('.login-modal').css('display', 'block');
    } 
});