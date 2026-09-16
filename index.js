const themeBtn = document.getElementById('theme');
const fullelement = document.documentElement;
const themeIcon = themeBtn.querySelector('#slchange ');

themeBtn.addEventListener("click", function(){

    const atualtema = fullelement.getAttribute("data-theme");

    let ptheme
     
    if (atualtema == "dark"){
        ptheme = "light";
        themeIcon.setAttribute('href', '#lua')
        
    } else {
        ptheme = "dark";
        themeIcon.setAttribute('href', '#sol')
        
    }


    fullelement.setAttribute("data-theme", ptheme);
     

});

