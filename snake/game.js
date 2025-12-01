var speed=150;
 var dir=1;
 var snake=["3_10","2_10","1_10"];
 var score=0;
 var bug=""; 
 function myinit(){
	dir=1;
	snake=["3_10","2_10","1_10"];
	bug="";
	$('#div_main').html("");
	for (var r=0;r<20;r++){
	  for (var c=0;c<20;c++){
	$('#div_main').append('<div class=curr_cell id=c_'+r+'_'+c+'></div>');
	  }
	}
	  $('#c_1_10').addClass('cell_bg');
	  $('#c_2_10').addClass('cell_bg');
	  $('#c_3_10').addClass('cell_bg');
	  generatebug();
	  setTimeout(function(){gameupdate()}, speed);
 }
 myinit();
 function generatebug(){
	var r1 = Math.floor(Math.random() * 19);
	var c1 = Math.floor(Math.random() * 19);
	$('#c_'+r1+'_'+c1).addClass('cell');
	bug=''+r1+'_'+c1;
 } 
 function gameupdate()	{
		var tail=snake.pop(); 
		  $('#c_'+tail).removeClass('cell_bg');
		  var hh=snake[0];
		  var rc=hh.split("_");
		  var r=parseInt(rc[0]);
		  var c=parseInt(rc[1]);
		  switch(dir){
			case 1: r=r+1; 
					break; 
			case 2: c=c-1; 
					break; 
			case 3: r=r-1; 
					break; 
			case 4: c=c+1; 
					break; 
			}  
		var nn=""+r+"_"+c;
		if (nn==bug){
			snake.push(tail);
			$('#c_'+tail).addClass('cell_bg');
			$('#c_'+bug).removeClass('cell');
			speed= speed - 5;
			generatebug();
			
			
		}
		snake.unshift(nn);
		$('#c_'+nn).hasClass('cell_bg'); 
		if (c<0 || r<0 || c>19 || r>19 ||  $('#c_'+nn).hasClass('cell_bg') ){
			if(!confirm('You Lost! Do you wish to continue?'))	{
				window.top.close();
			}
			speed=150;
			myinit();
			return;
		}  
		$('#c_'+nn).addClass('cell_bg');       
		setTimeout(function(){gameupdate()}, speed);
	} 
	$(document).keydown(function(e){
	if (e.keyCode == 37) { 
		dir=2;
	}	else if (e.keyCode == 38) { 
		dir=3;
	}	else if (e.keyCode == 39) { 
		dir=4;
	}	else if (e.keyCode == 40) { 
		dir=1;
	}
});
$(document).ready(function() {
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	setInterval( function() {
		var minutes = new Date().getMinutes();
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	},1000);
	setInterval( function() {
		var hours = new Date().getHours();
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
		}, 1000); 
	});