// document.querySelector("button").addEventListener("click" , handleClick);
// function handleClick(){
//     alert("hello checking");
// }
var n= document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        // alert("Got clicked");
        var boon = this.innerHTML;
        getSound(boon);
        animation(boon);
    });
}
    document.addEventListener("keypress" , function(press){
        getSound(press.key);
        animation(press.key);
    });
    function getSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;  
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;  
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;  
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;  
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;  
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;  

        default: console.log(boon);
    }
 }
 function animation(key){
    var active =document.querySelector( "."+ key);
    active.classList.add("pressed");
    setTimeout( function(){
        active.classList.remove("pressed");
    }, 100) 
 }




/*if we want to do without any function name so we have to copy function at listener pos in EVENT-LISTENER ex:
document.querySelector("button").addEventListener("click" , function(){
    alert("hello checking");
})
var audio = new Audio("sounds/tom-1.mp3");
audio.play();

*/