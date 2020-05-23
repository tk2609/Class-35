var canvas, backgroundImage, playerCount, form, player, game, database;
var gameState = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
 
  
}


