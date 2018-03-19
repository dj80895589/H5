//点击开始游戏--》startPage消失--》然后游戏开始
//随机出现食物--》出现三级蛇开始运动
//上下左右--》改变方向运动
//判断吃到食物--》食物消失蛇加一
//判断游戏结束--》弹出框
var startP=document.getElementById('startP');
var startPage=document.getElementById('startPage');
var lose=document.getElementById('lose');
var scoreBox=document.getElementById('loserScore');
var score=document.getElementById('score');
var scoreBox1=document.getElementById('score');
var content=document.getElementById('content');
var snakeMove;   //蛇运动定时器
var close=document.getElementById('close');
var loserScore=document.getElementById('loserScore');
var speed=200;  //蛇运动时间
var startBtn=document.getElementById('startBtn');
var startGameBool=true;   //是否开始游戏
var startPaushBool=true;  //是否暂停了
init();  
function init(){
    //地图
    this.mapW=parseInt(getComputedStyle(content).width);
    this.mapH=parseInt(getComputedStyle(content).height);
    this.mapDiv=content;
    //食物
    this.foodW=20;
    this.foodH=20;
    this.foodX=0;     //坐标位置
    this.foodY=0;
   //蛇
    this.snakeW=20;
    this.snakeH=20;
    this.snakeBody=[[3,1,'head'],[2,1,'body'],[1,1,'body']];
    //游戏属性
    this.direct='right';
    this.left=false;
    this.right=false;
    this.up=true;
    this.down=true;
   
    this.score=0;
    scoreBox1.innerHTML=this.score;
    bindEvent();
    //startGame();
}

function startGame(){
	startPage.style.display='none';
	startP.style.display='block';
    food();
    snake();
    //bindEvent();
}

function food(){
	var food = document.createElement('div');
	food.style.width=this.foodW+'px';
	food.style.height=this.foodH+'px';  //把初始定义的食物宽高给这个对象
	food.style.position='absolute';     //绝对定位
	this.foodX=Math.floor(Math.random()*(this.mapW/20));
	this.foodY=Math.floor(Math.random()*(this.mapH/20));
	food.style.left=this.foodX*20+'px'; //把随机坐标给对象
	food.style.top=this.foodY*20+'px';
	this.mapDiv.appendChild(food).setAttribute('class','food');//把食物给地图做子元素，给一个class名就food

}

function snake(){
    for(var i=0;i<this.snakeBody.length;i++){
    	var snake=document.createElement('div');
    	snake.style.width=this.snakeW+'px';
    	snake.style.height=this.snakeH+'px';
        snake.style.position='absolute';
        snake.style.left=this.snakeBody[i][0]*20+'px'; //蛇的坐标
        snake.style.top=this.snakeBody[i][1]*20+'px';
        snake.classList.add(this.snakeBody[i][2]);  //蛇身的class名
        this.mapDiv.appendChild(snake).classList.add('snake');//身体和头一起再一个class
        switch(this.direct){
		case'right': 
		break;
		case'up': 
		snake.style.transform='rotate(270deg)';
		break;
		case'left': 
		snake.style.transform='rotate(180deg)';
		break;
		case'down': 
		snake.style.transform='rotate(90deg)';
		break;
		default:
		break;}
    }
}

function move(){
	for(var i=this.snakeBody.length-1;i>0;i--){
		this.snakeBody[i][0]=this.snakeBody[i-1][0];
		this.snakeBody[i][1]=this.snakeBody[i-1][1];
	}
	switch(this.direct){
		case'right': 
		this.snakeBody[0][0]+=1;
		break;
		case'up': 
		this.snakeBody[0][1]-=1;
		break;
		case'left': 
		this.snakeBody[0][0]-=1;
		break;
		case'down': 
		this.snakeBody[0][1]+=1;
		break;
		default:
		break;
	}
	removeClass('snake');
	snake();
	if(this.snakeBody[0][0]<0||this.snakeBody[0][0]>=this.mapW/20){
			reloadGame();
		}
	    if(this.snakeBody[0][1]<0||this.snakeBody[0][1]>=this.mapH/20){
			reloadGame();
		}
		var snakeHX=this.snakeBody[0][0];   //蛇头坐标
		var snakeHY=this.snakeBody[0][1];
        for(var i=1;i<this.snakeBody.length;i++){
        	if(snakeHX==snakeBody[i][0]&&snakeHY==snakeBody[i][1]){//蛇头坐标和身体坐标相同
        		reloadGame();
        	}
        }
	//this.snakeBody=[[3,1,'head'],[2,1,'body'],[1,1,'body']];
	if(this.snakeBody[0][0]==this.foodX&&this.snakeBody[0][1]==this.foodY){
		var snakeEndX=this.snakeBody[this.snakeBody.length-1][0];
        var snakeEndY=this.snakeBody[this.snakeBody.length-1][1];
        //取出最后一位的位置
        switch(this.direct){   //增加的身体的位置
		case'right': 
		this.snakeBody.push([snakeEndX+1,snakeEndY,'body']);
		break;
		case'up': 
		this.snakeBody.push([snakeEndX,snakeEndY-1,'body']);
		break;
		case'left': 
		this.snakeBody.push([snakeEndX-1,snakeEndY,'body']);
		break;
		case'down': 
		this.snakeBody.push([snakeEndX,snakeEndY+1,'body']);
		break;
		default:
		break;
	}
		this.score+=1;
		scoreBox1.innerHTML=this.score;
		removeClass('food');
		food();
	}
}

function reloadGame(){
	removeClass('snake');
	removeClass('food');
	clearInterval(snakeMove);
	this.snakeBody=[[3,1,'head'],[2,1,'body'],[1,1,'body']];
    //游戏属性
    this.direct='right';
    this.left=false;
    this.right=false;
    this.up=true;
    this.down=true;

    lose.style.display='block';    //弹框出现
    loserScore.innerHTML=this.socre;
      scoreBox.innerHTML=this.score;
      this.score=0;
      scoreBox1.innerHTML=this.score;
      var startGameBool=true;   //是否开始游戏
      var startPaushBool=true;  //是否暂停了
      startP.setAttribute('src','img/start.jpg');

}


function removeClass(className){
	var ele=document.getElementsByClassName(className);
	while(ele.length>0){
		ele[0].parentNode.removeChild(ele[0]);
	}
}

function setDirect(code){
	switch(code){
		case 37:
		if(this.left){
			this.direct='left';
			this.left=false;
			this.right=false;
			this.up=true;
			this.down=true;
		}
		break;
			case 38:
		if(this.up){
			this.direct='up';
			this.left=true;
			this.right=true;
			this.up=false;
			this.down=false;
		}
		break;
			case 39:
		if(this.right){
			this.direct='right';
			this.left=false;
			this.right=false;
			this.up=true;
			this.down=true;
		}
		break;
			case 40:
		if(this.down){
			this.direct='down';
			this.left=true;
			this.right=true;
			this.up=false;
			this.down=false;
		}
		break;
		default:
		break;
	}
}
function bindEvent(){

	close.onclick=function(){
		lose.style.display='none';   //lose消失
	}
    startBtn.onclick=function(){
    	startAndPush();
    	
    }
    startP.onclick=function(){
    	startAndPush();
    }
}

function startAndPush(){
	if(startPaushBool){
		if(startGameBool){
			startGame();
			startPaushBool=false;
		}
		startP.setAttribute('src','img/pause.png');  //改变背景图片
		document.onkeydown=function(e){
		var code=e.keyCode
		setDirect(code);
	}
	 snakeMove=setInterval(function(){
    	move()
    },speed);
    
	//startPaushBool=false;
	}else{
		startP.setAttribute('src','img/start.jpg');
		clearInterval(snakeMove);
		document.onkeydown=function(e){
			e.returnValue=false;
			return false;
		};
		startPaushBool=true;
	}
}