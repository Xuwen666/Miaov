/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-13 08:45:48
 * @version $Id$
 */

window.onload=function(){

	var h2=document.querySelectorAll('h2');
	for(var i=0;i<h2.length;i++){
		h2[i].onoff=true;
		h2[i].onclick=function(){
			if(this.onoff){
				this.nextElementSibling.style.display='block';
			}
			else{
				this.nextElementSibling.style.display='none';
				var cli=this.nextElementSibling.querySelectorAll('li');
				for(var i=0;i<cli.length;i++){
					cli[i].className='';
				}
			}
			this.onoff=!this.onoff;
		}
		List(h2[i].nextElementSibling);
	}
	// ul显示 隐藏需求实现
	
	// 用户列表函数封装
	function List(ul){
		var li=ul.querySelectorAll('li');
		console.log(li)
		for(var i=0;i<li.length;i++){
			li[i].onoff=true;
			li[i].onclick=function(){
				
				for(var i=0;i<li.length;i++){
					if(this!=li[i]){
						li[i].className='';
						li[i].onoff=true;
					}
				}
				if(this.onoff){
					this.className='active';
				}
				else{
					this.className='';
				}
				this.onoff=!this.onoff;

			}
			li[i].onmouseover=function(){
				if(!this.onoff){
					this.className='active';
				}
				else {
					this.className='hover';
				}
			}
			li[i].onmouseout=function(){
				if(!this.onoff){
					this.className='active';
				}
				else{
					this.className='';
				}
			}
		}
	}
}