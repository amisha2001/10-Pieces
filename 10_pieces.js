
$('body').on('click', function (e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
  
    var shapesoffsetX = $('.polygon-wrap').offset().left;
    var shapesoffsetY = $('.polygon-wrap').offset().top;
  
    var polygonswidth=$('.polygon-wrap').width();
    var polygonsheight=$('.polygon-wrap').height();
  
    var shapesmouseX = mouseX - shapesoffsetX;
    var shapesmouseY = mouseY - shapesoffsetY;
  
    var mousepercentX = shapesmouseX / polygonswidth;
    var mousepercentY = shapesmouseY / polygonsheight;
  
    var finalmouseX = (mousepercentX) * 100 ;
    var finalmouseY = (mousepercentY) * 100 ;
    var normalisedX = parseFloat(finalmouseX).toFixed(3);
    var normalisedY = parseFloat(finalmouseY).toFixed(3);
  
    nodecount = nodecount+1;
  
    if (nodecount < 3) {
      nodescss = nodescss + normalisedX + '% ' + normalisedY + '% ,';
    } else  
    if (nodecount == 3) {
      nodescss = nodescss + normalisedX + '% ' + normalisedY + '% );';
      alert(nodescss);
      nodescss = '-webkit-clip-path: polygon( ';
      nodecount = 0;
    }   
  });
  