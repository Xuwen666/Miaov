/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-29 17:28:44
 * @version $Id$
 */

window.onload=function(){
	var bgimg=document.querySelector('.bgimg');
	var bg=document.querySelector('.bg');
	var onoff=true;
	console.log(bg)
	document.onclick=function(){
		if(onoff){
			bg.style.display='block';
		}
		else{
			bg.style.display='none';
		}
		onoff=!onoff;
	}
}