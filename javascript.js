// Get the textarea element
const textarea = document.querySelector('textarea');

// Check if there is a saved value in localStorage and set it as the textarea value
const savedValue = localStorage.getItem('textareaValue');
if (savedValue) {
  textarea.value = savedValue;
}

// Save the text to localStorage when the user types
textarea.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.value);
});

//javascript written by openai lol, i'll have to learn how to use js in the future
// okay cool i think i finally know how git works across computers
