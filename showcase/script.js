/*fancy stuff*/

$(document).ready(function () { /*your usual init stuff*/
  
  $(".tag-WRITING").click(function () {       //  test, this will pretty much be the initial structure     //
    $(".itemEr").fadeOut(550);                //  until I find an OO or FUNC solution, i know hard coding  //
    $(".item-WRITING").fadeIn(550);           //  is not elegant or intuitive but i'm rushing a bit since  //
  });                                         //  i'm always busy working                                  //
  
  $(".tag-DATA").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-DATA").fadeIn(550);
  }); 

  $(".tag-SEO").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-SEO").fadeIn(550);
  }); 

  $(".tag-UXUI").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-UXUI").fadeIn(550);
  }); 

  $(".tag-TRANSLATE").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-TRANSLATE").fadeIn(550);
  }); 

  $(".tag-EDIT").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-EDIT").fadeIn(550);
  }); 

  $(".tag-FRONTEND").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-FRONTEND").fadeIn(550);
  }); 

  $(".tag-BACKEND").click(function () {
    $(".itemEr").fadeOut(550);
    $(".item-BACKEND").fadeIn(550);
  }); 
  
  $(".clear-filter").click(function () {
    $(".itemEr").fadeIn(550);
    /*aaaaand reset the target span*/
  });
  
});
