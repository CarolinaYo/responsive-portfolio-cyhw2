$(document).ready(function () {
  $("#bioDetail").text(
    "Hello, my name is Carolina."
  );

  let a = $("<a>").text("GitHub");
  let gitHubLink = a.attr("href", "https://github.com/CarolinaYo");
  let pOne = $("<p>").text("You can find my work on my ").append(gitHubLink);

  // $("#bioDetail").append(pOne);

  let resume = $("<a>").text("Click here to view resume");
  let pdf = resume.attr("href", "assets/YoedhanaResume_bootcamp2020.pdf");
  let pTwo = $("<p>").text("Resume: ").append(pdf);
  $("#contactInfo").append(pTwo);
});
