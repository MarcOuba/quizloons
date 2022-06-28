/* THIS FILE CONTAINS LOGIN AND CHOOSE GAME Scripts  ///////////////////////// */

/* LOGIN PAGE SCRIPTS ////////////////////////////////////////////////////////////       */



$(document).ready(function(){   //LOGIN PAGE ANIMATIONS ON LOAD
      $(".welcome-tag").fadeIn(2000); 
      $(".form-container").fadeIn(3000); 
      $(".form-container").css({"display":"flex","justify-content": "center" , "align-items": "center"});
      $("footer").fadeIn(6000);
  });

  

  $("#login").click(function(e){

      var valid;
    var username=$("#username").val();
  var password=$("#password").val();
  var email=$("#email").val();
  var phone=$("#phone").val();

      e.preventDefault();
if(username=="" || username.length<8){
$("#username-validation").html("Username should be more than 7 characters! <br>");
$("#username-validation").css({"color":"red" ,"font-size":"small","margin-left":"-20px"})
      }

else{
$("#username-validation").hide();
      }

if(password=="" || password.length<8){
        $("#password-validation").html("Password should be more than 7 characters! <br>");
        $("#password-validation").css({"color":"red" ,"font-size":"small","margin-left":"-20px"})
              }
              
else{
  $("#password-validation").hide();
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) //REGEX ELEMENT FOR EMAIL CHECKING
  {
    valid=true;
  }
  else{
    valid=false;
  }


  if(valid==false){
      $("#email-validation").html("Enter a valid email address! <br>");
      $("#email-validation").css({"color":"red" ,"font-size":"small","margin-left":"-20px"})
     }
  
   else{
        $("#email-validation").hide();
       }


if(phone=="" || phone.length<8){
    $("#phone-validation").html("Phone should be more than 7 characters! <br>");
    $("#phone-validation").css({"color":"red" ,"font-size":"small","margin-left":"-20px"})
   }

 else{
      $("#phone-validation").hide();
     }


     if(username.length>=8 && password.length>=8&&phone.length>=8 && valid==true){ //CHECK AND PROCEED
           
           window.location.href="./chooseGame.html";
           email.val()="";
           username.val()="";
           password.val()="";
           phone.val()="";
     }
    

  })

  /* LOGIN PAGE SCRIPTS END   ////////////////////////////////////////////////////////////       */








  /* CHOOSE GAME PAGE SCRIPTS ////////////////////////////////////////////////////////////       */

  $("#hit-loons").click(function(){
      window.location.href="./hitTheLoons.html";
  }
  )

  $("#quiz-app").click(
      function(){
            window.location.href="./quizApp.html"
        }
  )
  $("#logout").click(
      function(){
            window.location.href="./index.html"
        }
  )


  
  
  $(".game").mouseover(function(){     //MOVE BUTTONS ANIMATION
       $(this).animate({      
              left:"+=50px"        
             
        });
  });

  $(".game").mouseout(function(){   //RETURN BUTTONS TO ORIGINAL PLACE
      $(this).animate({      
             left:"-=50px"        
            
       });
 });


 const shake =() => {$(document).ready(function()      //SHAKE FUNCTION FOR THE HEADER
       {

      $(".choose-game-h1").effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );
     }
 
 )
}

      setInterval(() => shake() , 2000) ;  //SHAKE THE HEADER EVERY 2 SECS

      /* CHOOSE GAME PAGE SCRIPTS END   ////////////////////////////////////////////////////////////       */










     
      

    
        
 
 
 
 
      

