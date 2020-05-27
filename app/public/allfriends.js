$.get("/api/friends", function (data) {
    // console.log(data)
    for (var i = 0; i < data.length; i++) {
        let card = $(`<div class="card-body" id="card-${data[i].id}">`); 
        card.html(`
        <h1 class="card-title" id="match-name-1">${data[i].name[0]}</h1>
        <h5 class="text-muted" id="match-name-2">${data[i].name[1]}</h5>
        <img class="all-image" src="${data[i].pic}"> 
        <h5 class="bold">Description </h5>
        <p class="card-text" id="description">${data[i].description}</p>
        <h5 class="bold" id="specs">Specs</h5>
        ${data[i].specs}
        `);   
        $("#allFriendsDiv").append(card); 
    }; 
});