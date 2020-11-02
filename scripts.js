"use strict";


/*s.addEventListener('click', click());*/

  window.onload = function(){
  var s= document.getElementsByClassName("btn");
  var b= s[1];
  b.addEventListener('click',clicker);
  }


  function clicker(i){
    const er= "Please enter a valid email address!";
    var mail= document.getElementById("email").value;
    var val= "Thank you! Your email address" + mail+ " has been addes to our mailing list!"
    var msg= document.getElementsByClassName("message")[0];
    i.preventDefault();
    if (mail== ''|| mail== null) {
      msg.innerHTML= er;
    }else{
  
      msg.innerHTML=val;
    }

  }

  

 
  
        
