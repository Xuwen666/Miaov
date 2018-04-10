/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-28 10:16:32
 * @version $Id$
 */

window.onload=function(){
var p=document.querySelector('p');
var aimg=document.querySelectorAll('img');
var arrImg=['img/0.JPG','img/1.JPG','img/2.JPG','img/3.JPG','img/4.JPG','img/5.JPG','img/6.JPG','img/7.JPG','img/8.JPG','img/9.JPG'];

	function Time(){
		// 获取时间
		var str='';
		var strin='';
		var time=new Date();
		var Fullyear=time.getFullYear();
		var Month=time.getMonth()+1;
		var date=time.getDate();
		var iDay = time.getDay();
		var hours=time.getHours();
		var min=time.getMinutes();
		var source=time.getSeconds();
		if(iDay===0)iDay='星期天';
		if(iDay===1)iDay='星期一';
		if(iDay===2)iDay='星期二';
		if(iDay===3)iDay='星期三';
		if(iDay===4)iDay='星期四';
		if(iDay===5)iDay='星期五';
		if(iDay===6)iDay='星期六';
		str+=Fullyear+'年'+Month+'月'+date+'日 '+iDay+' '+toTwo(hours)+':'+toTwo(min)+':'+toTwo(source);
		p.innerHTML=str;
		strin+=toTwo(hours)+toTwo(min)+toTwo(source);
		aimg[0].src=arrImg[strin.charAt(0)];
		aimg[1].src=arrImg[strin.charAt(1)];
		aimg[3].src=arrImg[strin.charAt(2)];
		aimg[4].src=arrImg[strin.charAt(3)];
		aimg[6].src=arrImg[strin.charAt(4)];
		aimg[7].src=arrImg[strin.charAt(5)];
	}
	Time();
	setInterval(Time,1000);
	



	// 封装小于10前面数值加上0
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}

}