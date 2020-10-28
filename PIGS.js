class Pig{

    constructor(x,y){
        var body_2 = {
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,50,50 , body_2);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position
    push()
        translate(pos.x , pos.y); 
        rotate(this.body.angle);   
        rectMode(CENTER);
        fill("green")
        rect(0,0 , this.height ,this.height);  
    pop();
    }
}