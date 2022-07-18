var img8= document.getElementById("img8");
        var btn1= document.getElementById("pro12b1");
        var btn2= document.getElementById("pro12b2");
        
        btn1.onmouseover= ()=> {
            img8.src= '../images/iphone12pro/iphone12_graphite.png';
        };
        btn2.onmouseover= ()=> {
            img8.src= '../images/iphone12pro/iphone12_gold.png';
        };
        btn1.onmouseleave= ()=> {
            img8.src= '../images/iphone12pro/iphone12_gold.png';
        };
        btn2.onmouseleave= ()=> {
            img8.src= '../images/iphone12pro/iphone12_gold.png';
        };