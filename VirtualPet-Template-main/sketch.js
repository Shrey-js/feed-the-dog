var dog,sadDog,happyDog;
var feed;
var addFood;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

  feed = createButton("feed the dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

//function to add food in stock

function addFoods() {
  foodS++
  database.ref("/").update({
    Food:foodS
  })
}