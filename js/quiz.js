// get references to containers and buttons
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

// slide control
let currentSlide = 0;

// fetch questions:
const letters = ['A', 'B', 'C', 'D'];
const myQuestions = [];

fetch('/data/quiz-questions.json')
  .then((r) => r.json())
  .then((data) => {
    // clean up the "loading" text
    quizContainer.innerHTML = '';

    // for each loaded question - parse and create controls
    data.forEach((currentQuestion, questionNumber) => {
      /**
       * This is a former buildQuiz() function
       * Is performed automatically after we get the list of questions
       */

      // inner question id (for use in html nodes)
      const questionId = 'question' + questionNumber;

      // user's choice is stored as chosenIndex
      currentQuestion.chosenIndex = -1;

      // html container with question and answers
      currentQuestion.container = document.createElement('div');
      currentQuestion.container.classList = 'slide';

      // add question text
      const questionText = document.createElement('div');
      questionText.classList = 'question';
      questionText.innerHTML = `
        (${questionNumber + 1}/${data.length})
        ${currentQuestion.question}
      `; // todo: maybe add better styles for question number?
      currentQuestion.container.appendChild(questionText);

      // add question answers
      const questionAnswers = document.createElement('div');
      questionAnswers.classList = 'answers';
      currentQuestion.container.appendChild(questionAnswers);

      // hydrate "answers" with useful data
      currentQuestion.answers = currentQuestion.answers.map((answer, answerIndex) => {
        const answerData = {
          text: answer,
          id: questionId + '_answer' + answerIndex,
        };

        // html container with radio buttons
        answerData.container = document.createElement('label');
        answerData.container.classList = 'answer';
        answerData.container.setAttribute('for', answerData.id);
        questionAnswers.appendChild(answerData.container);

        // radio button
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', questionId);
        radio.setAttribute('value', answerIndex);
        radio.setAttribute('id', answerData.id);
        answerData.container.appendChild(radio);
        answerData.input = radio;

        // radio button's action
        radio.addEventListener('input', () => {
          currentQuestion.chosenIndex = answerIndex;
        });

        // radio button's description
        const radioText = document.createElement('span');
        radioText.innerHTML = `<b>[${letters[answerIndex]}]</b> ${answerData.text}`;
        answerData.container.appendChild(radioText);

        return answerData;
      });

      // finally add question's container into DOM
      quizContainer.appendChild(currentQuestion.container);

      // and append the question into global list
      myQuestions.push(currentQuestion);
    });

    // After parsing is done, start the quiz
    showSlide(0);
    previousButton.style.display = '';
    nextButton.style.display = '';
  })
  .catch((e) => {
    console.error('Failed to init quiz', e);
    quizContainer.classList.add('quiz-error');
    quizContainer.innerHTML = `
      <b>Something went wrong :(</b>
      <br>Quiz loading failed with an error: <i>${e.message}</i>`;
  });

function hideQuizButtons() {
  submitButton.style.display = 'none';
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
}

function showResults() {
  // disallow finishing the quiz if last question is unanswered
  const isAbleToContinue = doCheckIfAnswerSubmitted();
  if (!isAbleToContinue) return;

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((question) => {
    // check if answer is correct
    const isCorrect = question.chosenIndex === question.correctIndex;
    const chosenAnswer = question.answers[question.chosenIndex];

    // do actions depending on if user was correct or not
    if (isCorrect) {
      // add to the number of correct answers
      numCorrect += 1;
      // color the answer green
      chosenAnswer.container.style.color = 'lightgreen';
    } else {
      // color the chosen answer red
      chosenAnswer.container.style.color = 'red';
      // color the real answer orange
      const correctAnswer = question.answers[question.correctIndex];
      correctAnswer.container.style.color = 'orange';
    }

    // disable answers
    question.answers.forEach((answer) => {
      answer.input.disabled = true;
    });

    // disable submit button to prevent re-submitting
    submitButton.disabled = true;
  });

  // show number of correct answers out of total
  const correctPct = Math.floor((100 * numCorrect) / myQuestions.length);
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} (${correctPct}%)`;
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  // changing "disabled" instead of "style.display" prevents layout shifts
  previousButton.disabled = isFirstSlide;
  nextButton.disabled = isLastSlide;

  submitButton.style.display = !isLastSlide ? 'none' : '';
}

function doCheckIfAnswerSubmitted() {
  // User must select something before moving to next question
  const isAnswerSubmitted = myQuestions[currentSlide].chosenIndex >= 0;
  if (!isAnswerSubmitted) window.alert('Please select an answer before continuing.');
  return isAnswerSubmitted;
}

function showNextSlide() {
  const isAbleToContinue = doCheckIfAnswerSubmitted();
  if (isAbleToContinue) showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

// Event listeners
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
submitButton.addEventListener('click', showResults);

// hide buttons until questions are loaded
hideQuizButtons();
