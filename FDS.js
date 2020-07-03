var bView = false;
var plView = false;
var prView = false;
var oneView = false;
var twoView = false;
var threeView = false;
var fourView = false;
var fiveView = false;



$("#basicoflecha").on('click', function(){
  if(plView == true && prView == false)
  {
    $("#pluinfo").slideToggle(500);
    $("#plusflecha").css("background-image","url(paqdown2.png)");
    plView = !plView;
    $("#basinfo").slideToggle(500);
    $("#basinfo").css("display","inline-block");
    bView = !bView;
    $("#basicoflecha").css("background-image","url(paqup3.png)");
  }
  else if(prView == true && plView == false)
  {
    $("#preinfo").slideToggle(500);
    $("#premiumflecha").css("background-image","url(paqdown.png)");
    prView = !prView;
    $("#basinfo").slideToggle(500);
    $("#basinfo").css("display","inline-block");
    bView = !bView;
    $("#basicoflecha").css("background-image","url(paqup3.png)");
  }
  else if(bView == false)
  {
    $("#basinfo").slideToggle(500);
    $("#basinfo").css("display","inline-block");
    bView = !bView;
    $("#basicoflecha").css("background-image","url(paqup3.png)");
  }
  else
  {
    $("#basinfo").slideToggle(500);
    bView = !bView;
    $("#basicoflecha").css("background-image","url(paqdown3.png)");
  }
});

$("#plusflecha").on('click', function(){
  if(bView == true && prView == false)
  {
    $("#basinfo").slideToggle(500);
    $("#basicoflecha").css("background-image","url(paqdown3.png)");
    bView = !bView;
    $("#pluinfo").slideToggle(500);
    $("#pluinfo").css("display","inline-block");
    plView = !plView;
    $("#plusflecha").css("background-image","url(paqup2.png)");
  }
  else if(prView == true && bView == false)
  {
    $("#preinfo").slideToggle(500);
    $("#premiumflecha").css("background-image","url(paqdown.png)");
    prView = !prView;
    $("#pluinfo").slideToggle(500);
    $("#pluinfo").css("display","inline-block");
    plView = !plView;
    $("#plusflecha").css("background-image","url(paqup2.png)");
  }
  else if(plView == false)
  {
    $("#pluinfo").slideToggle(500);
    $("#pluinfo").css("display","inline-block");
    plView = !plView;
    $("#plusflecha").css("background-image","url(paqup2.png)");
  }
  else if(plView == true)
  {
    $("#pluinfo").slideToggle(500);
    plView = !plView;
    $("#plusflecha").css("background-image","url(paqdown2.png)");
  }
});

$("#premiumflecha").on('click', function(){
  if(bView == true && plView == false)
  {
    $("#basinfo").slideToggle(500);
    $("#basicoflecha").css("background-image","url(paqdown3.png)");
    bView = !bView;
    $("#preinfo").slideToggle(500);
    $("#preinfo").css("display","inline-block");
    prView = !prView;
    $("#premiumflecha").css("background-image","url(paqup.png)");
  }
  else if(plView == true && bView == false)
  {
    $("#pluinfo").slideToggle(500);
    $("#plusflecha").css("background-image","url(paqdown2.png)");
    plView = !plView;
    $("#preinfo").slideToggle(500);
    $("#preinfo").css("display","inline-block");
    prView = !prView;
    $("#premiumflecha").css("background-image","url(paqup.png)");
  }
  else if(prView == false)
  {
    $("#preinfo").slideToggle(500);
    $("#preinfo").css("display","inline-block");
    prView = !prView;
    $("#premiumflecha").css("background-image","url(paqup.png)");
  }
  else
  {
    $("#preinfo").slideToggle(500);
    prView = !prView;
    $("#premiumflecha").css("background-image","url(paqdown.png)");
  }
});

$("#basicoflecha2").on('click', function(){
  if(bView == false)
  {
    $("#basinfo2").slideToggle(500);
    $("#basinfo2").css("display","inline-block");
    bView = !bView;
    $("#basicoflecha2").css("background-image","url(paqup3.png)");
  }
  else
  {
    $("#basinfo2").slideToggle(500);
    bView = !bView;
    $("#basicoflecha2").css("background-image","url(paqdown3.png)");
  }
});

$("#plusflecha2").on('click', function(){
  if(plView == false)
  {
    $("#pluinfo2").slideToggle(500);
    $("#pluinfo2").css("display","inline-block");
    plView = !plView;
    $("#plusflecha2").css("background-image","url(paqup2.png)");
  }
  else
  {
    $("#pluinfo2").slideToggle(500);
    plView = !plView;
    $("#plusflecha2").css("background-image","url(paqdown2.png)");
  }
});

$("#premiumflecha2").on('click', function(){
  if(prView == false)
  {
    $("#preinfo2").slideToggle(500);
    $("#preinfo2").css("display","inline-block");
    prView = !prView;
    $("#premiumflecha2").css("background-image","url(paqup.png)");
  }
  else
  {
    $("#preinfo2").slideToggle(500);
    prView = !prView;
    $("#premiumflecha2").css("background-image","url(paqdown.png)");
  }
});

$("#more1").on('click', function(){
  $("#expp1").slideToggle(500);
  if(oneView == false)
  {
    $("#more1").css("content","url(menos3.png)");
    oneView = true;
  }
  else
  {
    $("#more1").css("content","url(mas3.png)");
    oneView = false;
  }
});

$("#more2").on('click', function(){
  $("#expp2").slideToggle(500);
  if(twoView == false)
  {
    $("#more2").css("content","url(menos3.png)");
    twoView = true;
  }
  else
  {
    $("#more2").css("content","url(mas3.png)");
    twoView = false;
  }
});

$("#more3").on('click', function(){
  $("#expp3").slideToggle(500);
  if(threeView == false)
  {
    $("#more3").css("content","url(menos3.png)");
    threeView = true;
  }
  else
  {
    $("#more3").css("content","url(mas3.png)");
    threeView = false;
  }
});

$("#more4").on('click', function(){
  $("#expp4").slideToggle(500);
  if(fourView == false)
  {
    $("#more4").css("content","url(menos3.png)");
    fourView = true;
  }
  else
  {
    $("#more4").css("content","url(mas3.png)");
    fourView = false;
  }
});


$("#more5").on('click', function(){
  $("#expp5").slideToggle(500);
  if(fiveView == false)
  {
    $("#more5").css("content","url(menos3.png)");
    fiveView = true;
  }
  else
  {
    $("#more5").css("content","url(mas3.png)");
    fiveView = false;
  }
});

$("#more12").on('click', function(){
  $("#expp12").slideToggle(500);
  if(oneView == false)
  {
    $("#more12").css("content","url(menos2.png)");
    oneView = true;
  }
  else
  {
    $("#more12").css("content","url(mas2.png)");
    oneView = false;
  }
});

$("#more22").on('click', function(){
  $("#expp22").slideToggle(500);
  if(twoView == false)
  {
    $("#more22").css("content","url(menos2.png)");
    twoView = true;
  }
  else
  {
    $("#more22").css("content","url(mas2.png)");
    twoView = false;
  }
});

$("#more32").on('click', function(){
  $("#expp32").slideToggle(500);
  if(threeView == false)
  {
    $("#more32").css("content","url(menos2.png)");
    threeView = true;
  }
  else
  {
    $("#more32").css("content","url(mas2.png)");
    threeView = false;
  }
});

$("#more42").on('click', function(){
  $("#expp42").slideToggle(500);
  if(fourView == false)
  {
    $("#more42").css("content","url(menos2.png)");
    fourView = true;
  }
  else
  {
    $("#more42").css("content","url(mas2.png)");
    fourView = false;
  }
});


$("#more52").on('click', function(){
  $("#expp52").slideToggle(500);
  if(fiveView == false)
  {
    $("#more52").css("content","url(menos2.png)");
    fiveView = true;
  }
  else
  {
    $("#more52").css("content","url(mas2.png)");
    fiveView = false;
  }
});

$("#more62").on('click', function(){
  $("#expp62").slideToggle(500);
  if(fiveView == false)
  {
    $("#more62").css("content","url(menos2.png)");
    fiveView = true;
  }
  else
  {
    $("#more62").css("content","url(mas2.png)");
    fiveView = false;
  }
});

$("#more13").on('click', function(){
  $("#expp13").slideToggle(500);
  if(oneView == false)
  {
    $("#more13").css("content","url(menos.png)");
    oneView = true;
  }
  else
  {
    $("#more13").css("content","url(mas.png)");
    oneView = false;
  }
});

$("#more23").on('click', function(){
  $("#expp23").slideToggle(500);
  if(twoView == false)
  {
    $("#more23").css("content","url(menos.png)");
    twoView = true;
  }
  else
  {
    $("#more23").css("content","url(mas.png)");
    twoView = false;
  }
});

$("#more33").on('click', function(){
  $("#expp33").slideToggle(500);
  if(threeView == false)
  {
    $("#more33").css("content","url(menos.png)");
    threeView = true;
  }
  else
  {
    $("#more33").css("content","url(mas.png)");
    threeView = false;
  }
});

$("#more43").on('click', function(){
  $("#expp43").slideToggle(500);
  if(fourView == false)
  {
    $("#more43").css("content","url(menos.png)");
    fourView = true;
  }
  else
  {
    $("#more43").css("content","url(mas.png)");
    fourView = false;
  }
});


$("#more53").on('click', function(){
  $("#expp53").slideToggle(500);
  if(fiveView == false)
  {
    $("#more53").css("content","url(menos.png)");
    fiveView = true;
  }
  else
  {
    $("#more53").css("content","url(mas.png)");
    fiveView = false;
  }
});
$("#more63").on('click', function(){
  $("#expp63").slideToggle(500);
  if(fiveView == false)
  {
    $("#more63").css("content","url(menos.png)");
    fiveView = true;
  }
  else
  {
    $("#more63").css("content","url(mas.png)");
    fiveView = false;
  }
});

$("#fmore1").on('click', function(){
  $("#fexpp1").slideToggle(500);
  if(oneView == false)
  {
    $("#fmore1").css("content","url(menos3.png)");
    oneView = true;
  }
  else
  {
    $("#fmore1").css("content","url(mas3.png)");
    oneView = false;
  }
});

$("#fmore2").on('click', function(){
  $("#fexpp2").slideToggle(500);
  if(twoView == false)
  {
    $("#fmore2").css("content","url(menos3.png)");
    twoView = true;
  }
  else
  {
    $("#fmore2").css("content","url(mas3.png)");
    twoView = false;
  }
});

$("#fmore3").on('click', function(){
  $("#fexpp3").slideToggle(500);
  if(threeView == false)
  {
    $("#fmore3").css("content","url(menos3.png)");
    threeView = true;
  }
  else
  {
    $("#fmore3").css("content","url(mas3.png)");
    threeView = false;
  }
});

$("#fmore4").on('click', function(){
  $("#fexpp4").slideToggle(500);
  if(fourView == false)
  {
    $("#fmore4").css("content","url(menos3.png)");
    fourView = true;
  }
  else
  {
    $("#fmore4").css("content","url(mas3.png)");
    fourView = false;
  }
});


$("#fmore5").on('click', function(){
  $("#fexpp5").slideToggle(500);
  if(fiveView == false)
  {
    $("#fmore5").css("content","url(menos3.png)");
    fiveView = true;
  }
  else
  {
    $("#fmore5").css("content","url(mas3.png)");
    fiveView = false;
  }
});

$("#fmore12").on('click', function(){
  $("#fexpp12").slideToggle(500);
  if(oneView == false)
  {
    $("#fmore12").css("content","url(menos2.png)");
    oneView = true;
  }
  else
  {
    $("#fmore12").css("content","url(mas2.png)");
    oneView = false;
  }
});

$("#fmore22").on('click', function(){
  $("#fexpp22").slideToggle(500);
  if(twoView == false)
  {
    $("#fmore22").css("content","url(menos2.png)");
    twoView = true;
  }
  else
  {
    $("#fmore22").css("content","url(mas2.png)");
    twoView = false;
  }
});

$("#fmore32").on('click', function(){
  $("#fexpp32").slideToggle(500);
  if(threeView == false)
  {
    $("#fmore32").css("content","url(menos2.png)");
    threeView = true;
  }
  else
  {
    $("#fmore32").css("content","url(mas2.png)");
    threeView = false;
  }
});

$("#fmore42").on('click', function(){
  $("#fexpp42").slideToggle(500);
  if(fourView == false)
  {
    $("#fmore42").css("content","url(menos2.png)");
    fourView = true;
  }
  else
  {
    $("#fmore42").css("content","url(mas2.png)");
    fourView = false;
  }
});


$("#fmore52").on('click', function(){
  $("#fexpp52").slideToggle(500);
  if(fiveView == false)
  {
    $("#fmore52").css("content","url(menos2.png)");
    fiveView = true;
  }
  else
  {
    $("#fmore52").css("content","url(mas2.png)");
    fiveView = false;
  }
});

$("#fmore62").on('click', function(){
  $("#fexpp62").slideToggle(500);
  if(fiveView == false)
  {
    $("#fmore62").css("content","url(menos2.png)");
    fiveView = true;
  }
  else
  {
    $("#fmore62").css("content","url(mas2.png)");
    fiveView = false;
  }
});

$("#fmore13").on('click', function(){
  $("#fexpp13").slideToggle(500);
  if(oneView == false)
  {
    $("#fmore13").css("content","url(menos.png)");
    oneView = true;
  }
  else
  {
    $("#fmore13").css("content","url(mas.png)");
    oneView = false;
  }
});

$("#fmore23").on('click', function(){
  $("#fexpp23").slideToggle(500);
  if(twoView == false)
  {
    $("#fmore23").css("content","url(menos.png)");
    twoView = true;
  }
  else
  {
    $("#fmore23").css("content","url(mas.png)");
    twoView = false;
  }
});

$("#fmore33").on('click', function(){
  $("#fexpp33").slideToggle(500);
  if(threeView == false)
  {
    $("#fmore33").css("content","url(menos.png)");
    threeView = true;
  }
  else
  {
    $("#fmore33").css("content","url(mas.png)");
    threeView = false;
  }
});

$("#fmore43").on('click', function(){
  $("#fexpp43").slideToggle(500);
  if(fourView == false)
  {
    $("#fmore43").css("content","url(menos.png)");
    fourView = true;
  }
  else
  {
    $("#fmore43").css("content","url(mas.png)");
    fourView = false;
  }
});


$("#fmore53").on('click', function(){
  $("#fexpp53").slideToggle(500);
  if(fiveView == false)
  {
    $("#fmore53").css("content","url(menos.png)");
    fiveView = true;
  }
  else
  {
    $("#fmore53").css("content","url(mas.png)");
    fiveView = false;
  }
});
$("#fmore63").on('click', function(){
  $("#fexpp63").slideToggle(500);
  if(fiveView == false)
  {
    $("#fmore63").css("content","url(menos.png)");
    fiveView = true;
  }
  else
  {
    $("#fmore63").css("content","url(mas.png)");
    fiveView = false;
  }
});

function logs()
{
  console.log("plView = " + plView);
}

setInterval(logs, 1);