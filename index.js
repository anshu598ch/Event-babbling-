const parent = document.querySelector(".parent");
const boxes = [...document.getElementsByClassName("box")];
let currentBackground = "white";
const switchColors = {
    white: "red",
    red: "blue",
    blue: "green",
    green: "red",
};

function togglecolor() {
    const newBackground = switchColors[currentBackground];
    parent.style.backgroundColor = newBackground;
    currentBackground = newBackground;
}
boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
});

function boxClicked(e) {
    e.stopPropagation();
    const id = e.target.id;
    let newColor;
    if (id === "red") {
        newColor = "red";
    } else if (id === "blue") {
        newColor = "blue";
    } else {
        newColor = "green";
    }
    parent.style.backgroundColor = newColor;
    currentBackground = newColor;
}