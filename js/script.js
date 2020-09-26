// event pada saat link di klik
// $('.page-scroll').on('click', function(){
//     //ambil isi href
//     var href = $(this).attr('href');
//     console.log(href);
// });

$('.click').click(function(e){
    // prevent default action
    e.preventDefault();
    
    // get id of target div (placed in href attribute of anchor element)
    // and pass it to the scrollToElement function
     // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
    scrollToElement( $(this).attr('href'), 2000 );
 });
 
 var scrollToElement = function(el, ms){
     var speed = (ms) ? ms : 600;
     $('html,body').animate({
         scrollTop: $(el).offset().top - 60
     }, speed);
 }