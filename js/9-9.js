/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-28 11:18:20
 * @version $Id$
 */

window.onload=function(){
	
	var li=document.querySelectorAll('.time li');
	var arrImg=['img/0.JPG','img/1.JPG','img/2.JPG','img/3.JPG','img/4.JPG','img/5.JPG','img/6.JPG','img/7.JPG','img/8.JPG','img/9.JPG'];
	var num=0;
	
	// 封装 小于10的值前面加个0
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}

	
	
	


setInterval(fnTime,1000);
var title=0;
function fnTime(){
	
	title++;
	console.log(title)
		var strin='';
		var time=new Date();
		var hours=time.getHours();
		var min=time.getMinutes();
		var source=time.getSeconds();
		strin+=toTwo(hours)+':'+toTwo(min)+':'+toTwo(source);

for(var i=0;i<li.length;i++){
		Ali(li[i],i)
	}
		function Ali(li,index){
		
		
		var aimg=li.querySelectorAll('img');
		if(strin.charAt(index)==':'){
			aimg[0].src = 'img/colon.JPG';
						setTimeout(function(){
							aimg[0].src = 'img/colon2.jpg';
						}, 500)
		}
		else{
		aimg[1].src=arrImg[strin.charAt(index)];
			if(aimg[0].src != aimg[1].src) {
				doMove(li, 'top', 10, -70, function(){
						aimg[0].src = aimg[1].src;
								li.style.top = 0 + 'px';
						})
			}
		
		}
}

}

}