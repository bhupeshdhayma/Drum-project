let numberOfButtons = document.querySelectorAll(".drum").length;
console.log(numberOfButtons);

for(let i = 0; i<numberOfButtons; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let key = this.innerText

        makeSound(key);
        buttonAnimation(key);
    });
}

function makeSound(key){
switch(key){
    case 'w':
    let tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();
    console.log(key);
    break;

    case 'a':
    let tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play();
    console.log(key);
    break;

    case 's':
    let tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play();
    console.log(key);
    break;

    case 'd':
    let tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play();
    console.log(key);
    break;

    case 'j':
    let snare = new Audio("./sounds/snare.mp3");
    snare.play();
    break;

    case 'k':
    let crash = new Audio("./sounds/crash.mp3");
    crash.play();
    break;

    case 'l':
    let kick = new Audio("./sounds/kick-bass.mp3");
    kick.play();
    break;
}
}


document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});



function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}