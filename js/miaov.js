/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-23 21:37:34
 * @version $Id$
 */


// 封装获取计算机计算后样式

function gestyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

// 封装动画滑动函数
// 
// 
function doMove(obj,attr,dir, target, endFn){
	dir=parseFloat(gestyle(obj,attr))<target?dir:-dir;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=parseInt(gestyle(obj,attr))+dir;
		if(speed>target&&dir>0||speed<target&&dir<0){
			speed=target;
		}
		obj.style[attr]=speed+'px';
		if(speed==target){
			clearInterval(obj.timer);
			endFn&&endFn();
		}	
	},30)
}


// 封装抖动函数
function shake(obj,attr,endFn){

	if(obj.shake){
		return;
	}
	obj.shake=true;
	var pos=parseFloat(gestyle(obj,attr));
	var arr=[];
	var len=20;
	var num=0;
	for(var i=len;i>0;i-=2){
		arr.push(i,-i);
	}
	arr.push(0);
	console.log(arr)
	clearInterval(obj.shake)
	obj.shake=setInterval(function(){
		obj.style[attr]=pos+arr[num]+'px';
		num++;
		if(num===len){
			clearInterval(obj.shake);
			endFn&&endFn();
			obj.shake=false;
		}
	},50)
}

// 封装透明度函数

function opacity(obj,attr,dir,target,endFn){
	dir=gestyle(obj,attr)*100<target?dir:-dir;
	clearInterval(obj.opacity);
	obj.opacity=setInterval(function(){
		var speed=parseFloat(gestyle(obj,attr)*100)+dir;
		if(speed>target&&dir>0||speed<target&&dir<0){
			speed=target;
		}
		obj.style[attr]=speed/100;
		if(speed==target){
			clearInterval(obj.opacity);
			endFn&&endFn();
		}
	},20)
}