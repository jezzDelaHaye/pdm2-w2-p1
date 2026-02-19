let animal1;
let bearImg;


function preload()
{
    animal1 = new Animal(100,100,loadImage('assets/bear.jpg'));
}

function setup() 
{
    createCanvas(600,600);
}

function draw() 
{
    background(0);
    animal1.display();
}

function keyPressed() 
{
    if (key === "w") 
    {
        animal1.moveY(-10);
    } 
    if (key === "s")   
    {
        animal1.moveY(10);
    }
    if (key === "a")   
    {
        animal1.moveX(10);
    }
    if (key === "d")   
    {
        animal1.moveX(-10);
    }

}

class Animal
{
    x;
    y;
    image;

    constructor(x,y,image)
    {
        this.x = x;
        this.y= y;
        this.image = image;
    }

    display()
    {
        image(this.image,this.x,this.y)  
    }

    moveX(deltaX)
    {
        this.x += deltaX;
        
    }

    moveY(deltaY)
    {
        this.y += deltaY;
    }

}