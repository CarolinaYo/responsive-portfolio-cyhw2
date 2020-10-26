
$(document).ready (function() {
    
    $("#bioDetail").text("Hello, my name is Carolina.  Welcome to my portfolio page.  I am a student at coding bootcamp for web development.");
    
    let a = $("<a>").text("https://github.com/CarolinaYo");
    let gitHubLink = a.attr("href", "https://github.com/CarolinaYo");
    let pOne = $("<p>").text("You can find my work repo at: ").append(gitHubLink);
    $("#bioDetail").append(pOne);
   });

