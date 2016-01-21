/**
 * 
 * 
 * Function that acts as a controller to delegate requests to appropriate Progress Bar Service
 * 
 * 
 */

$(function() 
{
	 $("button").click(function(){
		 
		 var id=$(this).attr('id');
		 var operation;
		 var num;
		 
		 // Code to check the Button that was Checked 
		 
		 switch (id){
		       case 'add25' :
		    	   
		    	   // Checking the value of the Progress BAR; IF +25 was clicked
			    	  
		    	   var opt=$( "#pBarOption option:selected" ).val();
		    	   		var jsLang = 'jquery';
		    	   		switch (opt) { 
		    	   		
		    	   		 // Call the Progress Bar Services based on the value Chosen
		    	   		
		    	   			case 'Bar 1': 		  		 		          
		    	   				pBar1Service('add',25);
		    	   				  break;
		    	   			case 'Bar 2': 
		    	   				pBar2Service('add',25);
		    	   					break;
		    	   			case 'Bar 3': 
		    	   					pBar3Service('add',25);
		    	   				    break;	
		  		              }	
		    	   		break;
		    	   		
		       case 'add10' :
		    	  
		    	   var opt=$( "#pBarOption option:selected" ).val();
		    	   		var jsLang = 'jquery';
		    	   		switch (opt) { 
		    	   			case 'Bar 1': 		  		 		          
		    	   				pBar1Service('add',10);
		    	   				  break;
		    	   			case 'Bar 2': 
		    	   				pBar2Service('add',10);
		    	   					break;
		    	   			case 'Bar 3': 
		    	   				pBar3Service('add',10);
		    	   				break;		
		    	   
		  		 
		  		 }
		    	   		break;
		       case 'minus10' :
		    	   
		    	   var opt=$( "#pBarOption option:selected" ).val();
		    	   		var jsLang = 'jquery';
		    	   		switch (opt) { 
		    	   			case 'Bar 1': 		  		 		          
		    	   				pBar1Service('minus',10);
		    	   				  break;
		    	   			case 'Bar 2': 
		    	   				pBar2Service('minus',10);
		    	   					break;
		    	   			case 'Bar 3': 
		    	   				pBar3Service('minus',10);
		    	   				    break;		
		    	   	 
		  		 
		  		 }	
		    	   		break;
		    	   		
		       case 'minus25' :
		    	   
		    	   var opt=$( "#pBarOption option:selected" ).val();
		    	   		var jsLang = 'jquery';
		    	   		switch (opt) { 
		    	   			case 'Bar 1': 		  		 		          
		    	   				pBar1Service('minus',25);
		    	   				  break;
		    	   			case 'Bar 2': 
		    	   				pBar2Service('minus',25);
		    	   					break;
		    	   			case 'Bar 3': 
		    	   				pBar3Service('minus',25);
		    	   				    break;		
		    	     break;
		  		 
		  		 }	
		 
		 }
		 
		 		
	    });

	 
});

//Handler for Progress BAR 1


function  pBar1Service(op,num){
	
	$('#errorId1').hide();
	$("#pbOne").css("color", "#53ff1a");
	var currentWidth= $( "#pbOne" ).attr( "value" );
	var maxValue= $( "#pbOne" ).attr( "max" );
	var finalWidth;
	
	if(op=='add'){
		
		if(parseInt(currentWidth)>=maxValue){
			
			$('#errorId1').html("Cannot go Beyond 100%");
			$('#errorId1').show();
			$("#pbOne").css("color", "#ff0000");
			
		}
		else {
			
			finalWidth=parseInt(currentWidth)+num;
			if(finalWidth>=maxValue){
				 var diff=finalWidth-maxValue;
          	    
          	     finalWidth=parseInt(currentWidth)+(25-diff);
			}
			$("#pbOne").attr("value",finalWidth);
			
			$('#msgId1').html(finalWidth + '%');
		}	
	}
	else if(op=='minus'){
		if(parseInt(currentWidth)<=0){
			$('#errorId1').html("Value Cannot be lesser than zero");
			$('#errorId1').show();
		}
		else{
			var finalWidth=parseInt(currentWidth)-num;
			if(finalWidth<0){
				 
         	     finalWidth=0;
         	    $('#errorId1').hide();
			}
			$("#pbOne").attr("value",finalWidth);
			$('#msgId1').html(finalWidth + '%');
			
		}
		
		
	}
	return;	
}


//Handler for Progress BAR 2

function  pBar2Service(op,num){
	$('#errorId2').hide();
	
	$("#pbTwo").css("color", "#53ff1a");
	var currentWidth= $( "#pbTwo" ).attr( "value" );
	var maxValue= $( "#pbTwo" ).attr( "max" );
	var finalWidth;

	if(op=='add'){
		
		if(parseInt(currentWidth)>=maxValue){
			
			 $('#errorId2').html("Cannot go Beyond 100%");
			 $("#pbTwo").css("color", "#ff0000");
			 $('#errorId2').show();			
		}
		else {
			
			finalWidth=parseInt(currentWidth)+num;
			if(finalWidth>=maxValue){
				 var diff=finalWidth-maxValue;
          	     
          	     finalWidth=parseInt(currentWidth)+(25-diff);
			}
			$("#pbTwo").attr("value",finalWidth);
			$('#errorId2').hide();
			$('#msgId2').html(finalWidth + '%');
		}	
	}
	else if(op=='minus'){
		if(parseInt(currentWidth)<=0){
			$('#errorId2').html("Value Cannot be lesser than zero");
			$('#errorId2').show();
		}
		else{
			var finalWidth=parseInt(currentWidth)-num;
			if(finalWidth<0){
				 
         	     finalWidth=0;
         	    $('#errorId2').hide();
			}
			$("#pbTwo").attr("value",finalWidth);
			$('#msgId2').html(finalWidth + '%');
			
		}
	}

	return;
	
}

//Handler for Progress BAR 3



function  pBar3Service(op,num){
	$('#errorId3').hide();
	$("#pbThree").css("color", "#53ff1a");
	var currentWidth= $( "#pbThree" ).attr( "value" );
	var maxValue= $( "#pbThree" ).attr( "max" );
	var finalWidth;

	if(op=='add'){
		
		if(parseInt(currentWidth)>=maxValue){
			
			 $('#errorId3').html("Cannot go Beyond 100%");
			 $("#pbThree").css("color", "#ff0000");
			 $('#errorId3').show();			
		}
		else {
			
			finalWidth=parseInt(currentWidth)+num;
			if(finalWidth>=maxValue){
				 var diff=finalWidth-maxValue;
          	     
          	     finalWidth=parseInt(currentWidth)+(25-diff);
			}
			$("#pbThree").attr("value",finalWidth);
			$('#errorId3').hide();
			$('#msgId3').html(finalWidth + '%');
		}	
	}
	else if(op=='minus'){
		if(parseInt(currentWidth)<=0){
			$('#errorId3').html("Value Cannot be lesser than zero");
			$('#errorId3').show();
		}
		else{
			var finalWidth=parseInt(currentWidth)-num;
			if(finalWidth<0){
				 
         	     finalWidth=0;
         	    $('#errorId3').hide();
			}
			$("#pbThree").attr("value",finalWidth);
			$('#msgId3').html(finalWidth + '%');
			
		}
	}

	return finalWidth;
	
}
