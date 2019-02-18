let $jokeForm = $("#joke-form");

// Answer array
const answers = [
  "jquery",
  "javascript",
  "program",
  "react",
  "library",
  "project",
  "processing",
  "animation",
  "dom",
  "element",
  "network",
  "memory",
  "source"
];
let totalAnswers = answers.length;
let answer = "";

// Initialize first word
init();

// Result Paragraph
let $resultParagraph = $("<p>").addClass("result").appendTo("#result").css("display", "none");

// Randomly select a word from the answer array
function createWord(){
  // Chosen Answer
  let answerNumber = Math.floor(Math.random()*totalAnswers);
  let answer = answers[answerNumber];
  return answer;
};

// Shuffled word from answer array
// if/else to verify that word didn't scramble to equal it's correct spelling
function shuffleWord (word){
  const wordArray = word.split('');
  let shuffledWord = '';

  while (wordArray.length > 0) {
    shuffledWord +=  wordArray.splice(wordArray.length * Math.random() << 0, 1);
  }

  if (shuffledWord === word) {

    return shuffleWord(word);

  }

  return shuffledWord;

};

// Render Word
function init() {
  answer = createWord();
  let shuffled = shuffleWord(answer);
  $(".scrambled").text(shuffled);
};


// Check result of guess on button submit
// Display feedback
// Reset form on button reset
$jokeForm.on("submit", function(event){
  event.preventDefault();
  //console.log("Answer is: " + answer);
  let $userInput = $("#joke-form").find("[type=text]");
  let userInput = $userInput.val().toLowerCase();
  if (userInput === answer) {
    $resultParagraph
      .css("display", "block")
      .css("color", "green")
      .text("Correct!");
  } else {
    $resultParagraph
      .css("display", "block")
      .css("color", "red")
      .text("Please try again!");
  }
}).on("reset", function(event) {
  event.preventDefault();
  $("#joke-form input").val("");
  $resultParagraph.text("");
  init();
});