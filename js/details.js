// must import ui to inheritance
//  how to send the id?
// where to call it?
// after getting the object> display it by calling display details
// on the details make methods


import { ui } from './ui.js';

export class details extends ui {
    constructor() {
        super()
    }

    async getDetailsByID(id) {
        let options = {
            method: 'GET',
            headers: {
                'X-Rapidapi-Key': '9b2089ac8bmshc1505a0fda53ca0p15d837jsn21ee4863ae32',
                'X-Rapidapi-Host': 'free-to-play-games-database.p.rapidapi.com',
                'Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        let data = await response.json();

        return data;
    }
    test() {
        console.log('details test');
    }

}