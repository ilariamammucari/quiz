// *****funzioni
const loadQuiz = () => {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    const questionEl = document.getElementById('question').innerHTML = currentQuizData.question;
    const a_text = document.getElementById('a_text').innerHTML = currentQuizData.a;
    const b_text = document.getElementById('b_text').innerHTML = currentQuizData.b;
    const c_text = document.getElementById('c_text').innerHTML = currentQuizData.c;
    const d_text = document.getElementById('d_text').innerHTML = currentQuizData.d;
};



const getSelected = () => {
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if ( answerEl.checked ){
            answer = answerEl.id;
        }
    });

    return answer;
};



const deselectAnswers = () => {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
};
// ******funzioni




const quizData = [
    {
        question: 'Di dove sono?',
        a: 'Milano',
        b: 'Roma',
        c: 'Firenze',
        d: 'Livorno',
        correct: 'b'
    },
    {
        question: 'Quanti anni ho?',
        a: 19,
        b: 22,
        c: 30,
        d: 25,
        correct: 'd'
    },
    {
        question: 'Cosa preferisco?',
        a: 'Frontend',
        b: 'Backend',
        c: 'Entrambi, non ho ancora deciso',
        d: 'Nessuna delle precedenti',
        correct: 'c'
    },
    {
        question: 'Quale browser preferisco?',
        a: 'Edge',
        b: 'Chrom',
        c: 'Firefox',
        d: 'Safari',
        correct: 'c'
    },
    {
        question: 'Cosa mi piace fare nel tempo libero? (oltre a programmare..)',
        a: 'Suonare la chitarra',
        b: 'Serie Tv',
        c: 'Passeggiare all\'aria aperta',
        d: 'Andare in bici',
        correct: 'a'
    },
    {
        question: 'Qual\'è il mio stack tecnologico attuale?',
        a: 'JavaScript, React, Python',
        b: 'Java, Spring',
        c: 'JavaScript, jQuery, Vue, Laravel',
        d: 'Nessuna della precedenti',
        correct: 'c'
    },
    {
        question: 'Qual\'è la prossima tecnologia che mi piacerebbe studiare?',
        a: 'Angular',
        b: 'React',
        c: 'Vue',
        d: 'Symfony',
        correct: 'b'
    }
];

const submitBtn = document.getElementById('submit').addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if ( answer ){
        if ( answer === quizData[currentQuiz].correct ){
            score++;
        }

        currentQuiz++;
        if ( currentQuiz < quizData.length ){
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>
                    Hai indovinato ${score}/${quizData.length} domande.
                </h2> 
                <button onclick='location.reload()'>
                    Ricomincia quiz!
                </button>
            `
        }
    }

});


let currentQuestion = 0;
let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');

loadQuiz();

