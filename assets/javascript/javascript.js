$(document).ready(function () {


    var searchTopics = [];

    function displayGiphyContent() {
        var apiKey = "6Nl1vOuLufwarwOcWJTtu2oLZptflxMD";
        var giphy = $(this).data("search");
        console.log(giphy);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=6Nl1vOuLufwarwOcWJTtu2oLZptflxMD&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var searchResults = response.data;
            console.log(searchResults);
            for (var i = 0; i < searchResults.length; i++) {

                var showDiv = $("<div class='col-md-4'>");

                var rating = searchResults[i].rating;
                var defaultAnimatedSrc = searchResults[i].images.fixed_height.url;
                var staticSrc = searchResults[i].images.fixed_height_still.url;
                var showImage = $("<img>");
                var p = $("<p>").text("Rating: " + rating);

                showImage.attr("src", staticSrc);
                showImage.addClass("giphy");
                showImage.attr("data-state", "still");
                showImage.attr("data-still", staticSrc);
                showImage.attr("data-animate", defaultAnimatedSrc);
                showDiv.append(p);
                showDiv.append(showImage);
                $("#outputContainer").prepend(showDiv);
            }
        });
    }

    $(".userInputButton").on("click", function (event) {
        // prevents empty record from being submitted
        event.preventDefault();
        alert("userInputButtonWorks");
        // variable capturing word input and trimming
        var newGif = $("#giphyWord").val().trim();
        // push to gif topics array
        searchTopics.push(newGif);
        console.log(searchTopics);
        $("#giphyWord").val('');
        displayButtons();
    });


    function displayButtons() {
        $("#giphyWordDisplay").empty();
        for (var i = 0; i < searchTopics.length; i++) {
            var a = $('<button class="btn btn-primary">');
            a.attr("id", "show");
            a.attr("data-search", searchTopics[i]);
            a.text(searchTopics[i]);
            $("#giphyWordDisplay").append(a);
        }
    }

    displayButtons();
    $(document).on("click", "#show", displayGiphyContent);

    $(document).on("click", ".giphy", pausePlayGifs);

    function pausePlayGifs() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state","animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        
        }
    }
});