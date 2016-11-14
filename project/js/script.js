initListeners();
var imageCounter = 1;

function initListeners() {
    document.getElementById('part-a').addEventListener("click", partA, false);
    document.getElementById('part-b').addEventListener("click", partB, false);
    document.getElementById('reset').addEventListener("click", reloadPage, false);
}

function reloadPage() {
    window.location.reload();
}


function partA() {
    document.getElementById("part-b").className = "";
    document.getElementById("part-a").className = "current";
    document.getElementById("skyline").setAttribute("src", "images/skyline.jpg");
    document.getElementById("body").setAttribute("style", "background-image: url('images/nyc_large.png'); background-position: 0 -14%;background-repeat: no-repeat;");
    changeSliderImages();
    changeFontType();
    setInterval(changeSliderImages, 4000);
    changeButtonStyles();
    changeHeader();
    movePageContent();
}

function movePageContent(){
    document.getElementById("sidebar").style.float = "left";
    document.getElementById("content").style.float = "right";
    document.getElementById("slideshow").setAttribute("style", "float:right; margin-left:0; margin-right:20px");
    document.getElementById("strapline").setAttribute("style", "background: -webkit-linear-gradient(#F7B731, #676767); border-radius:0");
    document.getElementById("footer").setAttribute("style", "background: -webkit-linear-gradient(#F7B731, #676767); border-radius:0");
}


function changeHeader() {
    var header = document.getElementById("header");
    header.style.backgroundImage = "url(images/header-colour.png)";
}

function changeButtonStyles() {
    var actualButtons = document.querySelectorAll(".read-more");
    for (var i = 0; i < actualButtons.length; i++) {
        actualButtons[i].parentNode.className = "basic";
        actualButtons[i].className = "btn btn-xs btn-primary";
        actualButtons[i].style.fontFamily = "Roboto,Charcoal,sans-serif";
    }

    var menuButtons = document.querySelectorAll("#nav li a");
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.fontFamily = "Bevan,cursive";
        menuButtons[i].style.paddingTop = "7px";
    }
}

function changeFontType() {
    var tagList = ["h1", "h2", "h3"];
    tagList.forEach(changeFontTypeForElements);
}

function changeFontTypeForElements(item) {
    var headers = document.getElementsByTagName(item);
    document.getElementsByTagName('p');
    for (var i = 0; i < headers.length; i++) {
        headers[i].style.fontFamily = "Bevan,cursive";
    }
}

function partB() {
    document.getElementById("part-a").className = "";
    document.getElementById("part-b").className = "current";
}

function changeSliderImages() {
    var img = document.getElementById("slider");
    img.style.opacity = '0.0';
    img.style.borderRadius = "0";
    // fadeOut("slider");
    img.setAttribute("src", "images/slider-" + imageCounter + ".jpg");
    fadeIn("slider");
    imageCounter++;
    if (imageCounter == 5) imageCounter = 1;
}


function fadeIn(id, val) {
    if (isNaN(val)) val = 0;
    document.getElementById(id).style.opacity = '0.' + val;
    if (val < 9) {
        val++;
        setTimeout('fadeIn("' + id + '",' + val + ')', 90);
    } else {
        return;
    }
}

function fadeOut(id,val){
    if(isNaN(val)){ val = 9;}
    document.getElementById(id).style.opacity='0.'+val;
    if(val>0){
        val--;
        setTimeout('fadeOut("'+id+'",'+val+')',50);
    }else{return;}
}