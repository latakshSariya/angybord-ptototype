class Ground{

    constructor(){
        var body_2 = {
            isStatic:true
        }
        this.body = Bodies.rectangle(500,450,1000,50,body_2);
        this.width = 1000;
        this.height = 50;
        World.add(world , this.body);
    }
    display(){
        fill("brown");
        noStroke();
        rectMode(CENTER);
        rect(this.body.position.x , this.body.position.y , this.width , this.height);

    }
}