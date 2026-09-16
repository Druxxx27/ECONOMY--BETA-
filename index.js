const themeBtn = document.getElementById('theme');
const fullelement = document.documentElement;
const themeIcon = themeBtn.querySelector('#btntheme');


themeBtn.addEventListener("click", function(){

    const atualtema = fullelement.getAttribute("data-theme");

    let ptheme
    let image 
    if (atualtema == "dark"){
        ptheme = "light";
        image = "imgs/moon.svg";
    } else {
        ptheme = "dark";
        image = "imgs/sun-high.svg";
    }


    fullelement.setAttribute("data-theme", ptheme);
    themeIcon.src = image 

});

