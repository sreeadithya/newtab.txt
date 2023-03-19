const textarea = document.querySelector('textarea');
const savedValue = localStorage.getItem('textareaValue');
if (savedValue) {
  textarea.value = savedValue;
}
textarea.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.value);
});


let isBlur = false;
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key == "b") {
    if (!isBlur) {
      document.getElementById('textarea').classList.add("blur")
      isBlur==true
    }
    else {
      document.getElementById('textarea').classList.remove("blur")
    }
    isBlur=!isBlur
  }
})
