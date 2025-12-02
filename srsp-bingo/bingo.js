const bingoCards = [
    "Tour team shoutout",
    "\"We had a 1am call time\"",
    "\"MIZ\"",
    "Tells a joke and nobody laughs",
    "Neck innuendo",
    "Grace the robot",
    "Section slogan",
    "Bad word",
    "Mini Mizzou story",
    "Says something that obviously pisses off the directors",
    "Heyyy maybe don\'t say this to a large group of people",
    "Breathes into the mic really loudly",
    "Significant other mention",
    "\"I started on the waitlist\"",
    "Really awkward intro",
    "Bicentennial parade",
    "\"I almost quit...\"",
    "KKΨ or TBS shoutout",
    "Section diss",
    "Gasparilla Bowl or Armed Forces Bowl",
    "Really long speech",
    "Cries",
    "Spot the dog",
    "Band bunch",
    "I\'ve never seen this person in my life",
    "\"To keep it short...\" (it was not, in fact, short)",
    "Mentions coming from a different state",
    "Hugs a director",
    "Tipperary",
    "Mentions weather of a football game",
    "\"Go tigers\"",
    "Marching 4 to 5 through NYC"
];


function randomSubset(arr, k) {
    const a = arr.slice(); // copy
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, k);
}

function generateBoard() {
    let bb = randomSubset(bingoCards, bSize);
    for(let i = 0; i < bSize; i++) {
        board[i].textContent = bb[i];
        board[i].style.setProperty("background-color", "white")
    }
    board[12].textContent = "Free";
    board[12].style.setProperty("background-color", "rgb(253, 183, 25)");
}

function tileFunct(event) {
    if(event.type === "mouseover" && getComputedStyle(this).backgroundColor !== "rgb(253, 183, 25)") {
        this.style.setProperty("background-color", "rgb(255, 223, 165)");
    }

    if(event.type === "mouseout" && getComputedStyle(this).backgroundColor !== "rgb(253, 183, 25)") {
        this.style.setProperty("background-color", "white");
    }

    if(event.type === "click" && getComputedStyle(this).backgroundColor !== "rgb(253, 183, 25)") {
        this.style.setProperty("background-color", "rgb(253, 183, 25)");
    }
}

function resetBoard() {
    for(let i = 0; i < bSize; i++) {
        board[i].style.setProperty("background-color", "white");
    }
    board[12].style.setProperty("background-color", "rgb(253, 183, 25)");
}


const b = document.querySelector(".board").children;
const bSize = 25;
let board = Array.from(b);
generateBoard();


for(let i = 0; i < bSize; i++) {
    board[i].addEventListener("click", tileFunct);
    board[i].addEventListener("mouseover", tileFunct);
    board[i].addEventListener("mouseout", tileFunct);
}

let resetButton = document.getElementById("r-butt");
let newButton = document.getElementById("n-butt");
resetButton.addEventListener("click", resetBoard);
newButton.addEventListener("click", generateBoard);