class Form{
constructor(){

}
display(){
    var title = createElement ('h2');
    title.html("Car Racing Game");
    title.position(130,0);
    var input = createInput ("name");
    var button = createButton ('Play');
    var greeting = createElement ('h3');
    input.position(250,160);
    button.position(380,200);
    button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount += 1;
player.update(name);
player.updateCount(playerCount);
greeting.html("Hello! "+ name);
greeting.position(400,160);


    })
    }

   

}