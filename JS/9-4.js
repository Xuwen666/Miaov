/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-25 15:10:15
 * @version $Id$
 */


window.onload=function(){
	var img=document.querySelector('.img');
	var text1=document.querySelectorAll('.text1');
	var num=0;

	pic();
	function pic(){
		timer=setTimeout(function(){
		domove(text1[num],'top',15,0);
		num++;
		if(num==text1.length){
			img.style.left='0';
			num=1;
		}
		domove(img,'left',15,-num*600,function(){
			domove(text1[num],'top',15,-115,function(){
				pic();
			});
		});
		
		},300)
	}
	
	
}