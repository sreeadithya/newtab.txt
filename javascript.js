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


const sidebar = document.getElementById('sidebar');

const hoverchecker = document.getElementById('hoverchecker');

hoverchecker.addEventListener('mouseover', function handleMouseOverEvent() {
  sidebar.style.visibility = 'visible'
});

hoverchecker.addEventListener('mouseout', function handleMouseOutEvent() {
  sidebar.style.visibility = 'hidden'
});

const body = document.getElementById('body');

const darkmodebtn = document.getElementById('darkmodebtn');

var isDarkMode = false;

if (!isDarkMode) {
    body.style.backgroundColor = "#121212";
    textarea.style.color = "#FFFFFF"
  })
}
else {

}
darkmodebtn.addEventListener('click', function changeStyle() {
