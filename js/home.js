// must import ui to inheritance
import { ui } from './ui.js';
import { details } from './details.js';
class home extends ui {
    constructor() {
        super();  // Call the constructor of the parent class (ui)
        // Initialize a property to store the result
    }


    async getGamesByCategory(category) {
        let options = {
            method: 'GET',
            headers: {
                'X-Rapidapi-Key': '9b2089ac8bmshc1505a0fda53ca0p15d837jsn21ee4863ae32',
                'X-Rapidapi-Host': 'free-to-play-games-database.p.rapidapi.com',
                'Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let data = await response.json();

        return data;
    }

    test() {
        console.log('home test');
    }

    addGames() {
        let navItems = document.querySelectorAll('.my-navItem');
        const that = this;  // Save the context of 'this'

        for (const item of navItems) {
            item.addEventListener('click', async function () {
                let active = document.querySelector('.my-active');
                active.classList.remove('my-active');
                this.classList.add('my-active');
                let x = this.innerText;


                // Call getGamesByCategory with x
                let y = await that.getGamesByCategory(x);
                // console.log(y);


                // Update the UI
               
                
                that.displayGamesByCategory(y);
                that.showGameDetails(y);

            });

        }
    }
    showGameDetails(arr) {


        const detailsInstance = new details();
        let cards = document.querySelectorAll(".my-card");
        const that = this;
        cards.forEach(card => {
            card.addEventListener('click', async function () {

                

                let x = await detailsInstance.getDetailsByID(this.id);
                
                that.displayGameDetails(x);
                
                // sol-1
                //    is there a better way?!!!! yes you can send the id as an attribute to the card in the display games, check the videos.
                //    can i make an attr inside element ?!!!!!
                // but you can set the id value? what if I need the card id to be something else.
                // find another solution....
                // sol-2
                // send the array to this function in a for loop and compare the title to card title then send the id value.

                // const titleElement = this.querySelector('.card-title h6');
                // const titleText = titleElement.innerText;
                //    for (const game of arr){

                //     if(titleText == game.title){

                //         console.log(game.id);
                //     }
                //    }


                // what make card special is its title.

                //  let x = getDetailsByID(id)



            });
        });
    }
    async loadGames() {
        const that = this;
        let y = await that.getGamesByCategory("mmorpg");

        // Update the UI

        that.displayGamesByCategory(y);
        that.showGameDetails(y);
    }



}




export { home }
