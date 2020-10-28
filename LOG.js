class LOG{
    constructor(x,y , width , angle){
        var options  = {
            restitution: 0.1,
           friction:1,
           //density:1

        }
        this.body = Bodies.rectangle(x , y , width, 20 , options );
        this.height = 20;
        this.width = width;
        Matter.Body.setAngle(this.body , angle);
        World.add(world , this.body)
    }

    display(){
        var pos = this.body.position;
        push()
            translate(pos.x , pos.y);
            rotate(this.body.angle);
            fill("yellow");
            rectMode(CENTER);
            rect(0,0, this.width , this.height);
        pop()
    }
}