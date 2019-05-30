// JavaScript
var multiple = new Multiple({
    selector: '.key',
    background: 'linear-gradient(to right, rgba(166,192,254,1) 28%,rgba(246,128,132,1) 66%)'
});


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', function(e){
    e.keyCode = this.getAttribute('data-key');
    playSound(e);
    console.log(this.getAttribute('data-key'));
}));
/*
 setInterval(function(){ 
    
         const audio0 = document.querySelector(`audio[data-key="68"]`);
audio0.currentTime = 0;
    audio0.play();
 
 }, 480);
 */