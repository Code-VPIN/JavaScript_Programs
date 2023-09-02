const questions = [{
    'que' : 'Which is the following is a markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JAVASCRIPT',
    'd' : 'PHP',
    'correct' : 'a'
},
{
    'que' : 'In Which year javascript was launched?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'NONE',
    'correct' : 'a'
},
{
    'que' : 'What does CSS stand for?',
    'a' : 'Cascading Style Sheet',
    'b' : 'Hypertext MarkUp Langauge',
    'c' : 'JAVASCRIPT',
    'd' : 'PHP',
    'correct' : 'a'
},
{
    'que' : 'Which is the following is a markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JAVASCRIPT',
    'd' : 'PHP',
    'correct' : 'a'
}]

let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {

    if (index === total){
        return endQuiz()
    }
    reset();

    const data = questions[index]
    quesBox.innerHTML = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
}



const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++;

    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                // console.log("yes")
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3> Thank You for playing the Quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

loadQuestion();