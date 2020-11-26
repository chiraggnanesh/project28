class Tree{
    constructor(x, y){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x, y , options);
    this.image=loadImage("images/tree.png");
    World.add(world, this.body);
}
    display(){
        image(this.image, this.x, this.y, this.options);
    }
}