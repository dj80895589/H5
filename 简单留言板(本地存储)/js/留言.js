// var tijiao = document.getElementById("tijiao");
window.onload=function(){
	document.getElementById("tijiao").onclick=function(){submit()};
	document.getElementById("chakan").onclick=function(){check()};
	document.getElementById("shanchu").onclick=function(){clear()};
}
function submit(){
	//提交留言
	var name=document.getElementById("昵称").value;
	var liuyan=document.getElementById("留言").value;
	if (name==""||liuyan=="") {
		alert("请输入内容");
	}else{
		localStorage.setItem(name,liuyan);
	}
	document.getElementById("昵称").value=null;
	document.getElementById("留言").value=null;
	// window.alert(name+liuyan);
}
function check(){
    var str="";
    if(localStorage.length>0){
    	for(i=0;i<localStorage.length;i++){
    		var name=localStorage.key(i);
    		var liuyan=localStorage.getItem(name);   //value只能用索引来取值
	str+="<li>"+name+ "<span>说</span>" +liuyan+"</li>";	
}
document.getElementById("list1").innerHTML=str;}
else{
    document.getElementById("list1").innerHTML="无数据显示";
}
}
function clear(){
	localStorage.clear();
	document.getElementById("list1").innerHTML="无数据显示";
}
