var textarea = document.getElementById('textarea');


//finds saved value in textareaValue and adds it to the text area
textarea.innerHTML = localStorage.getItem('textareaValue');


//listens for input in text area and then adds that text to textareaValue
textarea.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.innerHTML);
}); 


//different ui colors
function darkmodetoggle1() {
  textarea.style.color = "#FFFFFF";
  body.style.backgroundColor = "#121212";
  sidebar.style.backgroundColor = '#121212'
  sidebar.style.outline = '1.5px solid white'
  sidebutton.forEach(sidebutton => {
  sidebutton.style.color = "#FFFFFF";
  dropdown.style.color = '#FFFFFF';
  dropdown.style.backgroundColor = '#121212';
  fontsidebar.style.outline = '1.5px solid #FFFFFF'
  fontsidebar.style.backgroundColor = '#121212'
})}

function darkmodetoggle2() {
  textarea.style.color = "#121212";
  body.style.backgroundColor = "#FFFFFF";
  sidebar.style.backgroundColor = '#FFFFFF'
  sidebar.style.outline = '2px solid black'
  sidebutton.forEach(sidebutton => {
  sidebutton.style.color = "#121212";
  dropdown.style.color = '#121212';
  dropdown.style.backgroundColor = '#FFFFFF';
  fontsidebar.style.outline = '2px solid #121212'
  fontsidebar.style.backgroundColor = '#FFFFFF'
})}


let isBlurRefresh = !JSON.parse(localStorage.getItem('isBlurRefresh'))


//adds blur based on state of isBlurRefresh
if (!isBlurRefresh) {
  textarea.classList.add("blur")
  var isBlur = true;
}
else {
  var isBlur = false;
}


//listens for ctrl+q and adds or removes blur
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key == "q") {
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


//listens for alt+q and changes between darkmodetoggle1 and 2
document.addEventListener("keydown", e => {
  if (e.altKey && e.key == "q") {
      if (!isDarkMode) {
        let isDarkMode = true
        darkmodetoggle1()
      }
      else if (isDarkMode) {
        let isDarkMode = false
        darkmodetoggle2()
      }
  isDarkMode=!isDarkMode
  }
localStorage.setItem('isDarkModeStorage', isDarkMode)
})


//listens for ctrl+s and cancels default action and tells it to use downloadtxtaction
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key == "s") {
    e.preventDefault();
    downloadtxtaction()
}})


const fontsidebar = document.getElementById('fontsidebar');
const sidebar = document.getElementById('sidebar');
const hoverchecker = document.getElementById('hoverchecker');
var fontsidebaractive = false;
var timer;
const changefont = document.getElementById('changefont')


//checks if changefont button is clicked
changefont.addEventListener('click', function() {
  fontsidebar.style.visibility = 'visible';
  fontsidebaractive = true;
});


//checks if the fontsidebar is being interacted with and changes
//visibility accordingly
fontsidebar.addEventListener('mouseover', function handleMouseOverEvent() {
  clearTimeout(timer);
  fontsidebar.style.visibility = 'visible'
  sidebar.style.visibility = 'visible'
})

fontsidebar.addEventListener('mouseout', function handleMouseOutEvent() {
  timer = setTimeout(function () {
    fontsidebar.style.visibility = 'hidden'
    sidebar.style.visibility = 'hidden'
  }, 50);
})


//checks if a certain part of the screen is being hovered on for a period of time
//and then makes the sidebar visible
hoverchecker.addEventListener('mouseover', function handleMouseOverEvent() {
  clearTimeout(timer);
  timer2 = setTimeout(function () {
    sidebar.style.visibility = 'visible'
    sidebar.style.animationName = 'in'
  }, 300);
});

hoverchecker.addEventListener('mouseout', function handleMouseOutEvent() {
clearTimeout(timer2);
timer = setTimeout(function () {
  fontsidebar.style.visibility = 'hidden'
  sidebar.style.animationName = 'out'
  setTimeout (function() {
    sidebar.style.visibility = 'hidden'
  }, 100)
}, 50);
});


const body = document.getElementById('body');
const darkmodebtn = document.getElementById('darkmodebtn');
const sidebutton = document.querySelectorAll('.sidebutton');
const dropdown = document.getElementById('dropdown')


//checks state of ui and toggles it based on the current values
isDarkModeStorage = JSON.parse(localStorage.getItem('isDarkModeStorage'))
if (isDarkModeStorage == true) {
  var isDarkMode = true;
  darkmodetoggle1()
}
else {
  var isDarkMode = false;
}


//checks if darkmode button is pressed in sidebar
darkmodebtn.addEventListener('click', function(){
  if (!isDarkMode) {
    darkmodetoggle1()
  }
  else {
    darkmodetoggle2()
  }
  isDarkMode = !isDarkMode
  localStorage.setItem("isDarkModeStorage", isDarkMode)
})


//function for downloading text, courtesy of filesaver (https://github.com/eligrey/FileSaver.js)
function downloadtxtaction() {
  var blob = new Blob([textarea.innerText], {
     type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "newtab.txt");
}
downloadtxt.addEventListener('click', function() {
  downloadtxtaction()
})


//checks for any changes in the font selector and saves it to localstorage
//also remembers the index of that option
var fontindex = localStorage.getItem('fontlocalstorage')
var fontlocalstorage = dropdown.options[fontindex];

dropdown.addEventListener('change', function() {
    const selectedOption = dropdown.options[dropdown.selectedIndex].value
    localStorage.setItem('fontlocalstorage', dropdown.selectedIndex)
    body.style.fontFamily = selectedOption
})

dropdown.selectedIndex = localStorage.getItem('fontlocalstorage')
body.style.fontFamily = fontlocalstorage.value;


//any text pasted into it is converted into plain text
textarea.addEventListener("paste", function(e) {
  e.preventDefault();
  var pastedtext = e.clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, pastedtext);
  document.execCommand("enableObjectResizing", false, false);
});


//checks device color scheme and changes favicon color accordingly
var favicon = document.getElementById('favicon')
var browserIsDark = window.matchMedia("(prefers-color-scheme: dark)");
if (browserIsDark.matches) {
  favicon.href = "/images/128-light.png"
} 
else {
  favicon.href = "/images/128.png"
}