



global.path = require('path'); 
global.fs = require('fs-extra');
global.os = require('os');
global.$ = require('jquery');

global.USER_DATA_ = JSON.parse(sessionStorage.getItem('user'), 'utf-8');


const MAC = require('getmac').default;
const io = require('socket.io-client');
const host = 'http://musictmm.com';
const port = 12048;
const location = JSON.parse(fs.readFileSync(path.join('storage', 'data_location.json'), 'utf-8'));

    
const DATA_CONNECT = {
    info: {
        mac: MAC(),
        geolocation: location,
        type: os.type(),
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        hostname: os.hostname(),
        cpus: os.cpus(),
        homedir: os.homedir()
    }
};

global.SOCK_ = io(`${host}:${port}`, { auth: { key: "JEPbF46zxSbntZnkmXf1uib7YG203C8Xq6", data: DATA_CONNECT.info } });
