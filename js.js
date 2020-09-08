let left = document.getElementById("leftButton");
let leftHat = document.getElementById("tophat");
let center = document.getElementById("centerButton");
let centerHat = document.getElementById("porkpie");
let right = document.getElementById("rightButton");
let rightHat = document.getElementById("whoFarted");
let moviePlayer = document.getElementById("screenwrapper");

let showIt = pic => {
    pic.classList.toggle('hide');
}

left.onclick = () => {
    showIt(leftHat);
};
center.onclick = () => {
    showIt(centerHat);
};
right.onclick = () => {
    showIt(rightHat);
    moviePlayer.classList.toggle("hide");
};