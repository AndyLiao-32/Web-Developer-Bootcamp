// $("button").on("click", function(){
//  $('div').slideToggle(1000, function(){
//  	$(this).remove();
//  });
// });

$("button").on("click", function(){
 $('div').fadeToggle(1000, function(){
 	$(this).remove();
 });
});

var wsColor = document.getElementById("wscolor");
wsColor.style.color = "white";
var wdColor = document.getElementById("wdcolor");
wdColor.style.color = "white";
var wkColor = document.getElementById("wkcolor");
wkColor.style.color = "white";