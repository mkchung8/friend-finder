$(document).ready(function () {
    console.log('survey.js is connected and working')
    $("#submit").on("click", function () {
        event.preventDefault();

        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        if (validateForm()) {
            var userData = {
                name: $("#inputName").val(),
                email: $("#inputEmail").val(),
                scores: [
                    $("#q1Input").val(),
                    $("#q2Input").val(),
                    $("#q3Input").val(),
                    $("#q4Input").val(),
                    $("#q5Input").val(),
                    $("#q6Input").val(),
                    $("#q7Input").val(),
                    $("#q8Input").val(),
                    $("#q9Input").val(),
                    $("#q10Input").val(),
                ]
            };

            $.post("/api/friends", userData, function (data) {
                $("#main").empty();
                $("#main").html(`
                    <div class="card" id="allFriendsDiv">
                        <h4 class="card-header text-center">Best Match</h4>
                            <div class="card-body">
                                <h1 class="card-title" id="match-name-1">GoodBoy</h1>
                                <h5 class="text-muted" id="match-name-2">Goodest Dude</h5>
                            <img id="match-image" src="https://i.pinimg.com/474x/4e/99/6d/4e996dd86fbb5018220ef621bea73456.jpg"> 
                                 <h5 class="bold">Description </h5>
                                 <p class="card-text" id="description"></p>
                                 <h5 class="bold" id="specs">Specs</h5>
                            <a href="/allfriends" id="view-all" class="btn btn-primary">View All Friends </a>
                            </div>
                      </div>
                `);
                $("#match-name-1").text(data.name1);
                $("#match-name-2").text(data.name2); 
                $("#match-image").attr("src", data.photo);
                $("#description").text(data.description);
                $("#specs").append(data.specs);

            }); 
        }
        else {
            alert("Please fill out all fields before submitting!");
        }
    });

});
