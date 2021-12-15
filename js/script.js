$('.burger-button').on('click', function(e) {
  e.preventDefault();  
  $('.burgermenu').toggleClass('burgermenu_active');
 })
$('.burger-list a').click(function(e) {
  e.preventDefault();  
   $('.burgermenu').toggleClass('burgermenu_active');
   })