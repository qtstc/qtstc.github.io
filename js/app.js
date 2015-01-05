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

}

$(document).ready(main);
