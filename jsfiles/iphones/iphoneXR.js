var img9= document.getElementById("img9");
        var btn1= document.getElementById("XRb1");
        var btn2= document.getElementById("XRb2");
        
        btn1.onmouseover= ()=> {
            img9.src= '../images/iphoneXR/iphoneXR_red.png';
        };
        btn2.onmouseover= ()=> {
            img9.src= '../images/iphoneXR/iphoneXR_coral.png';
        };
        btn1.onmouseleave= ()=> {
            img9.src= '../images/iphoneXR/iphoneXR_coral.png';
        };
        btn2.onmouseleave= ()=> {
            img9.src= '../images/iphoneXR/iphoneXR_coral.png';
        };