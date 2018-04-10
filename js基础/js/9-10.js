/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-28 16:55:20
 * @version $Id$
 */

window.onload=function(){

	var ali=document.querySelectorAll('.content li');
	var zongjia=document.querySelector('.zongjia span');   /*总价格*/
	for(var i=0;i<ali.length;i++){
		List(ali[i]);
	}

	var tbody=document.querySelector('tbody');

	function List(li){
		console.log(li)
		var aInput=li.getElementsByTagName('input');
		var oSpan=li.getElementsByTagName('span')[0];
		var odiv=li.getElementsByTagName('div')[0];
		var oimg=li.querySelector('img');		/*图片*/
		var text=li.querySelector('.text');		/*文本*/
		var jage=li.querySelector('.jiage em'); /*价格*/

		var iDow; /*旧的时间 */
		aInput[1].onclick=function(){
			iDow=new Date(aInput[0].value);

			console.log(iDow)
		
			timer=setInterval(time,1000);
		}
		
		// 封装获取时间 函数
		function time(){
		
			console.log(iDow)
			var str='';
			var tim=new Date();
			console.log(tim)
			/*var hours=tim.getHours();
			var min=tim.getMinutes();
			var source=tim.getSeconds();
			str+=toTwo(hours)+toTwo(min)+toTwo(source);*/
			var t=Math.floor((iDow-tim)/1000);
			console.log(t)
			if(t>=0){
				

					oSpan.innerHTML='剩余' + Math.floor(t/86400) + '天' +  Math.floor(t%86400/3600) + '时' + Math.floor(t%86400%3600/60) + '分' +  t%60 + '秒';
					console.log(oSpan.innerHTML)
				
				
			}
			else{
				clearInterval(timer)
				console.log(odiv)
				shake(odiv,'left',function(){
					doMove(odiv,'top',20,280)
					opacity(odiv,'opacity',5,0,function(){
						// console.log(tbody)
						tbody.innerHTML+='<td><div>'+text.innerHTML+'</div></td><td>'+jage.innerHTML+'</td><td><img src="'+oimg.src+'" alt=""></td></tr>';
						console.log(zongjia.innerHTML)
						zongjia.innerHTML=parseFloat(zongjia.innerHTML)+parseFloat(jage.innerHTML)
						
					});
				})
			}
			
		}
	}


	


	// 封装数值小于10的时候前面加个0
	// 
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}
}


