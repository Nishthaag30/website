var img5= document.getElementById("img5");
        var btn1= document.getElementById("SEb1");
        var btn2= document.getElementById("SEb2");
        var btn3= document.getElementById("SEb3");

        btn1.onmouseover= ()=> {
            img5.src= '../images/iphoneSE/iphoneSE_red.png';
        };
        btn2.onmouseover= ()=> {
            img5.src= '../images/iphoneSE/iphoneSE_black.png';
        };
        btn3.onmouseover= ()=> {
            img5.src= '../images/iphoneSE/iphoneSE_starlight.png';
        };
        btn1.onmouseleave= ()=> {
            img5.src= '../images/iphoneSE/iphoneSE_black.png';
        };
        btn2.onmouseleave= ()=> {
            img5.src= '../images/iphoneSE/iphoneSE_black.png';
        };
        btn3.onmouseleave= ()=> {
            img5.src= '../images/iphoneSE/iphoneSE_black.png';
        };