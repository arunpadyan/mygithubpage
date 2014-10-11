function mailcheker(){
	var i; 
	i=4;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 		var email = document.getElementById('text4').value;
 		if(email.match(mailformat))
			{
				i = 4;
      			document.getElementById('lab' + i).innerHTML= "" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="silver";
				document.getElementById('text' + i).style.backgroundColor="white";			}
			else{
				i = 4;
				document.getElementById('lab' + i).innerHTML= "Enter a valid email id" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="red";
				document.getElementById('text' + i).style.backgroundColor="lightyellow";
				var phone = document.getElementById('text3').value;

			}
			
	
}
function goo(){
	var phone = document.getElementById('text3').value;
 		var numbers = /^[0-9]+$/;
      	if((phone.length == 10) && (phone.match(numbers)))
      		{
      			document.getElementById('lab3').innerHTML= "" ;
				document.getElementById('text3').style.borderWidth="1px";
				document.getElementById('text3').style.borderColor="silver";
				document.getElementById('text3').style.backgroundColor="white";
				
      		}
		else {	
				document.getElementById('lab3').innerHTML= "Enter a valid mobile number" ;
				document.getElementById('text3').style.borderWidth="1px";
				document.getElementById('text3').style.borderColor="red";
				document.getElementById('text3').style.backgroundColor="lightyellow";
			}

}



function doit(){
	 	for (i=1; i<7; i++){
	  		var empt = document.getElementById('text' + i).value;
	    	if (empt == ""){
				document.getElementById('lab' + i).innerHTML= "*Field Required" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="red";
				document.getElementById('text' + i).style.backgroundColor="lightyellow";
				}
			else {
				document.getElementById('lab' + i).innerHTML= "" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="silver";
				document.getElementById('text' + i).style.backgroundColor="white";
								q=1;

				}
	      } 
 		var phone = document.getElementById('text3').value;
 		var numbers = /^[0-9]+$/;
      	if((phone.length == 10) && (phone.match(numbers)))
      		{
      			i = 3;
      			document.getElementById('lab' + i).innerHTML= "" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="silver";
				document.getElementById('text' + i).style.backgroundColor="white";
				
      		}
		else {	
				i = 3;
				document.getElementById('lab' + i).innerHTML= "Enter a valid mobile number" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="red";
				document.getElementById('text' + i).style.backgroundColor="lightyellow";
								q=1;

			}
 		
 		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 		var email = document.getElementById('text4').value;
 		if(email.match(mailformat))
			{
				i = 4;
      			document.getElementById('lab' + i).innerHTML= "" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="silver";
				document.getElementById('text' + i).style.backgroundColor="white";			}
			else{
				i = 4;
				document.getElementById('lab' + i).innerHTML= "Enter a valid email id" ;
				document.getElementById('text'+ i).style.borderWidth="1px";
				document.getElementById('text' + i).style.borderColor="red";
				document.getElementById('text' + i).style.backgroundColor="lightyellow";
								q=1;

			}
 		
 		var passa = document.getElementById('text5').value;
 		var passb = document.getElementById('text6').value;
 		if (passa.length<6){
 				document.getElementById('lab5').innerHTML = "Password should contain atleast 6 letters.";
 				document.getElementById('text5').value = "";
 				document.getElementById('text6').value = "";
 				document.getElementById('text5').style.borderWidth="1px";
				document.getElementById('text5').style.borderColor="red";
				document.getElementById('text5').style.backgroundColor="lightyellow";
								q=1;

 		} else {
 			i = 5;
      				document.getElementById('lab' + i).innerHTML= "" ;
					document.getElementById('text'+ i).style.borderWidth="1px";
					document.getElementById('text' + i).style.borderColor="silver";
					document.getElementById('text' + i).style.backgroundColor="white";	
		if (passa == passb){
 				i = 5;
 					document.getElementById('lab' + i).innerHTML= "" ;
					document.getElementById('text'+ i).style.borderWidth="1px";
					document.getElementById('text' + i).style.borderColor="silver";
					document.getElementById('text' + i).style.backgroundColor="white";	
 		} else {
 					document.getElementById('lab5').innerHTML = "These passwords don't match. Try again?";
 					document.getElementById('text5').value = "";
 					document.getElementById('text6').value = "";
 					document.getElementById('text5').style.borderWidth="1px";
					document.getElementById('text5').style.borderColor="red";
					document.getElementById('text5').style.backgroundColor="lightyellow";
					document.getElementById('text6').style.backgroundColor="lightyellow";
									q=1;

 		}		
 		}
 		

		if (q==0){
				document.getElementById('bSubmit').value = "Submitted Successfully";
				document.getElementById('bSubmit').style.color= "White";
				document.getElementById('bSubmit').disabled = true;
				document.getElementById('bSubmit').style.backgroundColor= "Green";
				document.getElementById('bSubmit').style.width= "250px";
				
		}

 }

 
function onfo() {
     document.getElementById('lab5').innerHTML = "";
}

