$(document).ready(function() {

  $("#form").submit(function(event) {

    $("#beachResult").hide();
    $("#shackResult").hide();
    $("#forestTempleResult").hide();


    var activity = $("input[name=question1]:checked").val();
    var describe = $("input[name=question2]:checked").val();
    var father = $("input[name=question3]:checked").val();
    var dream = $("input[name=question4]:checked").val();
    var take = $("input[name=question5]:checked").val();

    //temple results//

    if ( activity === "activityAdventuring" && describe === "describeOffbeat") {
      $("#forestTempleResult").show()
    } else if ( activity === "activityAdventuring" && describe === "describeContent" && father === "father1" && take !== "take1") {
      $("#forestTempleResult").show()

    //beach results//

    } else if ( activity === "activityCocktails" && describe === "describeContent") {
        $("#beachResult").show()

    } else if ( activity === "activityCocktails" && describe === "describeTired" && take === "take1") {
      $("#beachResult").show()

    } else if ( activity === "activityAdventuring" && describe === "describeContent" && take === "take1") {
      $("#beachResult").show()

    //apartment results//

  } else if ( activity === "activityCocktails" && describe === "describeOffbeat") {
      $("#apartmentResult").show()

    } else if ( activity === "activityCocktails" && describe === "describeTired" && dream === "dreamVoid") {
      $("#apartmentTempleResult").show()

    } else if ( activity === "activityAdventuring" && describe === "describeContent" && take === "take1") {
      $("#apartmentResult").show()




  } else {
    $("#shackResult").show()
    }

    event.preventDefault();
  });
});
