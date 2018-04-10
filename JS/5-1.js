/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-16 23:00:30
 * @version $Id$
 */

window.onload=function(){
	var li=document.querySelectorAll('li');

	for(var i=0;i<li.length;i++){
		price(li[i]);
	}

	function price(li){
		var input=li.querySelectorAll('input');
		var strong=li.querySelector('strong');
		var span=li.querySelector('span');
		var em=li.querySelector('em');
		var num=Number(strong.innerHTML);
		var price=parseFloat(span.innerHTML);


		input[0].onclick=function(){
			num--;
			if(num<0){
				num=0;
				return;
			}
			strong.innerHTML=num;
			em.innerHTML=num*price+'元';
			pPrice();
		}
		input[1].onclick=function(){
			num++;
			strong.innerHTML=num;
			em.innerHTML=num*price+'元';
			pPrice();
		}
	}


		var astrong=document.querySelectorAll('.box strong');
		var aspan=document.querySelectorAll('.box span');
		var aem=document.querySelectorAll('.box em');
		var pstrong=document.querySelector('p strong');
		var pspan=document.querySelector('p span');
		var pem=document.querySelector('p em');
	
		function pPrice(){
			var Num=0;
			var max=0;
			var total=0;
			var arr=[];
			for(var i=0;i<li.length;i++){
				Num+=Number(astrong[i].innerHTML);
				total+=parseFloat(aem[i].innerHTML);
				if(Number(astrong[i].innerHTML)>0){
					arr.push(parseFloat(aspan[i].innerHTML));
				}
			}
			pstrong.innerHTML=Num;
			pem.innerHTML=total;
			console.log(arr);
			var Max=arr.sort(function(a,b){return a<b});
			console.log(Max)
			pspan.innerHTML=Max[0];
			
		}
}	