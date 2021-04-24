class Polygon{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r, options);
       this.r=r
        World.add(world, this.body);
       this.image=loadImage("polygon.png");
    }
 display(){

    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop();
   }
}