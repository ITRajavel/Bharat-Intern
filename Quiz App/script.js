const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Madrid', correct: false },
      { text: 'Rome', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Mars', correct: true },
      { text: 'Jupiter', correct: false },
      { text: 'Venus', correct: false },
      { text: 'Saturn', correct: false }
    ]
  },
  {
    question: 'What is the largest mammal?',
    answers: [
      { text: 'Elephant', correct: false },
      { text: 'Whale Shark', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Giraffe', correct: false }
    ]
  }
];

let currentQuestionIndex = 0;

function startGame() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  const questionContainer = document.getElementById('question-container');
  const answerButtons = document.getElementById('answer-buttons');

  questionContainer.innerText = question.question;
  answerButtons.innerHTML = '';

  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
    // Handle correct answer
    alert('Correct!');
  } else {
    // Handle wrong answer
    alert('Wrong!');
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    // Quiz is finished
    alert('Quiz completed!');
    // You can add more actions here, such as displaying a score
  }
}

startGame();