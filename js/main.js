$(document).ready(function() {

  // Load the navbar into the page
  $("#navbar").load("navbar.html");

  // Load the footer into the page
  $("#footer").load("footer.html");

  // Clear the inputs on refresh
  $("#refresh-button-1").on("click", function() {
    $("#guideTitle").val("");
  });

  $("#refresh-button-2").on("click", function() {
    $("#pageTitle").val("");
  });

  $("#refresh-button-3").on("click", function() {
    $("#boxTitle").val("");
  });

  $("#refresh-button-4").on("click", function() {
    $("#featureTitle").val("");
  });

  // Clear button
  $("#clear-button").on("click", function() {
    location.reload();
  });

  // Save button
  $("#save-button").on("click", function() {

    // Reset all the form inputs
    $(".input-group").removeClass("has-error");
    $(".form-group").removeClass("has-error");

    // GEt the fields
    var guideTitle = $("#guideTitle").val();
    var pageTitle = $("#pageTitle").val();
    var boxTitle = $("#boxTitle").val();
    var featureTitle = $("#featureTitle").val();
    var pastedCode = $("#pasted-code").val();

    // Check if fields are empty
    if (guideTitle != "" && pageTitle != "" && boxTitle != "" && featureTitle != "") {

      // Concatenate the filename for saving and replace space with hyphens
      var fileNameToSave = guideTitle + "-" + featureTitle + ".html";
      fileNameToSave.replace(/\s+/g, '-');

      // Create the header for inside the file
      var metaData = "<!-- This file contains code from a rich text box from the following location: " + "Guide Title: " + guideTitle + " Page Title: " + pageTitle + " Box title: " + boxTitle + " Feature Title: " + featureTitle +
        " -->";

      var fileContents = metaData + pastedCode;

      var blob = new Blob([fileContents], {
        type: "text/txt;charset=utf-8"
      });

      saveAs(blob, fileNameToSave);


    } else {

      $("#validation-message").slideToggle("fast");

      setTimeout(function() {
        $("#validation-message").slideToggle("fast");
      }, 3600);

      // Next: If inputfields are blank, outline red

      $("input").filter(function() {
        return $(this).val() == "";
      }).parent().addClass("has-error");

      // Next: if textarea is blank, outline red
      $("textarea").filter(function() {
        return $(this).val() == "";
      }).parent().addClass("has-error");

    }

  });




});
// document ready
