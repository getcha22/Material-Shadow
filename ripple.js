/*
 * Created by getcha on 2015/10/1.
*/
window.onload = getPis;
function getPis(){
var ul = document.getElementsByTagName("ul")[0];
var ulElems = ul.childNodes;
for (var i = 0 ; i <ulElems.length ; i++){
    if (ulElems[i].nodeType == 1){
        ulElems[i].onclick = function(){
            clickScreen(this);
        }
    }
}
}
function clickScreen(ele) {
    var xPisMouse = event.pageX;
    var yPisMouse = event.pageY;
    console.log(xPisMouse,yPisMouse);
    ripple = document.createElement("div");
    console.log(ripple);
    ripple.className = "ripple";
    ripple.style.height = ripple.style.width = 150 + "px";
    ripple.style.top = yPisMouse - 75 + "px";
    ripple.style.left = xPisMouse - 75 + "px";
    ele.appendChild(ripple);

}

