class Mango{
    constructor(x,y,radius) {
        var options= {
            isStatic: true,
            restitution: 0,
            friction: 1,
       }
        this.body= Bodies.circle(x,y,radius, options)
        //this.body.radius= radius
        this.x= x
        this.y= y
        this.radius= radius

        this.body.image= loadImage("mango.png")

        World.add(world, this.body)
    }
    display() {
        var pos= this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        imageMode(RADIUS)
        image(this.image,0, 0, this.radius*2, this.radius*2)
        pop()
    }
}