/*fancy stuff*/

$(document).ready(function () { /*your usual init stuff*/
  
  $(".tag-WRITING").click(function () {       //  test, this will pretty much be the initial structure     //
    $(".itemEr").fadeOut(550);                //  until I find an OO or FUNC solution, i know hard coding  //
    $(".item-WRITING").fadeIn(550);           //  is not elegant or intuitive but i'm rushing a bit since  //
  });                                         //  i'm always busy working                                  //
  
  $(".clear-filter").click(function () {
    $(".itemEr").fadeIn(550);
    /*aaaaand reset the target span*/
  });
  
});
