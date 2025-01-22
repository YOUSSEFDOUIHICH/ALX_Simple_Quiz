
const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
console.log(userAnswer);
const correctAnswer = "4";
const p = document.getElementById("feedback");

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    if(userAnswer === correctAnswer){
        p.innerText="Correct! Well done."
    } else{
        p.innerText="That's incorrect. Try again!"
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);