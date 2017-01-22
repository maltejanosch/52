$( document ).ready(function() {
    console.log( "ready!" );
    time();
    initLocalClocks();
     // setUpMinuteHands();
     // moveMinuteHands();

     // moveSecondHands();

});



function time(){
	
	var d = new Date();

	var date = d.getDate();
	var day = d.getDay();

	// document.getElementById("time").innerHTML = date;
	// document.getElementById("time").innerHTML = date;
	// document.getElementById("time").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
	//document.getElementById("time").innerHTML = day;
	 

}

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  


  window.setInterval(function(){


  	var dateC = new Date;
  	var secondsC = (dateC.getSeconds()<10?'0':'') + dateC.getSeconds() ;
  	var minutesC = (dateC.getMinutes()<10?'0':'') + dateC.getMinutes() ;
  
  var hoursC = dateC.getHours();

  var date = new Date("2012-01-18T16:03");

console.log( (dateC.getSeconds()<10?'0':'') + dateC.getSeconds() );
  
  var colorcode =     "#" +  String(hoursC) +String(minutesC) +   String(secondsC) ;
  console.log(colorcode);

  $(".clock-container.clocks").css( "background-color", colorcode );
  $(".hours").css( "background-color", colorcode );
  $(".seconds").css( "background-color", colorcode );
  $(".minutes").css( "background-color", colorcode );
  $(".simple:after").css( "background", colorcode );
  
  
}, 1000);
  

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

