/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-23 21:29:42
 * @version $Id$
 */

window.onload=function(){
	var div=document.getElementsByTagName('div');
	var len=20;
	var str='';

	for(var i=0;i<len;i++){
		str+='<div style="left:'+i*60+'px "></div>';
	}
	document.body.innerHTML=str;
	var timer=null;
	var num=0;
	var flag=true;   /*控制方向*/
	var onoff=true; 
	document.onclick=function(){
		if(!onoff){
			return;
		}
		onoff=false;
		clearInterval(timer);
		timer=setInterval(function(){
			doMove(div[num],'top',10,flag==true?300:0,num==len-1?function(){
				flag=!flag;
				onoff=true;
			}:null);
			num++;
			if(num==div.length){
				clearInterval(timer);
				num=0;
				console.log(num)
				
			}
		},100)
		
	}
}