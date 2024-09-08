const questions=[
    {
    question:"Which is the Largest Animal in the World",
    answers:[
        {text:"Shark", correct:false},
        {text:"Blue whale", correct:true},
        {text:"ElePhant", correct:false},
        {text:"Giraffee", correct:false},

    ]
},
    {
    question:"Which is the Smallest Country in the World",
    answers:[
        {text:"Vatican City", correct:true},
        {text:"Bhutan", correct:false},
        {text:"Nepal", correct:false},
        {text:"Shri Lanka", correct:false},

    ]
},
{
    question:"Which is the Largest Dessert in the World",
    answers:[
        {text:"Kalahari", correct:false},
        {text:"Gobi", correct:false},
        {text:"Sahara", correct:false},
        {text:"Antarctica", correct:true},

    ]
},

{
    question:"Which is the smallest continent in the World",
    answers:[
        {text:"Africa", correct:false},
        {text:"Australia", correct:true},
        {text:"Arctic", correct:false},
        {text:"Asia", correct:false},

    ]
},
];
let questionAsked=document.getElementById("question");
let answerButtons=document.getElementById("answer-buttons");
let nextButton=document.getElementById("next-btn");

let currentQUestionIndex=0;
let score=0

function StartQuiz(){
    currentQUestionIndex=0
    score=0
    nextButton.innerHTML="Next"
    showQuestions()
}
function showQuestions(){
    resetState();
    let currentQ= questions[currentQUestionIndex]
    let questionNo= currentQUestionIndex+1;
    questionAsked.innerHTML=questionNo + " . " + currentQ.question;
    currentQ.answers.forEach((answer)=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==="true"
    if(iscorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    })
    nextButton.style.display="block"
}
function handelNextButton(){
    currentQUestionIndex++
    if(currentQUestionIndex < questions.length){
        showQuestions()
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQUestionIndex < questions.length){
        handelNextButton();
    }
    else{
        StartQuiz();
    }
})
function showScore(){
    resetState();
    questionAsked.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
StartQuiz();

