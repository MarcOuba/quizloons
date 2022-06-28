const quizData=[    //ARRAY OF OBJECTS
    {
    question:'Who is the best teacher?',
    a:'Wissam Nader',
    b:'Joseph Gemayel',
    c:'Elias Sfeir',
    d:'Georges Abboudeh',
    correct:'b'
},{
    question:'What is the most used programming language in 2019?',
    a:'javascript',
    b:'java',
    c:'c#',
    d:'python',
    correct:'a',

},{
    question:'Who is the president of US in 2022?',
    a:'Donald Trump',
    b:'Barrack Obama',
    c:'Ivan Salmado',
    d:'Joe Biden',
    correct:'d'


},{
    question:"What does HTML stands for?",
    a:'Hypertext Markup Language',
    b:'Hello to my lovers',
    c:'JS Obcject Notation',
    d:'Helicopters terminals Motorboats Lamborghini',
    correct:'a'
},
{
    question:'What year was Javascript launched?',
    a:'2020',
    b:'1994',
    c:'1999',
    d:'none of the above',
    correct:'d'
},
{
  question:'What is the latest version of PS?',
    a:'PS2',
    b:'PS3',
    c:'PS5',
    d:'PS4',
    correct:'c'
},{
  question:'What is the keyboard command to copy the selected content?',
    a:'ctrl+v',
    b:'ctrl+a',
    c:'ctrl+c',
    d:'alt+c',
    correct:'c'
},{
  question:'What is the hardest language?',
    a:'chinese',
    b:'espagnol',
    c:'English',
    d:'Mandarin',
    correct:'d'
},{
  question:'Which one is a real operating system?',
  a:'Microsoft Teams',
  b:'Microsoft office',
  c:'Linux',
  d:'Cygwin',
  correct:'c'
},{
  question:'What is 4*4+2*4+3?',
  a:'168',
  b:'27',
  c:'30',
  d:'106',
  correct:'b'
}
];

const questionEl=$('#quiz-question');
const a_text  =$('#a_text');
const b_text =$('#b_text');
const c_text =$('#c_text');
const d_text =$('#d_text');

let currentQuiz=0;
let score=0;
var quiz=$("#quiz");
loadQuiz();


$("#quiz-submit").click(() => {
    loadQuiz();
})

$(".quiz-back-button").click(()=>{
    window.location.href="./chooseGame.html"
})

function loadQuiz(){   //LOAD THE QUIZ
    
   
                                              
const currentQuizData=quizData[currentQuiz];  //LOOP OVER THE ARRAY OF OBJECTS
questionEl.html(currentQuizData.question);    //DISPLAY QUESTION 
a_text.html(currentQuizData.a);               //DISPLAY ANSWER A   
b_text.html(currentQuizData.b);               //DISPLAY ANSWER B
c_text.html(currentQuizData.c);               //DISPLAY ANSWER C
d_text.html(currentQuizData.d);               //DISPLAY ANSWER B

if(isOneChecked())
{
var value;
var check =$('.quiz-answer');

    for (var i=0; i<check.length; i++) {
      if (check[i].checked)              //SETTING THE VALUE TO THE CHECKED ONE
      {
        value=check[i].id;
      } 
    }
    if(value==quizData[currentQuiz].correct){
        score++;
    } 
currentQuiz++; //GO TO THE NEXT OBJECT
quizEnd();     // ONLY END IF THE QUESTIONS ARE OVER.
const currentQuizData=quizData[currentQuiz];  //LOOP AGAIN
questionEl.html(currentQuizData.question);
a_text.html(currentQuizData.a);
b_text.html(currentQuizData.b);
c_text.html(currentQuizData.c);
d_text.html(currentQuizData.d);   
removeChecks();


}
  
    
}




function isOneChecked() {     //SEE IF THE ELEMENT IS CHECKED
    
    var check = $('.quiz-answer');
    for (var i=0; i<check.length; i++) {
      if (check[i].type == 'radio' && check[i].checked) 
      {
        return true;
      } 
    }
    return false;
  }

  function removeChecks() {    // REMOVE EVERYTHING CHECKED
    
    var check =$('.quiz-answer');
    for (var i=0; i<check.length; i++) {
      if (check[i].type == 'radio' && check[i].checked) 
      {
        check[i].checked=false;
      } 
    }
  }
  function quizEnd(){    //  END THE QUIZ THE QUESTIONS ARE OVER AND DISPLAY A BUTTON WITH RESTART.
      if(currentQuiz>=quizData.length){
quiz.html(` <h2> You answered the  questions and got a score of ${score} / ${quizData.length}.</h2><button class="quiz-button" onclick="location.reload()">Restart the quiz</button>`);
      }
  }