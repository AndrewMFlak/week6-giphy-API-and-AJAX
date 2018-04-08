$(document).ready(function () {

    // $(".userInputButton").click(function () {
    //     alert("giphyWord button works");
    //     var giphyWord = $("#giphyWord").val();
    //     var buttonName = (giphyWord + "Button")
    //     console.log(giphyWord);
    //     console.log(buttonName);
    //     $("#giphyWordDisplay").append(('<input type="button" value="' + giphyWord + '" class="' + buttonName + '">'));
    //     $("#giphyWord").append("input[type=text], textarea").val("");;
    // });
    displayGiphyContent() {
        var giphy = $(this).attr("data-name");
    }
});