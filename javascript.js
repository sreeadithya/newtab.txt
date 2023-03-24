var textarea = document.getElementById('textarea');

var savedValue = localStorage.getItem('textareaValue');

if (savedValue !== null) {
  textarea.innerHTML = savedValue;
}

textarea.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.innerHTML);
});



let isBlurRefresh = !JSON.parse(localStorage.getItem('isBlurRefresh'))


if (isBlurRefresh != true) {
  var isBlur = true;
  textarea.classList.add("blur")
}
else {
  var isBlur = false;
}



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


document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key == "s") {
    e.preventDefault();

downloadtxtaction()

}})



const fontsidebar = document.getElementById('fontsidebar');

const fonthoverchecker = document.getElementById('fontsidebar')

const sidebar = document.getElementById('sidebar');

const hoverchecker = document.getElementById('hoverchecker');


var fontsidebaractive = false;



var timer;


const changefont = document.getElementById('changefont')

changefont.addEventListener('click', function() {
  fontsidebar.style.visibility = 'visible';
  fontsidebaractive = true;
});






fonthoverchecker.addEventListener('mouseover', function handleMouseOverEvent() {
  clearTimeout(timer);
  fontsidebar.style.visibility = 'visible'
  sidebar.style.visibility = 'visible'
  sidebar.style.animationName = 'in'
})


fonthoverchecker.addEventListener('mouseout', function handleMouseOutEvent() {
  timer = setTimeout(function () {
    fontsidebar.style.visibility = 'hidden'

    sidebar.style.visibility = 'hidden'
    sidebar.style.animationName = 'out'

  }, 50);

})




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

isDarkModeStorage = JSON.parse(localStorage.getItem('isDarkModeStorage'))
if (isDarkModeStorage == true) {
  var isDarkMode = true;
  darkmodetoggle1()
  }
else {
  var isDarkMode = false;
}


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

function downloadtxtaction() {
  var blob = new Blob([textarea.innerText], {
     type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "newtab.txt");
}

downloadtxt.addEventListener('click', function() {
  downloadtxtaction()
      })





dropdown.addEventListener('change', function() {

    const selectedOption = dropdown.options[dropdown.selectedIndex].value

    localStorage.setItem('fontlocalstorage', dropdown.selectedIndex)
    body.style.fontFamily = selectedOption

})

var fontlocalstorage;
if (fontlocalstorage !== null) {
  var fontindex = localStorage.getItem('fontlocalstorage')
  var fontlocalstorage = dropdown.options[fontindex];

  dropdown.selectedIndex = localStorage.getItem('fontlocalstorage')
  body.style.fontFamily = fontlocalstorage.value;
}



textarea.addEventListener("paste", function(e) {
  e.preventDefault();
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, text);
  document.execCommand("enableObjectResizing", false, false);

});
