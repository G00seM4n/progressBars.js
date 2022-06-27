window.onload = function() {
    let i = 0;
    let e = document.getElementsByClassName('greenBar');
    let ew = document.getElementById('greyProgress').clientWidth;
    
    function b(i){
        let w = 0;

        let t = setInterval(function() {
            if (w >= ew){
                i++;
                b(i);
                clearInterval(t);
            } else {
                w++;
                e[i].style.width = w + 'px';
                e[i].innerHTML = Math.round(w/ew*100) + '%';
            }
        }, 1);

        if(i >= e.length) {
            clearInterval(t);
        }
    }
    b(i);
}
