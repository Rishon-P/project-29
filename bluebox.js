class bluebox {
    constructor(x,y,width,height){
        var options ={
            friction:1.8,
            restitution:0.8
        }     
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("blue")
        rect(pos.x,pos.y,this.width,this.height)
    }
}