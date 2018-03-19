//创建舞台
var stage =new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);
var gameView=new createjs.Container();
stage.addChild(gameView);
var arr=[[],[],[],[],[],[],[],[],[]];
function addCircles(){
    for(var Y=0;Y<9;Y++){
        for(var X=0;X<9;X++){
            var Yuan=new Circle();
            gameView.addChild(Yuan);
            arr[X][Y]=Yuan;
            Yuan.X=X;
            Yuan.Y=Y;

        }
    }
}
addCircles();
function Circle(){
createjs.Shape.call(this);
this.setType=function(type){
    this.Type=type;
    switch (type){
        case Circle.unused:this.setColor("#bbbbbb",25);
        break;
        case Circle.used:this.setColor("#ff6600",25);
        break;
        case Circle.cat:this.setColor("#0000ff",25);
        break;
    }
}
this.setColor=function(color,radius){
this.graphics.beginFill(color);
this.graphics.drawCircle(0,0,radius);
this.graphics.endFill();
}
this.getType=function(){
    return this.type;
}
this.setType(1);
}
Circle.unused=1;
Circle.used=2;
Circle.cat=3;
Circle.prototype=new createjs.Shape();



