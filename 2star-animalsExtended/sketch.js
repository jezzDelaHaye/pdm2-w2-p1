function preload()
{
    animal1 = new Animal(300,300,10,loadImage('assets/bear.jpg'));
    animal2 = new Animal(150,150,5,loadImage('assets/monkey.jpg'));
    animal3 = new Animal(0,0,2,loadImage('assets/cat.jpg'));
    
}
function setup()
{
    createCanvas(500,500);
}
function draw()
{
    background(0)
    animal1.display()
    animal2.display()
    animal3.display()
}

function keyPressed() 
{
    if (key === "w") 
    {
        animal1.moveY(-20);
        animal2.moveY(-20);
        animal3.moveY(-20);
    } 
    if (key === "s")   
    {
        animal1.moveY(20);
        animal2.moveY(20);
        animal3.moveY(20);
    }
    if (key === "a")   
    {
        animal1.moveX(-20);
        animal2.moveX(-20);
        animal3.moveX(-20);
    }
    if (key === "d")   
    {
        animal1.moveX(20);
        animal2.moveX(20);
        animal3.moveX(20);
    }

}
class Animal
{
    #x;
    #y;
    #danger;
    image;

    constructor(x,y,danger,image)
    {
        this.#x = x;
        this.#y = y;
        this.#danger = danger;
        this.image = image;
    }

    display()
    {
        if (this.#danger > 7.5) 
        {
            fill(255,0,0)
        }
        else if (this.#danger > 3.5 && this.#danger <7.5)
        {
            fill(255,255,0)
        }
        else if (this.#danger < 3.5)
        {
            fill(0,255,0)
        }
        square(this.#x,this.#y,this.image.width)
        image(this.image,this.#x,this.#y) 
        
        
    }

    moveX(deltaX)
    {
        this.#x += deltaX;
        
    }

    moveY(deltaY)
    {
        this.#y += deltaY;
    }

}