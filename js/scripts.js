$(document).ready(function() {

  $("#toQuestion2").click(function(event) {
    $("#question1").hide();
    $("#question2").show();

  });

  $("#toQuestion3").click(function(event) {
    $("#question2").hide();
    $("#question3").show();

  });

  $("#toQuestion4").click(function(event) {
    $("#question3").hide();
    $("#question4").show();

  });

  $("#toQuestion5").click(function(event) {
    $("#question4").hide();
    $("#question5").show();

  });

  $("#form").submit(function(event) {

    $("#beachResult").hide();
    $("#shackResult").hide();
    $("#forestTempleResult").hide();
    $("#apartmentResult").hide();


    var activity = $("input[name=question1]:checked").val();
    var describe = $("input[name=question2]:checked").val();
    var father = $("input[name=question3]:checked").val();
    var dream = $("input[name=question4]:checked").val();
    var take = $("input[name=question5]:checked").val();

    //temple results//

    if ( activity === "activityAdventuring" && describe === "describeOffbeat" && (father === "father1" || take === "take3")) {
      $("#forestTempleResult").fadeIn("slow")

    } else if ( activity === "activityAdventuring" && describe === "describeContent" && (father === "father1" || dream == "dreamShapes" || take === "take3")) {
      $("#forestTempleResult").fadeIn("slow")

    } else if ( activity === "activityAdventuring" && describe === "describeTired" && (take === "take3" || take === "take1" || father === "father1")) {
      $("#forestTempleResult").fadeIn("slow")


    //beach results//

    } else if ( activity === "activityCocktails" && describe === "describeContent" && (father === "father2" || dream === "dreamTraffic")) {
          $("#beachResult").fadeIn("slow")

    } else if ( activity === "activityCocktails" && describe === "describeTired" && (take === "take1" || dream ==="dreamTraffic")) {
      $("#beachResult").fadeIn("slow")

    } else if ( activity === "activityAdventuring" && describe === "describeContent" && (take === "take1" || father === "father2" || dream === "dreamTraffic")) {
      $("#beachResult").fadeIn("slow")

    } else if ( activity === "activityEat" && describe === "describeContent" && (take === "take1" || dream === "dreamTraffic" || father === "father2")) {
      $("#beachResult").fadeIn("slow")

    } else if ( activity === "activityEat" && describe === "describeTired" && (father === "father2" || dream === "dreamTraffic") && dream !== "dreamVoid" ) {
      $("#beachResult").fadeIn("slow")

    //apartment results//

  } else if ( activity === "activityCocktails" && describe === "describeOffbeat" && (father === "father3" || dream === "dreamVoid")) {
      $("#apartmentResult").fadeIn("slow")

    } else if ( activity === "activityCocktails" && describe === "describeTired" && (dream === "dreamVoid" || take === "take3")) {
      $("#apartmentResult").fadeIn("slow")

    } else if ( activity === "activityEat" && describe === "describeTired" && (dream === "dreamVoid" || father === "father3")) {
      $("#apartmentResult").fadeIn("slow")

    } else if ( activity === "activityAdventure" && describe === "describeTired" && dream === "dreamVoid") {
      $("#apartmentResult").fadeIn("slow")

    } else if ( activity === "activityEat" && describe === "describeContent" && dream === "dreamVoid" && father === "father3") {
      $("#apartmentResult").fadeIn("slow")


      //shack results//


    } else {
      $("#shackResult").fadeIn("slow")
      }

    $("#questions").hide();

    event.preventDefault();
  });
});
