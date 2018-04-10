/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-17 09:12:23
 * @version $Id$
 */

window.onload=function(){
	var li=document.querySelectorAll('li');

	for(var i=0;i<li.length;i++){
		
		list(li[i]);
	}

	function list(li)
	{
		var span=li.querySelector('span');
		var img=li.querySelector('img');
		var input=li.querySelector('input');
		var button=li.querySelectorAll('button');


		// 默认清除
		clear();
		function clear(){
			input.style.display = 'none';
			for(var j=0;j<button.length;j++){
				button[j].style.display = 'none';
			}	
		}
		

		img.onclick=function(){
			span.style.display = 'none'
			this.style.display = 'none';
			input.style.display = 'inline-block';
			for(var j=0;j<button.length;j++){
				button[j].style.display = 'inline-block';
			}
		}
		button[0].onclick=function(){
			span.innerHTML=input.value;
			img.style.display=span.style.display = 'inline-block';

			clear();
		}
		button[1].onclick=function(){
			
			img.style.display=span.style.display = 'inline-block';

			clear();
		}

	}
}