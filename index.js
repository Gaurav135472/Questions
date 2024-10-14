document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = 0;
    let attempts = 0;
    const maxAttempts = 5;
  
    const rangeSlider = document.getElementById('rangeSlider');
    const currentRange = document.getElementById('currentRange');
    const selectRange = document.getElementById('selectRange');
    const rangeText = document.getElementById('rangeText');
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const result = document.getElementById('result');
    const options = document.getElementById('options');
    const quit = document.getElementById('quit');
    const continueBtn = document.getElementById('continue');
  
    const checkGuess = () => {
      let userGuess = Number(guessInput.value);
      if (userGuess === randomNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
        options.style.display = 'none';
      } else if (attempts >= maxAttempts) {
        result.textContent = `You lost! The correct number was ${randomNumber}.`;
        options.style.display = 'block';
      } else if (userGuess < randomNumber) {
        result.textContent = 'Your guess is too low. Try again!';
      } else {
        result.textContent = 'Your guess is too high. Try again!';
      }
    };
  
    submitGuess.addEventListener('click', checkGuess);
    
    guessInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        checkGuess();
      }
    });
  
    quit.addEventListener('click', () => {
      window.close();
    });
  
    continueBtn.addEventListener('click', () => {
      guessInput.value = '';
      result.textContent = '';
      options.style.display = 'none';
    });
  });
  