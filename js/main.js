$(document).ready(function(){
  $("a").mouseover(function() {
       $(this).animate({ color:'red'},1000);
  }).mouseout(function() {
      $(this).animate({ color:'blue'},1000);
  });
});
