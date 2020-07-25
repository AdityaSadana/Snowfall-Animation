$(document).ready(function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w>h) {
        var a = (w*10)/(h);
    } else {
        var a = (h*10)/w;
    }
    
    for (i=1;i<1200/a;i++) {       // change the maximum value of i to vary number of snow elements. i<500/a would be sufficient for any screen size
        window[`div${i}`]=document.createElement(`div`);
        window[`div${i}`].id = `box${i}`;
        window[`div${i}`].className="box";
        document.getElementById("intro").appendChild(window[`div${i}`]);
        window[`particle${i}`]=document.getElementById(`box${i}`);
        window[`x${i}`]=Math.random().toFixed(1)*w;
        window[`y${i}`]=Math.random().toFixed(1)*h;

        setInterval(change.bind(null,i),a/5);    // change the value of a/2 to vary the speed of animation
    }

    function change(i) {
        eval('x'+i+'=x'+i+'+'+(Math.random().toFixed(1)*w/500));
        eval('y'+i+'=y'+i+'+'+(Math.random().toFixed(1)*h/200));
        window[`particle${i}`].style.transform=`translate(${window[`x${i}`]}px,${window[`y${i}`]}px)`;
        window[`particle${i}`].style.transition=`transform (3*${a*a}/16)ms`;
        if(window[`x${i}`]>window.innerWidth || window[`y${i}`]>window.innerHeight) {
            window[`x${i}`]=Math.random()*h-Math.random()*w;
            window[`y${i}`]=0;
        }
    }
});