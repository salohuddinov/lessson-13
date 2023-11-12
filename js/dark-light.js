let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "light") {
        this.firstElementChild.src = "images/dark.svg";
    } else {
        this.firstElementChild.src = "images/light.svg";
    }
    document.body.classList.toggle("light");
});