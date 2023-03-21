const textareaquery = document.getElementById('textarea');
const savedValue = localStorage.getItem('textareaValue');


if (savedValue) {
  textareaquery.value = savedValue;
}

textareaquery.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.value);
});

const textarea = document.getElementById('textarea')



let isBlurRefresh = !JSON.parse(localStorage.getItem('isBlurRefresh'))


if (isBlurRefresh != true) {
  var isBlur = true;
  textarea.classList.add("blur")
}
else {
  var isBlur = false;
}



document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key == "b") {

      if (!isBlur) {
        textarea.classList.add("blur")
        let isBlur = true
      }
      else if (isBlur) {
        textarea.classList.remove("blur")
        let isBlur = false
      }
isBlur=!isBlur
  }
  localStorage.setItem('isBlurRefresh', isBlur)
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

const sidebutton = document.querySelectorAll('.sidebutton');


isDarkModeStorage = JSON.parse(localStorage.getItem('isDarkModeStorage'))
if (isDarkModeStorage == true) {
  var isDarkMode = true;
  textarea.style.color = "#FFFFFF";
  body.style.backgroundColor = "#121212";
  sidebar.style.backgroundColor = '#121212'
  sidebar.style.outline = '2px solid white'
  sidebutton.forEach(sidebutton => {
    sidebutton.style.color = "#FFFFFF";
  });
}
else {
  var isDarkMode = false;
}


darkmodebtn.addEventListener('click', function(){
  if (!isDarkMode) {
        textarea.style.color = "#FFFFFF";
        body.style.backgroundColor = "#121212";
        sidebar.style.backgroundColor = '#121212'
        sidebar.style.outline = '2px solid white'
        sidebutton.forEach(sidebutton => {
          sidebutton.style.color = "#FFFFFF";
        });
  }
  else {
        textarea.style.color = "#121212";
        body.style.backgroundColor = "#FFFFFF";
        sidebar.style.backgroundColor = '#FFFFFF'
        sidebar.style.outline = '2px solid black'
        sidebutton.forEach(sidebutton => {
          sidebutton.style.color = "#121212";
        });
  }
  isDarkMode = !isDarkMode
  localStorage.setItem("isDarkModeStorage", isDarkMode)
})
