//Global Variables
var portfolioInfo = [
    {
        name: "Babes in Brunchland",
        image: "assets/images/brunchlandScreencapture.png",
        url: "https://savannahisrael.github.io/BabesInBrunchland/index.html",
    },
    {
        name: "Turkey Trivia",
        image: "assets/images/triviaGameScreencapture.png",
        url: "https://gdepriest.github.io/TriviaGame/",
    },
    {
        name: "Joy Generator",
        image: "assets/images/joyGeneratorScreencapture.png",
        url: "https://gdepriest.github.io/GIFtastic/",
    },
    {
        name: "Poo Collector",
        image: "assets/images/poopCollectorScreencapture.png",
        url: "https://gdepriest.github.io/unit4-game/",
    },
    {
        name: "National Parks Hangman",
        image: "assets/images/natlParksHangmanScreencapture.png",
        url: "https://gdepriest.github.io/Word-Guess-Game/",
    },
   
]

//On click of portfolio button, slide down modal, display portfolio information

$("#portfolio-btn").on("click", function() {
    $("#aboutMeCard").hide();
    $(".modal").slideDown();
    
    var modalTitle = $("#modalTitle").text("Portfolio");

    portfolioInfo.forEach(function(element) {
       var projTitle = element.name;
       var projImage = element.image;
       var projUrl = element.url;
       
       var hRef = $("<a>").attr("href", projUrl).attr("target", "blank");
       var card = $("<div>").addClass("card projCard bg-dark text-white");
       var cardImg = $("<img>").attr("src", projImage).attr("alt", "project screen capture").addClass("card-img");
       $(card).append(cardImg);
       $(hRef).append(card);


       $(".modal-body").append(hRef);
       
    
    })
})

$(".close").on("click", function() {
    $("#aboutMeCard").show();
    $(".modal").slideUp();
    $("#modalTitle").empty();
    $(".modal-body").empty();

})



