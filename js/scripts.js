$(document).ready(function() {

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
      $("#forestTempleResult").show()

    } else if ( activity === "activityAdventuring" && describe === "describeContent" && (father === "father1" || dream == "dreamShapes" || take === "take3")) {
      $("#forestTempleResult").show()

    } else if ( activity === "activityAdventuring" && describe === "describeTired" && (take === "take3" || take === "take1" || father === "father1")) {
      $("#forestTempleResult").show()


    //beach results//

    } else if ( activity === "activityCocktails" && describe === "describeContent" && (father === "father2" || dream === "dreamTraffic")) {
          $("#beachResult").show()

    } else if ( activity === "activityCocktails" && describe === "describeTired" && (take === "take1" || dream ==="dreamTraffic")) {
      $("#beachResult").show()

    } else if ( activity === "activityAdventuring" && describe === "describeContent" && (take === "take1" || father === "father2" || dream === "dreamTraffic")) {
      $("#beachResult").show()

    } else if ( activity === "activityEat" && describe === "describeContent" && (take === "take1" || dream === "dreamTraffic" || father === "father2")) {
      $("#beachResult").show()

    } else if ( activity === "activityEat" && describe === "describeTired" && (father === "father2" || dream === "dreamTraffic") && dream !== "dreamVoid" ) {
      $("#beachResult").show()

    //apartment results//

  } else if ( activity === "activityCocktails" && describe === "describeOffbeat" && (father === "father3" || dream === "dreamVoid")) {
      $("#apartmentResult").show()

    } else if ( activity === "activityCocktails" && describe === "describeTired" && (dream === "dreamVoid" || take === "take3")) {
      $("#apartmentResult").show()

    } else if ( activity === "activityEat" && describe === "describeTired" && (dream === "dreamVoid" || father === "father3")) {
      $("#apartmentResult").show()

    } else if ( activity === "activityAdventure" && describe === "describeTired" && dream === "dreamVoid") {
      $("#apartmentResult").show()

    } else if ( activity === "activityEat" && describe === "describeContent" && dream === "dreamVoid" && father === "father3") {
      $("#apartmentResult").show()


      //shack results//


    } else {
      $("#shackResult").show()
      }

    event.preventDefault();
  });
});
