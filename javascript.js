

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


const fontsidebar = document.getElementById('fontsidebar');

const fonthoverchecker = document.getElementById('fontsidebar')

const sidebar = document.getElementById('sidebar');

const hoverchecker = document.getElementById('hoverchecker');


var fontsidebaractive = false;



var timer;



function fontselectorclick() {
  fontsidebar.style.visibility = 'visible'
  fontsidebaractive = true;
}

fonthoverchecker.addEventListener('mouseover', function handleMouseOverEvent() {
  clearTimeout(timer);
  fontsidebar.style.visibility = 'visible'
  sidebar.style.visibility = 'visible'
})


fonthoverchecker.addEventListener('mouseout', function handleMouseOutEvent() {
  timer = setTimeout(function () {
    fontsidebar.style.visibility = 'hidden'
    sidebar.style.visibility = 'hidden'
  }, 50);

})




hoverchecker.addEventListener('mouseover', function handleMouseOverEvent() {
  clearTimeout(timer);
  sidebar.style.visibility = 'visible'
});



hoverchecker.addEventListener('mouseout', function handleMouseOutEvent() {
timer = setTimeout(function () {
  sidebar.style.visibility = 'hidden'
  sidebar.style.animation = 'animation: slide 0.5s forwards'
  fontsidebar.style.visibility = 'hidden'
}, 50);
});














const body = document.getElementById('body');

const darkmodebtn = document.getElementById('darkmodebtn');

const sidebutton = document.querySelectorAll('.sidebutton');

const dropdown = document.getElementById('dropdown')


isDarkModeStorage = JSON.parse(localStorage.getItem('isDarkModeStorage'))
if (isDarkModeStorage == true) {
  var isDarkMode = true;

    textarea.style.color = "#FFFFFF";
    body.style.backgroundColor = "#121212";
    sidebar.style.backgroundColor = '#121212'
    sidebar.style.outline = '2px solid white'
    sidebutton.forEach(sidebutton => {
    sidebutton.style.color = "#FFFFFF";
    dropdown.style.color = '#FFFFFF';
    dropdown.style.backgroundColor = '#121212';
    fontsidebar.style.outline = '2px solid #FFFFFF'
    fontsidebar.style.backgroundColor = '#121212'
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
        dropdown.style.color = '#FFFFFF';
        dropdown.style.backgroundColor = '#121212';
        fontsidebar.style.outline = '2px solid #FFFFFF'
        fontsidebar.style.backgroundColor = '#121212'
        });
  }
  else {
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
        });
  }
  isDarkMode = !isDarkMode
  localStorage.setItem("isDarkModeStorage", isDarkMode)
})

function downloadtext() {
         var blob = new Blob([textarea.value], {
            type: "text/plain;charset=utf-8",
         });
         saveAs(blob, "newtab.txt");
      }


dropdown.addEventListener('change', function() {
  const selectedOption = dropdown.options[dropdown.selectedIndex].value

  if (selectedOption == 'times new roman') {
    body.style.fontFamily = 'Times New Roman';
  }
  else if (selectedOption == 'arial') {
    body.style.fontFamily = 'Arial';
  }
  else if (selectedOption == 'verdana') {
    body.style.fontFamily = 'Verdana';
  }
  else if (selectedOption == 'lucida console') {
    body.style.fontFamily = 'Lucida Console';
  }
  else if (selectedOption == 'century gothic') {
    body.style.fontFamily = 'Century Gothic';
  }
  else if (selectedOption == 'helvetica') {
    body.style.fontFamily = 'Helvetica';
  }
  else if (selectedOption == 'courier new') {
    body.style.fontFamily = 'Courier New';
  }
  else if (selectedOption == 'tahoma') {
    body.style.fontFamily = 'Tahoma';
  }
  else if (selectedOption == 'trebuchet ms') {
    body.style.fontFamily = 'Trebuchet MS';
  }
  else if (selectedOption == 'calibri') {
    body.style.fontFamily = 'Calibri';
  }
  else if (selectedOption == 'cambria') {
    body.style.fontFamily = 'Cambria';
  }
  else if (selectedOption == 'ms sans serif') {
    body.style.fontFamily = 'MS Sans Serif';
  }

})
