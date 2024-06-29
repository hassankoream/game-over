

export class ui{
    constructor(){

    }
    displayGamesByCategory(arr) {
        

        let boxContainer = "";
        
          // Check if games are properly retrieved
        
            for (const game of arr) {

                let shortDesc=game.short_description;
                let x = shortDesc.split(" ").slice(0, 10).join(" ").concat('...');
           
               
             
                boxContainer += `
                <div id="${game.id}" class="my-card col-xl-3 col-lg-4 col-md-6 text-white ">
                    <div class="inner-content p-3">
                        <div class="card-image">
                            <img class="w-100" src="${game.thumbnail}" alt="">
                        </div>
                        <div class="fixed-height">
                        <div class="card-title mt-3 d-flex justify-content-between align-items-center text-capitalize"">
                            <h6>${game.title}</h6>
                            <span class="free text-bg-primary rounded-3">free</span>
                        </div>
                        <p class="text-center card-para text-muted ">${x}</p>
                        </div>
                    </div>
                    <div class="m-0  px-2 py-1 d-flex justify-content-between align-items-center card-group">
                        <span class="bg-second px-2 rounded-3">${game.genre}</span>
                        <span class="bg-second px-2 rounded-3">${game.platform}</span>
                    </div>
                </div>
                `;
            }
                
            document.getElementById('rowData').innerHTML = boxContainer;
  
    }
    async displayGameDetails(game){
        let loader = document.querySelector('.loader-section');
       
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        loader.classList.remove('d-none');
        await delay(500);
        this.goToDetailsPage();
        loader.classList.add('d-none');
        
        
        let detailsBox = `
              <div class="col-md-4">
                       
                        <div>
                            <img class="w-100" src="${game.thumbnail}" alt="">
                        </div>
                    </div>
                    <div class="col-md-8 mt-md-0 mt-3">
                        <h3>Title: <span  class="">${game.title}</span> </h3>
                        <p>Category:<span  class="ms-3 text-black px-2 game-info">${game.genre}</span></p>
                        <p>Platform:<span class="ms-3 text-black px-2 game-info">${game.platform}</span></p>
                        <p>Status:<span class="ms-3 text-black px-2 game-info">${game.status}</span></p>
                        <p>${game.description}</p>
                        <a target="_blank" href="${game.game_url}" class="btn btn-outline-warning my-btn">show game</a>
                    </div>
        `;

       
document.getElementById('details-Data').innerHTML = detailsBox;

this.goHome();


    }
    goToDetailsPage() {
         
       
        let homeSec = document.querySelector('.home');
        let detailsSec = document.querySelector('.game-details');
        homeSec.classList.add('d-none');
        detailsSec.classList.remove('d-none');

    }
    goHome() {
      
        let xMark = document.querySelector('.fa-xmark');
        xMark.addEventListener('click', function() {
            let homeSec = document.querySelector('.home');
            let detailsSec = document.querySelector('.game-details');
            homeSec.classList.remove('d-none');
            detailsSec.classList.add('d-none');
        })
     
    }
    test() {
        console.log('ui test');
    }

}
