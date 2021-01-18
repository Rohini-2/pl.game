class Particles {
    constructor(x, y, width, height) {
     var options={
       isStatic:true,
     }
     this.body=Bodies.cricle(x,y,width,height,options);
     this.color=color(random(0,255),random(0,255),random(0,255));
     world.add(world,this.body)
    }
    
}
