var on_off = 1;
function hide() {
    // if (on_off == true) {
    //     document.getElementById('1').innerHTML = ""
    //     document.getElementById('2').innerHTML = ""
    //     document.getElementById('3').innerHTML = ""
    //     document.getElementById('4').innerHTML = ""
    //     on_off =false;
    // }
    console.log(on_off)
    if (on_off == 1) {
        on_off = 2
        document.getElementById('li').style.borderRadius = '20px';
        document.getElementById('li2').style.borderRadius = '20px';
        document.getElementById('li3').style.borderRadius = '20px';
        document.getElementById('li4').style.borderRadius = '20px';
        document.getElementById('1').style.padding = '0';
        document.getElementById('2').style.padding = '0';
        document.getElementById('3').style.padding = '0';
        document.getElementById('4').style.padding = '0';
        document.getElementById('1').innerHTML = ""
        document.getElementById('2').innerHTML = ""
        document.getElementById('3').innerHTML = ""
        document.getElementById('4').innerHTML = ""
    }
    else {
        document.getElementById('1').style.paddingRight = '5em';
        document.getElementById('2').style.paddingRight = '5em';
        document.getElementById('3').style.paddingRight = '5em';
        document.getElementById('4').style.paddingRight = '5em';
        document.getElementById('1').innerHTML = "Home"
        document.getElementById('2').innerHTML = "Settings"
        document.getElementById('3').innerHTML = "Contact"
        document.getElementById('4').innerHTML = "Profile"
        on_off = 1;
    }

}
