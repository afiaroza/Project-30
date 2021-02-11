class Block {
  constructor(x,y){
      var options={
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body=Bodies.rectangle(x,y,30,40);
      World.add(world,this.body);
      this.visibility=10;
      
  }
  display(){
      if(this.body.speed<10){
           this.pos=this.body.position;
          push();
          translate(this.pos.x,this.pos.y)
          rectMode(CENTER);
          fill("yellow")
          rect(0,0,30,40);
          pop();
      }
      else{
          World.remove(world,this.body);
          push();
          tint(10,this.visibility);
          this.visibility=this.visibility-0.1;
          pop();
      }
  }
}