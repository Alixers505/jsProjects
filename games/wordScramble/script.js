// Initialize js as an IFEE, to prevent leaking variables into global scope

(function() {
  const $jokeForm = $("#joke-form");
  const $userInput = $jokeForm.find("#userInput");
  const $result = $("#result");

  const currentState = {
    answer: "",
    shuffledWord: "",
    words: [
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
    ]
  };

  function initializeState() {
    resetGame(currentState);
  }

  // Render Word
  function resetGame(state) {
    state.answer = selectRandomWord(state.words);
    state.shuffledWord = shuffleWord(state.answer);
    $(".scrambled").text(state.shuffledWord);
  }

  // Randomly select a word from the answer array
  function selectRandomWord(words){
    let wordIndex = Math.floor(Math.random()*words.length);
    return words[wordIndex];
  }

  // Shuffled word from answer array
  // if/else to verify that word didn't scramble to equal it's correct spelling
  function shuffleWord (word){
    const wordArray = word.split('');
    let shuffledWord = '';

    while (wordArray.length > 0) {
      shuffledWord +=  wordArray.splice(Math.floor(Math.random()*wordArray.length), 1);
    }

    if (shuffledWord === word) {

      return shuffleWord(word);

    }

    return shuffledWord;

  }


  // Check result of guess on button submit
  // Display feedback
  // Reset state of game
  $jokeForm.on("submit", function(event){
    event.preventDefault();
    //console.log("Answer is: " + answer);
    let userInput = $userInput.val().toLowerCase();
    if (userInput === currentState.answer) {
      $result
        .css("display", "block")
        .css("color", "green")
        .text("Correct!");
    } else {
      $result
        .css("display", "block")
        .css("color", "red")
        .text("Please try again!");
    }
  }).on("reset", function(event) {
    event.preventDefault();
    $userInput.val("");
    $result.text("");
    resetGame(currentState);
  });

  // Initialize first word
  initializeState();

})();