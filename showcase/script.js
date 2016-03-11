/*fancy stuff*/
console.log("wow here it goes");
$(document).ready(function () { /*your usual init stuff*/
  
  $(".tag-WRITING").click(function () {         //  test, this will pretty much be the initial structure     //
    $(".itemEr").fadeOut(550);                  //  until I find an OO or FUNC solution, i know hard coding  //
    $(".item-WRITING").delay(550).fadeIn(550);  //  is not elegant or intuitive but i'm rushing a bit since  //
  });                                           //  i'm always busy working                                  //
  
  $(".tag-DATA").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-DATA").delay(550).fadeIn(550);
  }); 

  $(".tag-SEO").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-SEO").delay(550).fadeIn(550);
  }); 

  $(".tag-UXUI").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-UXUI").delay(550).fadeIn(550);
  }); 

  $(".tag-TRANSLATE").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-TRANSLATE").delay(550).fadeIn(550);
  }); 

  $(".tag-EDIT").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-EDIT").delay(550).fadeIn(550);
  }); 

  $(".tag-FRONTEND").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-FRONTEND").delay(550).fadeIn(550);
    $("#filter-target").html("");
    $("#filter-target").html("<a href='#paper'><span class='tag labelEr tag-WRITING'>WRITING<i class='iconite'</i></i></span></a>");
  }); 

  $(".tag-BACKEND").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-BACKEND").delay(550).fadeIn(550);
  }); 
  
  $("#clear-filter").click(function () {
    $(".itemEr").fadeOut(550);
    $(".itemEr").delay(550).fadeIn(550);
    $("#filter-target").html("");
    $("#filter-target").html("not applied");
  });
  
});
