let currentAnimal;

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
        currentAnimal.moveY(-20);
    } 
    if (key === "s")   
    {
        currentAnimal.moveY(20);
    }
    if (key === "a")   
    {
        currentAnimal.moveX(-20);
    }
    if (key === "d")   
    {
        currentAnimal.moveX(20);
    }

}

function mousePressed()
{
    /*
    if (mouseX === animal1.sendCordX && mouseY === animal1.sendCordY)
    {
        currentAnimal = animal1;
    }
    else if (mouseX === animal2.sendCordX && mouseY === animal2.sendCordY)
    {
        currentAnimal = animal2;
    }
    else if (mouseX === animal3.sendCordX && mouseY === animal3.sendCordY)
    {
        currentAnimal = animal3;
    }
    */

    currentAnimal = animal1;
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

    sendCordX()
    {return(this.#x)}

    sendCordY()
    {return(this.#y)}
}

