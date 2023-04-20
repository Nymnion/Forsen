// get references to containers and buttons
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const quizTimer = document.getElementById('quiz-timer');
const quizStart = document.getElementById('quiz-start-button')
const quizContainerContainer = document.getElementById('quiz-container2')

// has the quiz been started?
let hasStartedQuiz = false

// slide control
let currentSlide = 0;

// moving this to global scope to fix scope fuckiness
const letters = ['A', 'B', 'C', 'D'];
const myQuestions = [];
let tick;
let penalty = 0;
let hasFinishedQuiz = false;
let quizPenaltyOnceCheck = false;

// Quiz ranks
// Rank depends on your percentage of correct answers
const RANKS = {
  0: 'Norman (0%)',
  15: 'Juicer (15%)',
  30: 'Knowledgeable (30%)',
  50: 'Frequenter (50%)',
  75: 'Almost-Certified Baj (75%)',
  100: 'Certified Baj (100%!)'
}

// when the quiz timer expires
// it's a UNIX timestamp
let quizTimerExpireAt = Number.MAX_SAFE_INTEGER;

function getQuizRank(pct) {
  let pcts = [100, 75, 50, 30, 15, 0]
  for(p of pcts) {
    if(pct >= p) return RANKS[p]
  }
}

// every 250ms while the quiz is running
function quizTick() {
  quizTimer.innerHTML = `${Math.round((quizTimerExpireAt - Date.now()) / 1000)} seconds left`

  if(Date.now() > quizTimerExpireAt) {
    quizTimer.innerHTML = `Out of time, -10 points!`

    if(quizPenaltyOnceCheck) return;
    penalty += 10
    quizPenaltyOnceCheck = true
  }
}

function startQuiz() {
  if(hasStartedQuiz) return;
  hasStartedQuiz = true
  quizStart.innerHTML = "loading please wait"

  // fetch questions:

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
      quizTimerExpireAt = Date.now() + (30 * 1000)

      previousButton.style.display = 'none';
      nextButton.style.display = '';
      quizTimer.style.display = '';

      // Start quiz tick
      tick = setInterval(quizTick, 250)

      // Readjust quiz container height
      quizContainerContainer.style.height = '180px';
    })
    .catch((e) => {
      console.error('Failed to init quiz', e);
      quizContainer.classList.add('quiz-error');
      quizContainer.innerHTML = `
        <b>Something went wrong :(</b>
        <br>Quiz loading failed with an error: <i>${e.message}</i>`;
    });
}

function hideQuizButtons() {
  submitButton.style.display = 'none';
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
}

function showResults() {
  // disallow finishing the quiz if last question is unanswered
  const isAbleToContinue = doCheckIfAnswerSubmitted();
  if (!isAbleToContinue) return;

  // finish the quiz
  hasFinishedQuiz = true;

  // don't do the quiz tick anymore
  clearInterval(tick);

  // change next button
  nextButton.innerHTML = "Next Question ► ";

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
  resultsContainer.innerHTML = `YOUR SCORE: ${numCorrect - penalty} | TIMER PENALTY: ${penalty}<br>YOUR RANK: ${getQuizRank(correctPct)}<br>(Rank depends on % of correct answers, it's not affected by score)`;

  submitButton.style.display = 'none';
  previousButton.style.display = '';
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
  if(hasFinishedQuiz) submitButton.style.display = 'none';
  
  nextButton.style.display = isLastSlide ? 'none' : '';
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

  if(hasStartedQuiz && !hasFinishedQuiz) {
    quizTimerExpireAt = Date.now() + (30 * 1000)

    quizPenaltyOnceCheck = false;
  }
}

function showPreviousSlide() {
  if(!hasFinishedQuiz) return;

  showSlide(currentSlide - 1);
}

// Event listeners
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
submitButton.addEventListener('click', showResults);

quizStart.addEventListener('click', startQuiz)

// hide buttons until questions are loaded
hideQuizButtons();

// hide quiz timer - it'll be shown when the quiz starts
quizTimer.style.display = 'none';