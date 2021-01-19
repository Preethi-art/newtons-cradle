class Chain
{
  constructor(x,y)
  {
  var options={

    bodyA:x,
    bodyB:y,
    stiffness:0.04,
    length:10
  }
  this.chain=Constraint.create(options);
  World.add(world,this.chain);


  }
  display()
  {
      var pos=this.chain.x.position;
      var pos1=this.chain.y.position;

      strokeWeight(20)
  line(pos.x,pos.y,pos1.x,pos1.y);

  }


}
