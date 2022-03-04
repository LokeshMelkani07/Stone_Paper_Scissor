console.log('This is Rock Paper Scissor Game');
let audioNew = new Audio('musicNew.mp3');
audioNew.play();
let images = document.getElementById('images');
let container = document.getElementById('container');
console.log(container.children[1]);
setTimeout(function () { audioNew.pause() }, 8000);
function myChoice(e) {
    // Generate random number between 1 and 3 excluding 4
    let computerChoice = Math.floor(Math.random() * (1 - 4)) + 4;
    console.log(computerChoice);
    console.log('id is ', e);
    let child = document.getElementById(e);
    console.log(child);
    if (e == computerChoice) {
        child.setAttribute('src', 'won.png');
        let audio = new Audio('win.mp3');
        audio.play();
        setTimeout(function () { location.reload(); audio.pause(); }, 3000);
    }
    else {
        child.setAttribute('src', 'lose.jpg');
        let audio = new Audio('lost.mp3');
        audio.play();
        setTimeout(function () { location.reload(); audio.pause() }, 3000);
    }
}