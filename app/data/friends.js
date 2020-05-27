const friends = [
    {
        id: 1,
        name: ["Golden Boy", "Best Boi"],
        pic: "https://i.pinimg.com/474x/4e/99/6d/4e996dd86fbb5018220ef621bea73456.jpg",
        score: ["1", "4", "2", "5", "3", "4", "2", "5", "1", "2"],
        description: `The Golden Retriever is a large-sized lovable goofy doofus of doggo bred as gun dogs to retrieve shot waterfowl such as quack quack doggies but we like them so much that we keep them around for scritch scrotches, walkies, and just because LOOK AT THEM OMG, and were named ‘retriever’ because when hooman do a throw, they always go a get."`,
        specs: `<h6 class="card-header">Temperament: Reliable, Goofy, Nice, Amazing, Awesome, so heckin’ CUTE.</h6>
        <h6 class="card-header"><b>Life Span: </b>PLEASE MAKE LIFE SPAN LONGER</h6>
        <h6 class="card-header"><b>Height: </b>Female: 51-56cm, Male: 55-61cm </h6>
        <h6 class="card-header"><b>Weight: </b>Female: 25-32kg, Male: 30-34kg</h6>
        <h6 class="card-header"><b>Did You Know?: </b>Golden Retriever is the most popular dog breed because I say so, who cares about registrations worldwide. They are the best. End of story. </h6>`
    }, 
    {
        id: 2, 
        name: ["Corgo", "Loaf of Love"],
        pic: "https://i.pinimg.com/474x/dd/00/8c/dd008c69b2696c24c3d37983fb30e964.jpg",
        score: [1, 5, 2, 3, 5, 2, 1, 2, 2, 1],
        description: `The Corgo is a thick af heavenly loaf of love that borks. This CUTE AS HECK waddle boi originated in the empire of Corgia which remains today to be the doggo kingdom with the strongest military presence.</p>
       
         `, 
         specs: ` <h6 class="card-header"> Thickness Level: Thicc af</h6>
        <h6 class="card-header">Temperament: So heck friendly, good boi/10, waddling around all happ, suns out tongue’s out, loves treats and life in general. 
        </h6>
        <h6 class="card-header"><b>Height: </b>Depends if fur is wet or dry. </h6>
        <h6 class="card-header"><b>Weight: </b>Smol</h6>
        <h6 class="card-header"><b>Colors: </b>Burnt Toast, Lightly Toasted Toast, Well Toasted Toast, White Bread</h6>
        <h6 class="card-header"><b>Origin: </b>Corgia</h6>`
    },
    {
        id: 3, 
        name: ["Long Boy", "The Snoot That Ends Wars"],
        pic: "https://i.pinimg.com/474x/db/5b/fc/db5bfc85f8c264b1d78138c7e199cbd5.jpg",
        score: [5, 3, 5, 5, 2, 1, 2, 5, 5, 4],
        description: `<p>The Long Boy is a type of doggo; Originally bred for doin zooms for bets, now appreciated for the longest snoot we done ever seen, boasting a massive snoot to bork ratio. Also there are many recent scientific studies that show if you get a long boy to sit, hims snoot can boot the moon, so yeah that’s pretty cool.</p>`, 
        specs: `<h6 class="card-header">Life Span: As LOOOOOOONG as the Long Boy</h6>
        <h6 class="card-header"><b>Speed: </b>Mach 1 </h6>
        <h6 class="card-header"><b>Temperament: </b>Affectionate, Intelligent, Appeciative of hims length, happiness at how long they are, joy at the snoot to bork ratio they have.</h6>
        <h6 class="card-header"><b>Height: </b>Female: 68-71cm, Male: 71-76cm</h6>
        <h6 class="card-header"><b>Weight:</b> Female: feather, Male: feather</h6>
        <h6 class="card-header"><b>Origin:</b>England, Length Land</h6>`
    },
    {
        id: 4, 
        name: ["Shoob", "Friend"], 
        pic: "https://i.pinimg.com/474x/04/e4/f4/04e4f418a0cc277b12e0ee95d45b11e3.jpg",
        score: [2, 3, 4, 2, 3, 4, 1, 5, 2, 4],
        description: `Shoob is a breed of large-heckin low flying cloud, from the spitz group, with a thick white double-layer coat of pure floof. It takes its name from the Samoyedic peoples of Siberia.`,
        specs: ` <h6 class="card-header"><b>Hypoallergenic:</b>Yes</h6>
        <h6 class="card-header"><b>Life Span:</b> Will never be long enough.</h6>
        <h6 class="card-header"><b>Temperament:</b> Stubborn, Playful, Lively, Alert, Friendly, Sociable Doge</h6>
        <h6 class="card-header"><b>Height:</b> Female: 40-50cm, Male: 51-63cm</h6>
        <h6 class="card-header"><b>Weight:</b> Female: cloud, Male: bigger cloud</h6>
        <h6 class="card-header"><b>Colors:</b>White, Pureness, Biscuit</h6>`
    },
    {
        id: 5, 
        name: ["Pibble", "Mistunderstood Boi"], 
        pic: "https://i.pinimg.com/474x/63/27/a3/6327a30804f8a7e514ac363e27e6d7de.jpg",
        score: [2, 4, 1, 1, 1, 5, 1, 2, 3, 3],
        description: `Pibble is the totally official name for the extremely good boi that gets a bad rap but is actually just really gud and wants love and tummy rubs. Please pet and boop.</p>`,
        specs: `<h6 class="card-header"><b>Classification:</b>Canis lupus ReallyGoodBoyus</h6>
        <h6 class="card-header"><b>Temperament:</b>Very gud boi, extrem nice good and frendly, happ, moveable, not evil like the media perceives.</h6>
        <h6 class="card-header"><b>Origin:</b> Good Boi Land, Milky Good Way, Local Good Cluster, Andomepupa Galazy, visible and good universe. </h6>
        <h6 class="card-header"><b>Rank:</b> v v v gud</h6>`    
    },
    {
        id: 6, 
        name: ["Puggo", "Curly Tail Smoosh Boi"], 
        pic: "https://i.pinimg.com/474x/b9/2a/61/b92a619821edf27d286da14af92f9c49.jpg",
        score: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        description: `The Pug is the breed of doggo well known for the squishe potential of hims cute lil face and the puggo’s distinctive many folds that much like the corgo, can often allure to a loaf-like appearance. With physically distinctive features of a wrinkly, mushy, squishy, short, little face and curled tailerino.`,
        specs: ` <h6 class="card-header"><b>Classification:</b>Canis lupus Squisherius</h6>
        <h6 class="card-header"><b>Height:</b> As smol as a smol bean. </h6>
        <h6 class="card-header"><b>Life Span:</b>Much longer than the snoot. </h6>
        <h6 class="card-header"><b>Origin:</b> Smol Bean Land</h6>
        <h6 class="card-header"><b>Temperament:</b> Sassy af, Demanding of treatos and boops, stubborn, docile, playful, charming, did I mention sassy af? </h6>
        <h6 class="card-header"><b>Needs:</b>Chimken Nuggers, Boops, Walkies, Ice Cream, Ice Cream, Love, Ice Cream and also Ice Cream. </h6>`
    }
   
];

module.exports = friends;