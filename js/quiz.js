function generateQuiz(score, questions, quizContainer, resultsContainer, submitButton){


	function score(){
		// code will go here
	}

	function showQuestions(questions, quizContainer){
		
        var output = [];
	    var answers;



        for(var i=0; i<questions.length; i++){

            answers = [];


            for(letter in questions[i].answers){


                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');

	}

	function showResults(questions, quizContainer, resultsContainer){
        function showResults(questions, quizContainer, resultsContainer){
	
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
            
            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;
            
            // for each question...
            for(var i=0; i<questions.length; i++){
        
                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                
                // if answer is correct
                if(userAnswer===questions[i].correctAnswer){
                    // add to the number of correct answers
                    numCorrect++;
                    
                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else{
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }
        
            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}







var myQuestions = [
	{
		question: "What is Forsen's current personal best in minecraft?",
		answers: {
			a: '18:10',
			b: '20:45',
			c: '20:38',
            d: '21:37'
		},
		correctAnswer: 'a'
	},
	{
		question: "Can someone explain nymn to me? He spends _____ percent of the stream talking about Forsen and his viewers.",
		answers: {
			a: '80-90',
			b: '90-95',
			c: '100',
            d: "60-70"
		},
		correctAnswer: 'a'
	}
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');