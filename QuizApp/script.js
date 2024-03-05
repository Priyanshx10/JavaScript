// Define the quiz questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: 1
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Jupiter", "Mars", "Earth", "Venus"],
      correctAnswer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Sandro Botticelli"],
      correctAnswer: 0
    },
  ];
  
  // Variables
  let currentQuestion = 0;
  let score = 0;
  
  // Function to display the current question and answer choices
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion].question;
  
    const answerChoicesElement = document.getElementById("answer-choices");
    answerChoicesElement.innerHTML = ""; // Clear previous choices
  
    questions[currentQuestion].answers.forEach((answer, index) => {
      const answerChoiceElement = document.createElement("li");
      answerChoiceElement.textContent = answer;
      answerChoiceElement.addEventListener("click", () => checkAnswer(index));
      answerChoicesElement.appendChild(answerChoiceElement);
    });
  }
  
  // Function to check the user's answer
  function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect. The correct answer is " + questions[currentQuestion].answers[correctAnswer];
    }
  
    currentQuestion++;
  
    if (currentQuestion === questions.length) {
      displayResults();
    } else {
      displayQuestion();
    }
  }
  
  // Function to display the final results
  function displayResults() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
    document.getElementById("submit-button").disabled = true;
  }
  