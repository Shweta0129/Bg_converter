function bgchange(color) {
    let colorarray = ["#48C9B0", "#f9b4ab", "#BDC3C7", "#C39BD3", "#F7DC6F"];
    document.body.style.background = colorarray[color];
}
 
var colorarray = ["#48C9B0", "#f9b4ab", "#BDC3C7", "#C39BD3", "#F7DC6F"];
var colorbox = document.getElementById("colorbox");
 
colorarray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgchange(index);
    });
    colorbox.appendChild(span);
});