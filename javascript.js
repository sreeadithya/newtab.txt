

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




var fontlocalstorage;
if (fontlocalstorage !== null) {
  var fontindex = localStorage.getItem('fontlocalstorage')
  var fontlocalstorage = dropdown.options[fontindex];
  body.style.fontFamily = fontlocalstorage.value
  dropdown.selectedIndex = localStorage.getItem('fontlocalstorage')
}


dropdown.addEventListener('change', function() {

    const selectedOption = dropdown.options[dropdown.selectedIndex].value

    if (selectedOption == 'times new roman') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'times new roman'
    }

    if (selectedOption == 'arial') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'arial'
    }
    else if (selectedOption == 'verdana') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'verdana'
    }
    else if (selectedOption == 'lucida console') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'lucida console'
    }
    else if (selectedOption == 'century gothic') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'century gothic'
    }
    else if (selectedOption == 'helvetica') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'helvetica'
    }
    else if (selectedOption == 'courier new') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'courier new'
    }
    else if (selectedOption == 'tahoma') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'tahoma'
    }
    else if (selectedOption == 'trebuchet ms') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'trebuchet ms'
    }
    else if (selectedOption == 'calibri') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'calibri'
    }
    else if (selectedOption == 'cambria') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'cambria'
    }
    else if (selectedOption == 'ms sans serif') {
      localStorage.setItem("fontlocalstorage", dropdown.selectedIndex)
      body.style.fontFamily = 'ms sans serif'
    }
  }

)
