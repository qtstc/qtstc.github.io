var main = function(){
  //Fullpager initialization
  $('#fullpage').fullpage({
    paddingTop: '50px',
    paddingBottom: '50px',
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '.menu',
    navigation:true
  });

  $('#myCarousel').carousel({
    interval: 40000
  })

  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

}

$(document).ready(main);
