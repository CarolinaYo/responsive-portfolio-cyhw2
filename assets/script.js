
$(document).ready (function() {
    
    $("#bioDetail").text("Hello, my name is Carolina.  Welcome to my portfolio page.  I am a student at coding bootcamp for web development.");
    
    let a = $("<a>").text("https://github.com/CarolinaYo");
    let gitHubLink = a.attr("href", "https://github.com/CarolinaYo");
    let pOne = $("<p>").text("You can find my work at: ").append(gitHubLink);
    

    $("#bioDetail").append(pOne);


    let resume =$("<a>").text("Click here to view resume");
    let pdf = resume.attr("href", "assets/YoedhanaResume_bootcamp2020.pdf");
    let pTwo = $("<p>").text("Resume: ").append(pdf);
    $("#contactInfo").append(pTwo);


   });

