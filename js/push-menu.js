// Needs latest version of jQuery to run
$(function(){
    $('body').removeClass('noscript');
    
    $('.toggle-btn, .close-btn').click(function(){
        toggleNav();
    });
});

function toggleNav() {
    if($('.site-wrapper').attr('data-state') == 'slide-closed'){
     //display nav when closed
        $('.site-wrapper').attr('data-state','slide-open');
    }else{
     //hide the nav when open
     $('.site-wrapper').attr('data-state','slide-closed');
    }
    
}







var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  
});

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});