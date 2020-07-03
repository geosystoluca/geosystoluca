$('.dropdown').on('click', function(){
	$('#headerlist').toggle();
	$('.dropdown').toggleClass("down");
})

var imgHeight = $( "#bannerimg" ).height();
var example = 500;
var lHeight = $( ".squarel" ).width();
var rHeight = $( ".squarer" ).width();
var dHeight = $( "#diseno" ).width();
var mHeight = $( "#mitad1" ).outerHeight();
var banfb = $( "#banfb" ).outerHeight();
var sec2l1 = $( "#sec2l1" ).outerHeight();
var list1 = $( "#list1" ).outerHeight();
var linev = $( "#rightpaq" ).outerHeight();
var contrata = $( "#telefono" ).width();
var landingi = $( "#pagina2" ).width();
var qsHeight = $( "#qsinfo" ).height();
var qsView = false;
var mView = false;
var vView = false;

function banner()
{
  
}

setInterval(banner, 1);

$("#qsmas").on('click', function(){
  if(mView == true && vView == false)
  {
    $("#misioninfo").slideToggle(500);
    $("#misionmas").css("background-image","url(mas.png)");
    mView = !mView;
    $("#qsinfo").slideToggle(500);
    $("#qsinfo").css("display","inline-block");
    qsView = !qsView;
    $("#qsmas").css("background-image","url(menos.png)");
  }
  else if(vView == true && mView == false)
  {
    $("#visioninfo").slideToggle(500);
    $("#visionmas").css("background-image","url(mas.png)");
    vView = !vView;
    $("#qsinfo").slideToggle(500);
    $("#qsinfo").css("display","inline-block");
    qsView = !qsView;
    $("#qsmas").css("background-image","url(menos.png)");
  }
  else if(qsView == false)
  {
    $("#qsinfo").slideToggle(500);
    $("#qsinfo").css("display","inline-block");
    qsView = !qsView;
    $("#qsmas").css("background-image","url(menos.png)");
  }
  else
  {
    $("#qsinfo").slideToggle(500);
    $("#qsinfo").css("display","inline-block");
    qsView = !qsView;
    $("#qsmas").css("background-image","url(mas.png)");
  }
});

$("#misionmas").on('click', function(){
  if(qsView == true && vView == false)
  {
    $("#qsinfo").slideToggle(500);
    $("#qsmas").css("background-image","url(mas.png)");
    qsView = !qsView;
    $("#misioninfo").slideToggle(500);
    $("#misioninfo").css("display","inline-block");
    mView = !mView;
    $("#misionmas").css("background-image","url(menos.png)");
  }
  else if(vView == true && qsView == false)
  {
    $("#visioninfo").slideToggle(500);
    $("#visionmas").css("background-image","url(mas.png)");
    vView = !vView;
    $("#misioninfo").slideToggle(500);
    $("#misioninfo").css("display","inline-block");
    mView = !mView;
    $("#misionmas").css("background-image","url(menos.png)");
  }
  else if(mView == false)
  {
    $("#misioninfo").slideToggle(500);
    $("#misioninfo").css("display","inline-block");
    mView = !mView;
    $("#misionmas").css("background-image","url(menos.png)");
  }
  else
  {
    $("#misioninfo").slideToggle(500);
    $("#misioninfo").css("display","inline-block");
    mView = !mView;
    $("#misionmas").css("background-image","url(mas.png)");
  }
});

$("#visionmas").on('click', function(){
  if(qsView == true && mView == false)
  {
    $("#qsinfo").slideToggle(500);
    $("#qsmas").css("background-image","url(mas.png)");
    qsView = !qsView;
    $("#visioninfo").slideToggle(500);
    $("#visioninfo").css("display","inline-block");
    vView = !vView;
    $("#visionmas").css("background-image","url(menos.png)");
  }
  else if(mView == true && qsView == false)
  {
    $("#misioninfo").slideToggle(500);
    $("#misionmas").css("background-image","url(mas.png)");
    mView = !mView;
    $("#visioninfo").slideToggle(500);
    $("#visioninfo").css("display","inline-block");
    vView = !vView;
    $("#visionmas").css("background-image","url(menos.png)");
  }
  else if(vView == false)
  {
    $("#visioninfo").slideToggle(500);
    $("#visioninfo").css("display","inline-block");
    vView = !vView;
    $("#visionmas").css("background-image","url(menos.png)");
  }
  else
  {
    $("#visioninfo").slideToggle(500);
    $("#visioninfo").css("display","inline-block");
    vView = !vView;
    $("#visionmas").css("background-image","url(mas.png)");
  }
});