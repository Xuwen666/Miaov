/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-24 14:00:02
 * @version $Id$
 */

/*
	结构 div>img
	功能: 点击对应的索引图片跳到对应的图片上
	解决思路:
	1.封装一个函数传入当前点击的值,因为左右两边都是
	对应的所以for循环执行3次, 比如第一次我传入的值是
	中间值3,设置一个变量用于存储左右两边的索引值,
	当前点击的transform:translateZ(300)
	其他的200 100 0 transform:translateZ(200-i*100)递减
	rotateY(30deg)
	translateX(-150*(i+1))

	left=this.index-i-1;
	right=this.index+i+1;
	如果说她传入的是2呢

	 6 0 1 2 3 4 5

	就要判断left
	if(left<0){left=left+7
	}

	如果说她传入的是5呢
	2 3 4 5 6 0 1

	right(right>6){
		right=right-7 
	}
                                  
	那么现在不管传入什么值都是可以正常展现的

	给所有的img绑定点击事件,设置一个变为0,因为她一上来也是0 为中心点,如果Num到了当前的索引值那么就retrun出函数
	如果说传入的是一个6呢,那他++肯定找不到对应的img 所以我们要判断如果nOW>6 就让他等于0

	封装一个右移函数
	var Num=0;
	aimg[i].onclick=function(){
	    Num++;
	   go(Num);
	   if(){return}
	   settimout(在调用这个函数,1000)
	  
	}
	因为这里存在一个问题就是,你不知道他是那部分调用左移动函数,哪一部分调用右移动函数,
	需求是这样的不管是数值如何,左右移动都会找最近的来移动
	
	1种是 目标点大于当前值,
	思路二 获取当屏幕一半的宽度 左边左移  右边右移动




 */

window.onload = function() {
	
	var oDiv = document.getElementById('div1');
	
	oDiv.onmousedown = function(ev) {
		
		var ev = ev || event;
		
		var disW = this.offsetWidth;
		var disX = ev.clientX;
		var disL = this.offsetLeft;
		
		var b = '';
		
		if ( disX > disL + disW - 10 ) {
			//alert( 'right' );
			b = 'right';
		}
		if ( disX < disL + 10 ) {
			//alert( 'left' );
			b = 'left';
		}
		
		document.onmousemove = function(ev) {
			
			var ev = ev || event;
			
			switch( b ) {
				
				case 'left':
					oDiv.style.width = disW - ( ev.clientX - disX ) + 'px';
					oDiv.style.left = disL + ( ev.clientX - disX ) + 'px';
					break;
					
				case 'right':
					oDiv.style.width = disW + ( ev.clientX - disX ) + 'px';
					break;
				
			}
			
		}
		
		document.onmouseup = function() {
			document.onmousemove = document.onmouseup = null;
		}
		
		return false;
		
	}
	
}

	

