/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 22:47:28
 * @version $Id$
 */

window.onload=function(){
	var len=8;
	var aimg=document.getElementsByTagName('img');
	var str='';
	var num=0;
	var arrImg=['img/9-8-1.jpg','img/9-8-2.jpg','img/9-8-3.jpg','img/9-8-4.jpg'];
	for(var i=0;i<len;i++){
		str+='<img src="'+arrImg[i%arrImg.length]+'" alt="" style="left:'+i*160+'px ">';
	}
	document.body.innerHTML=str;
	var This;
	for(var i=0;i<aimg.length;i++){
		aimg[i].onoff=true;
		aimg[i].onmouseover=function(){
			
			This=this;
			
			shake(This,'left');
		}
	}
}