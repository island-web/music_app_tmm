
const { ipcRenderer } = require('electron');
const fs = require('fs-extra');
const path = require('path');

async function getGeolocationByIP() {
    try {

		const dataLocation = JSON.parse(fs.readFileSync(path.join('storage', 'data_location.json'), 'utf-8'));
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();

        console.log(data.city);
        console.log(dataLocation);

        if (data.city !== dataLocation.city) {
        	fs.writeFileSync(path.join('storage', 'data_location.json'), JSON.stringify(data));
        	ipcRenderer.send('reload-app');
        }

        
    } catch (error) {
        return 'Ошибка получения геопозиции';
    }
}

window.addEventListener('DOMContentLoaded', () => {
	console.log('Start preload');
	getGeolocationByIP();
})
