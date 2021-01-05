class Dustbin{
    constructor(x,y,width,height){
    var options={
     'isStatic':true    
    }
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true},render) 
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true},render) 
    Matter.Body.setAngle(this.leftWallBody, this.angle); this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true},render)
     Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
}

display(){
    var dustpos = this.body.position;
    push();
    translate(dustpos.x, paperpos.y);
    rectMODE(CENTER);
    strokeWeight(3);
    fill(255,0,0);
    rect(this.x,this.y,this.width,this.height);
    pop();
}
}