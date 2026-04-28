const gates = new Map();
gates.set("hasClicked", false)

const sites = [
    "console_one.html",
    "console_two.html",
    "index.html"
];

const clips = [
    
];

function checkFor404(ind) {
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(11);
  let val = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  if (val < 2) { // may need to lower the probability
    window.location.href = "404.html";
  } else {
    window.location.href = sites[ind];
  }
}

function playSound(ind) {
    var sound = new Audio(clips[ind]); 
    sound.currentTime = 0;
    sound.play();
}

function setTrue() {
    sessionStorage.setItem("hasClicked", true)
    document.getElementById("gates").innerText = sessionStorage.getItem("hasClicked") + "";
}

function getGates() {
    return gates.get("hasClicked")
}

function update() {
    if (sessionStorage.getItem("hasClicked") == null) {
        sessionStorage.setItem("hasClicked", false)
    } 
    document.getElementById("gates").innerText = sessionStorage.getItem("hasClicked") + "";
}

