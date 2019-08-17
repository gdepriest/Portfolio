//Global Variables
var portfolioInfo = [
    {
        name: "HER COSST",
        image: "assets/images/project2AvgResCapture.png",
        url: "https://hercosst2018.herokuapp.com/",
        summary: "This app calculates an estimate of the percent of Colorado State sales tax revenue that was generated from female-specific items. It uses a Node and Express Web Server, is backed by a MySQL database, and uses ChartJS to display the data."
    },
    {
        name: "Between Two Puns",
        image: "assets/images/burgerAppScreencapture.png",
        url: "https://lit-tor-96003.herokuapp.com/",
        summary: "A burger ordering app, which uses MySQL, Node, Express, Handlebars and a homemade ORM."
    },
    {
        name: "Friend Finder",
        image: "assets/images/friendFinderCapture.png",
        url: "https://friend-matcher31.herokuapp.com/",
        summary: "Node & Express app that takes answers from users' surveys, then compares their answers with those from other users."
    },
    {
        name: "BAMazon",
        image: "assets/images/bamazonCapture.PNG",
        url: "https://github.com/gdepriest/BAMazon",
        summary: "NodeJS & MySQL project with 3 apps: customer, manager and supervisor."
    },
    {
        name: "Node Alert - Liri-Bot",
        image: "assets/images/app-screencapture.PNG",
        url: "https://github.com/gdepriest/liri-node-app",
        summary: "NodeJS project, which delivers movie, concert and song information with user input."
    },
    {
        name: "Babes in Brunchland",
        image: "assets/images/brunchlandScreencapture.png",
        url: "https://savannahisrael.com/BabesInBrunchland/",
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

const firebaseConfig = {
    apiKey: "AIzaSyDYD0jQpnJMUGnRegSxbWmtPwnmVxB0AK8",
    authDomain: "bootcampproject-acf6e.firebaseapp.com",
    databaseURL: "https://bootcampproject-acf6e.firebaseio.com",
    projectId: "bootcampproject-acf6e",
    storageBucket: "bootcampproject-acf6e.appspot.com",
    messagingSenderId: "303278467329",
    appId: "1:303278467329:web:317676de3cdd17f9"
};

firebase.initializeApp(firebaseConfig);


var database = firebase.database();

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
       
       var hRef = $("<a>").attr("href", projUrl).attr("target", "blank").addClass("col-md-6");
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
            $(cardOverlay).fadeIn('slow');
       };

       function infoHide() {
           $(cardOverlay).fadeOut('slow');
       };

       $(hRef).hover(infoShow, infoHide);

       
    
    })
})

$(".close-btn").on("click", function() {
    $("#aboutMeCard").show();
    $(".modal").hide();
    $("#modalTitle").empty();
    $(".modal-body").empty();
    $(".submit-btn").remove();


})

$("#contact-btn").on("click", function() {
    $("#aboutMeCard").hide();
    $(".modal").slideDown('slow');

    $("#modalTitle").text("Contact Me");

    var form = $("<form>").addClass("col-md-12");

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

    var submitBtn = $("<button>").addClass("submit-btn btn btn-primary btn-sm").attr("id", "submit").attr("type", "submit").text("Submit");
    $(".modal-footer").prepend(submitBtn);

    $("#submit").on("click", function(event) {
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

        var thankYou = $("<div>").attr("id", "thankYou").addClass("text-center");
        var message = $("<h3>").text("Thanks!  I'll be in touch soon.  ❤ G");
        $(thankYou).append(message);

        $(".modal-body").prepend(thankYou);


        $("#nameInput").val("");
        $("#emailInput").val("");
        $("#textInput").val("");    
    
    })

})

{/* <div class="d-none" id="thankYou">
<h3>Thanks!  I'll be in touch soon.  ❤ G</h3>                    
</div> */}