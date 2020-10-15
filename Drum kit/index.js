var noOfButtonDrum=document.querySelectorAll(".drum").length;
for (var i=0;i<noOfButtonDrum;i++) {
    document.querySelectorAll(".drum")[i].addEventListener ("click" ,function ()
    {
        var buttonInnerHTML=this.innerHTML;
        sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
             
    });

}

document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonAnimation(event.key);
});
function sound(key){

    switch (key){
        case "B":
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "S":
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "U":
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "Z":
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "A":
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
        break;

        case "Y":
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case "H":
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        default: console.log(button.InnerHtml);
    
    }
}    
 function buttonAnimation (currentkey) {
     var animationKey=document.querySelector("."+currentkey);
     animationKey.classList. add("pressed");

 }
