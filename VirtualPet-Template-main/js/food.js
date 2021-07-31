class Food{
    constructor() {
        var foodStock;
        this.image = "Images/Milk.png";
    }
    getFoodStock() {}

        

    display() {
        var x = 80, y = 100;

    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    if (this.foodStock!= 0) {
        for(var i = 0; i < this.foodstock; i++){
            if( i % 10 == 0) {
                x = 80;
                y = y + 50;
            }
            image(this.image, x, y, 50, 50)
        }
    }
    }
}