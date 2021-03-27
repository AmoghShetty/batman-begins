class Rain{
constructor(x,y,radius){
 var options = { 
'friction':0.1,

}
this.x=x;
this.y=y;
this.radius=radius;
this.body=Bodies.circle(x,y,radius,options);
var createDrop=[];
World.add(world,this.body);







}
display(){
    var maxdrops=100;
    for (var i=0; i<maxdrops; i++){
    Rain.push(new createDrop(random(0,400), random(0.400)));


    }
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
   stroke ("blue");
   strokeWeight(5);
    fill("blue");
   ellipseMode(RADIUS);
   ellipse(0,0,this.radius,this.radius)
   
    pop();

}



    
}