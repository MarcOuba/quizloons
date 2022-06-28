 /*HIT LOONS PAGE  ////////////////////////////////////////////////  */
      
 $("#progressBar").hide();

 $(".back").click(
       function(){
             window.location.href="./chooseGame.html"
         }
   )


var displayTimer= () =>{        //DISPLAY THE TIMER WITH THE PROGRESS BAR (20 SECS)

       
 var timeleft = 20;
 var downloadTimer = setInterval(function(){
   if(timeleft <= 0){                   //REPEAT THE FUNCTION UNTIL TIME REACHES 0
     clearInterval(downloadTimer);
   }
   $("#progressBar").show();
   $("#progressBar").val(20 - timeleft) ;
   $("#time").html(20-timeleft);
   timeleft -= 1;
 

 }, 1000);
}


function random(num) {
 return Math.floor(Math.random()*num)
}

function getRandomStyles() {
 var r = random(255);
 var g = random(255);
 var b = random(255);
 var mt = random(200);
 var ml = random(50);
 var dur = random(5)+5;
 //GET RANDOM VALUES 
 return `
 background-color: rgba(${r},${g},${b},0.7);        
 color: rgba(${r},${g},${b},0.7); 
 box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
 margin: ${mt}px 0 0 ${ml}px;
 animation: float ${dur}s ease-in infinite
 `
}
var score=0;
function createBalloons(num) {
 var balloonContainer = $("#balloon-container")

 
 for (var i = num; i > 0; i--) {
 var balloon = document.createElement("div");
 balloon.className = "balloon";
 balloon.style.cssText = getRandomStyles(); 
 balloonContainer.append(balloon);

 
 }
 
 
 $(".balloon").click(function(){
       score+=1;
       $("#score").html(score);
      
       $(this).remove(); //REMOVE THE BALLOON ON CLICK
       var sound=$("<audio id='audio' src='./mixkit-game-balloon-or-bubble-pop-3069.wav' autoplay='true'></audio>"); //AUDIO FOR BALLOON CLICK
       $("body").append(sound);
       var audio=$("#audio");
       audio.play();
       $("#audio").remove();
     

 }
 )
}







const game=(balloons) => {  

 $("#balloon-container").empty();       //REMOVE ALL THE OLD BALLOONS
      $(".instructions-container").hide();
       displayTimer();
       createBalloons(balloons);
       setTimeout(() => {
       $(".balloon").hide();           //REMOVE ALL CURRENT BALLOONS AFTER 21 SECS (TIMER)
       },21000)
       
       
 }

 const start = () => {        //CONFETTI START 
       setTimeout(function() {
           confetti.start()
       }, 500); 
   };

   

   const stop = () => {         //CONFETTI STOP AFTER 2 SECS
       setTimeout(function() {
           confetti.stop()
       }, 2000); 
   };

   const displayTryAgain =()=>{
       $("#youCanDoIt").attr('style','display : grid');
   }

   const hideTryAgain=()=>{
       $("#youCanDoIt").attr('style','display : none');
   }

   const displayCongratulations =()=>{
       $("#youCanDoIt").attr('style','display : none');
       $("#congratulations").attr('style','display : block');
 }

 const fadeOutCongratulations=()=>{

       $("#congratulations").fadeOut(4000);
 }


 //FUCNTIONS FOR EACH GAME INDIVIDUALLY

 const level1=()=>{
       score=0;    //RESET THE SCORE
hideTryAgain();
       $("#score").html(score);
       
        game(20);
        setTimeout(()=>{
              if(score>=15){
                   hideTryAgain();
                   
                   start();
                   stop();
                    displayCongratulations();
               fadeOutCongratulations();
              $("#level2").attr("disabled", false);
              setTimeout(()=>{
                    $(".instructions-container").show();
                    score=0;
                    $("#score").html(score);
                    
                    
              },2000)
             
              $("#score").html(score);
              var sound=$("<audio id='audio' src='./WhatsApp Audio 2022-06-05 at 5.45.45 PM.mp4' autoplay='true'></audio>"); //PLAY AUDIO ON CONGRATS
              $("body").append(sound);
              var audio=$("#audio");
              audio.play();
              $("#audio").remove();
              }
              else{
                    displayTryAgain(); 
                    $(".tryAgain").click(() => {                   
                          hideTryAgain();
                          level1();                        //RESTART
                    })
              }
        },21000)
 }


 const level2=()=>{
       score=0;
hideTryAgain();
       $("#score").html(score);
       
        game(25);
        setTimeout(()=>{
              if(score>=20){
                   hideTryAgain();
                   start();
                   stop();
                    displayCongratulations();
               fadeOutCongratulations();
              $("#level3").attr("disabled", false);
              setTimeout(()=>{
                    $(".instructions-container").show();
                    score=0;
                    $("#score").html(score);
                    
                    $("#congratulations").hide();
              },2000)
              
              $("#score").html(score);
              var sound=$("<audio id='audio' src='./WhatsApp Audio 2022-06-05 at 5.45.45 PM.mp4' autoplay='true'></audio>");
              $("body").append(sound);
              var audio=$("#audio");
              audio.play();
              $("#audio").remove();
              }
              else{
                    displayTryAgain(); 
                    $(".tryAgain").click(() => {                   
                          hideTryAgain();
                          level2();
                    })
              }
        },21000)
 }

 const level3=()=>{
       score=0;
hideTryAgain();
       $("#score").html(score);
       
        game(35);
        setTimeout(()=>{
              if(score>=25){
                   hideTryAgain();
                   start();
                   stop();
                    displayCongratulations();
               fadeOutCongratulations();
              $("#level4").attr("disabled", false);
              setTimeout(()=>{
                    $(".instructions-container").show();
                    score=0;
                    $("#score").html(score);
                    
                    $("#congratulations").hide();
              },2000)
             
              hideTryAgain();
              $("#score").html(score);
              var sound=$("<audio id='audio' src='./WhatsApp Audio 2022-06-05 at 5.45.45 PM.mp4' autoplay='true'></audio>");
              $("body").append(sound);
              var audio=$("#audio");
              audio.play();
              $("#audio").remove();
              }
              else{
                    displayTryAgain(); 
                    $(".tryAgain").click(() => {                   
                          hideTryAgain();
                          level3();
                    })
              }
        },21000)
 }

 const level4=()=>{
       score=0;
hideTryAgain();
       $("#score").html(score);
       
        game(45);
        setTimeout(()=>{
              if(score>=30){
                   hideTryAgain();
                   start();
                   stop();
                    displayCongratulations();
               fadeOutCongratulations();
              $("#level5").attr("disabled", false);
              setTimeout(()=>{
                    $(".instructions-container").show();
                    score=0;
                    $("#score").html(score);
                    
                    $("#congratulations").hide();
              },2000)
             
              $("#score").html(score);
              var sound=$("<audio id='audio' src='./WhatsApp Audio 2022-06-05 at 5.45.45 PM.mp4' autoplay='true'></audio>");
              $("body").append(sound);
              var audio=$("#audio");
              audio.play();
              $("#audio").remove();
              }
              else{
                    displayTryAgain(); 
                    $(".tryAgain").click(() => {                   
                          hideTryAgain();
                          level4();
                    })
              }
        },21000)
 }

 const level5=()=>{
       score=0;
hideTryAgain();
       $("#score").html(score);
       
        game(60);
        setTimeout(()=>{
              if(score>=35){
                   hideTryAgain();
                   start();
                   stop();
                    displayCongratulations();
               fadeOutCongratulations();
              $("#level6").attr("disabled", false);
              setTimeout(()=>{
                    $(".instructions-container").show();
                    score=0;
                    $("#score").html(score);
                   
                    $("#congratulations").hide();
              },2000)
             
              $("#score").html(score);
              var sound=$("<audio id='audio' src='./WhatsApp Audio 2022-06-05 at 5.45.45 PM.mp4' autoplay='true'></audio>");
              $("body").append(sound);
              var audio=$("#audio");
              audio.play();
              $("#audio").remove();
              }
              else{
                    displayTryAgain(); 
                    $(".tryAgain").click(() => {                   
                          hideTryAgain();
                          level5();
                    })
              }
        },21000)
 }

 const level6=()=>{
       score=0;
hideTryAgain();
       $("#score").html(score);
       
        game(80);
        setTimeout(()=>{
              if(score>=40){
                   hideTryAgain();
                   start();
                   stop();
                    displayCongratulations();
               fadeOutCongratulations();
              setTimeout(()=>{
                    $(".instructions-container").show();
                    score=0;
                    $("#score").html(score);
                   
                    $("#congratulations").hide();
              },2000)
              
              $("#score").html(score);
              var sound=$("<audio id='audio' src='./WhatsApp Audio 2022-06-05 at 5.45.45 PM.mp4' autoplay='true'></audio>");
              $("body").append(sound);
              var audio=$("#audio");
              audio.play();
              $("#audio").remove();
              }
              else{
                    displayTryAgain(); 
                    $(".tryAgain").click(() => {                   
                          hideTryAgain();
                          level6();
                    })
              }
        },21000)
 }


 


// ON EACH BUTTON CLICK, APPLY THE SPECIFIED LEVEL FUNCTION

 $("#level1").click(() => {
       level1();   
 })
 $("#level2").click(() => {
      level2();
 })
 $("#level3").click(() => {
       level3();
 })
 $("#level4").click(() => {
       level4();
 })
 $("#level5").click(() => {
      level5();
 })
 $("#level6").click(() => {
       level6();
 })


/*HIT LOONS PAGE END ////////////////////////////////////////////////  */
