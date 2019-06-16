//Global Variables
var portfolioInfo = [
    {
        name: "Babes in Brunchland",
        image: "assets/images/brunchlandScreencapture.png",
        url: "https://savannahisrael.github.io/BabesInBrunchland/index.html",
        summary: "UDEN Bootcamp Project 1: An app that delivers brunch options (with maps!) based on zip code and price point.",
    },
    {
        name: "Turkey Trivia",
        image: "assets/images/triviaGameScreencapture.png",
        url: "https://gdepriest.github.io/TriviaGame/",
        summary: "A turkey trivia game, with dynamically displayed questions and a timer.",
    },
    {
        name: "Joy Generator",
        image: "assets/images/joyGeneratorScreencapture.png",
        url: "https://gdepriest.github.io/GIFtastic/",
        summary: "A joy generator, that makes an ajax call to the Giphy API to return gifs based on user input.",
    },
    {
        name: "Poo Collector",
        image: "assets/images/poopCollectorScreencapture.png",
        url: "https://gdepriest.github.io/unit4-game/",
        summary: "A good-citizen game, where collecting poops wins you points!",
    },
    {
        name: "National Parks Hangman",
        image: "assets/images/natlParksHangmanScreencapture.png",
        url: "https://gdepriest.github.io/Word-Guess-Game/",
        summary: "If at first you don't succeed, try, try again.  My first foray into JavaScript, which was initially a failure.",
    },
   
]

//Firebase

// var firebaseConfig = {
//     apiKey: "AIzaSyCFQnQO4kHjqQRnu7SeWj-4kL9YIEaFbII",
//     authDomain: "testing-testing-84a4d.firebaseapp.com",
//     databaseURL: "https://testing-testing-84a4d.firebaseio.com",
//     projectId: "testing-testing-84a4d",
//     storageBucket: "testing-testing-84a4d.appspot.com",
//     messagingSenderId: "813376100953",
//     appId: "1:813376100953:web:5453e22a0437e313"
// };
//         // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

//On click of portfolio button, slide down modal, display portfolio information

$("#portfolio-btn").on("click", function() {
    $("#aboutMeCard").hide();
    $(".modal").slideDown('slow');
    
    $("#modalTitle").text("Portfolio");

    portfolioInfo.forEach(function(element) {
       var projTitle = element.name;
       var projSumm = element.summary;
       var projImage = element.image;
       var projUrl = element.url;
       
       var hRef = $("<a>").attr("href", projUrl).attr("target", "blank");
       var card = $("<div>").addClass("card projCard bg-dark text-white");

       
       
       var cardImg = $("<img>").attr("src", projImage).attr("alt", "project screen capture").addClass("card-img");

       var cardOverlay = $("<div>").addClass("projInfo card-img-overlay").hide();
       var cardTitle = $("<h4>").addClass("card-title").text(projTitle);
       var cardSumm = $("<p>").addClass("card-text").text(projSumm);
       $(cardOverlay).append(cardTitle);
       $(cardOverlay).append(cardSumm);

       $(card).append(cardImg);
       $(card).append(cardOverlay);
       $(hRef).append(card);

       $(".modal-body").append(hRef);  
       
       function infoShow() {
            $(cardOverlay).slideDown('slow');
       };

       function infoHide() {
           $(cardOverlay).slideUp('slow');
       };

       $(hRef).hover(infoShow, infoHide);

       
    
    })
})

$(".close-btn").on("click", function() {
    $("#aboutMeCard").show();
    $(".modal").slideUp();
    $("#modalTitle").empty();
    $(".modal-body").empty();
    $(".submit-btn").remove();

})

$("#contact-btn").on("click", function() {
    $("#aboutMeCard").hide();
    $(".modal").slideDown('slow');

    $("#modalTitle").text("Contact Me");

    var form = $("<form>");

    var nameForm = $("<div>").addClass("form-group");
    var nameLabel = $("<label>").attr("for", "nameInput").text("Name")
    var nameInput = $("<input>").attr("type", "name").attr("id", "nameInput").addClass("form-control").attr("placeholder", "First & Last Name");    
    $(nameForm).append(nameLabel);
    $(nameForm).append(nameInput);


    var emailForm = $("<div>").addClass("form-group");
    var emailLabel = $("<label>").attr("for", "emailInput").text("Email Address")
    var emailInput = $("<input>").attr("type", "email").attr("id", "emailInput").addClass("form-control").attr("placeholder", "name@example.com");    
    $(emailForm).append(emailLabel);
    $(emailForm).append(emailInput);

    var textForm = $("<div>").addClass("form-group");
    var textLabel = $("<label>").attr("for", "textInput").text("Message");
    var textInput = $("<textarea>").addClass("form-control").attr("id", "textInput").attr("rows", "5").attr("placeholder", "Your thoughts here.");
    $(textForm).append(textLabel);
    $(textForm).append(textInput);

    $(form).append(nameForm);
    $(form).append(emailForm);
    $(form).append(textForm);

    $(".modal-body").append(form);

    var submitBtn = $("<button>").addClass("submit-btn btn btn-primary btn-sm").attr("type", "submit").text("Submit");
    $(".modal-footer").prepend(submitBtn);

})

$(".submit-btn").on("click", function(event) {
    event.preventDefault();
    
    var nameInput = $("#nameInput").val().trim();
    var emailInput = $("#emailInput").val().trim();
    var textInput = $("#textInput").val().trim();

    var newMessage = {
        name: nameInput,
        email: emailInput,
        msg: textInput,
    }

    database.ref().push(newMessage);

    $("#nameInput").val("");
    $("#emailInput").val("");
    $("#textInput").val("");    

})