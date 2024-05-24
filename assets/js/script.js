let isdark = false;
function darkmode() {
    if (!isdark) {
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    
    }else{
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
   isdark = !isdark
}