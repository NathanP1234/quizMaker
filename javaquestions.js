var myQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within:",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "String values, when being assigned to variables, must be enclosed within:",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes"
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: "console.log"
  }
];

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

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			
			answerContainers[i].style.color = 'lightgreen';
		}
		else{
			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}