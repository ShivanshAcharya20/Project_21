class Ground{
    constructor(x, y, width, height){
        var ground_options={
            isStatic: true
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x, y, width, height, ground_options)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255, 255, 0)
        rect(0, 0, this.width, this.height)
        pop()
    }
}