/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-25 00:07:03
 * @version $Id$
 */

window.onload=function(){
	var len=10;
	var str='';
	var box=document.querySelector('.box');
	for(var i=0;i<len;i++){
		str+='<span>+1</span>';
	}
	box.innerHTML=str+box.innerHTML;

	
	var aspan=document.getElementsByTagName('span');
	var bg=document.querySelector('.bg');
	var onoff=true;
	box.onclick=function(){
	
		var num=0;
		var flag=0;   /*控制值span值*/
		var nuBer=0;  /*控制值span值*/
		if(!onoff)return;
		onoff=false;
		box.domove=setInterval(function(){
			
			doMove(aspan[num],'top',10,-300,function(){
				
				flag++;   /*因为我要单独控制这些值 判断他是否执行完成*/
			
				if(flag==aspan.length){
					Text('top');
					
				}
			});
			opacity(aspan[num],'opacity',2,0,function(){
				nuBer++;
				if(nuBer==aspan.length){
					Text('opacity');
					
				}
			});
			num++;
			if(num==aspan.length){
				clearInterval(box.domove);
			
			}
			
		},100)
		doMove(bg,'width',13,500,function(){
			bg.style.width='0';
		});
		opacity(bg,'opacity',1.5,100,function(){
			opacity(bg,'opacity',1.5,0);
		})
	}
	// 执行一边完成 完成后还要调用一个函数让span文字再次显示出来
	// 
	// 封装函数返回原有位置函数
	var arr=[];
	function Text(num){
		
		arr.push(num);
		console.log(arr)
		var iNOw=0;
		if(arr.length%2==0){
			// 确保全部执行完成以后
			
			for(var i=0;i<aspan.length;i++){
				opacity(aspan[i],'opacity',1.5,100,function(){
					iNOw++;
					if(iNOw==aspan.length){

						onoff=true;
					}
				})
				
				aspan[i].style.top=0;
			}
		}
		
	}
}