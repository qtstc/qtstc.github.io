var main = function(){

  var fn = $('#fullpage');
  var header = $(".header");

  // Initialize Fullpager
  fn.fullpage({
    paddingTop: '50px',
    paddingBottom: '50px',
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    //menu: '.menu',
    navigation:true,
  });

  var isCoverShown = true;
  // Disable scrolling until cover is dismissed
  fn.fullpage.setAllowScrolling(false);
  fn.fullpage.setKeyboardScrolling(false);

  var toggleCover = function(){
    isCoverShown = !isCoverShown;
    if(isCoverShown){
      header.animate({height:"90%"},400);
    }else{
      header.animate({height:"50px"},400);
    }
    fn.fullpage.setAllowScrolling(!isCoverShown);
    fn.fullpage.setKeyboardScrolling(!isCoverShown);
  };

  header.click(function(){
    toggleCover();
  });

  //Initalize carousel
  $('#myCarousel').carousel({
    interval: 40000
  })
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<1;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $.ajax({
    url: "https://api.instagram.com/v1/users/709764259/media/recent/?client_id=24fdee6adc7b46a58b50b9e760a6e3de",
    dataType: 'jsonp',
    success: function(data){
      $('#img1').attr("src",(data['data'][0]['images']['low_resolution']['url']));
      $('#img2').attr("src",(data['data'][1]['images']['low_resolution']['url']));
    }
  });
}

$(document).ready(main);
