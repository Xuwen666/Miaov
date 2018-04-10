/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-13 23:53:17
 * @version $Id$
 */

window.onload = function() {
	var arr = ['100px', 'abc' - 6, [], -98765, 34, -2, 0, '300', , function() {
		alert(1);
	}, null, document, [], true, '200px' - 30, '23.45元', 5, Number('abc'), function() {
		alert(3);
	}, 'xyz' - 90];
	var str = [];
	var p = document.querySelector('.text');
	var btn = document.querySelectorAll('input');

	btn[0].onclick = function() {
		str=[];
		p.innerHTML ='';
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] == 'number' && !isNaN(arr[i])) {
				
				str.push(arr[i]);
			}

		}
		
		p.innerHTML = str.join(',');
	}

	btn[1].onclick=function(){
		str=[];
		p.innerHTML ='';
		for(var i = 0; i < arr.length; i++)
		{
			if(parseFloat(arr[i])||parseFloat(arr[i])===0){
				str.push(arr[i])
			}
		}
		p.innerHTML = str.join(',');
		console.log(str)
	}


	btn[2].onclick=function(){
		str=[];
		p.innerHTML='';
		for(var i=0;i<arr.length;i++){
			if(parseFloat(arr[i])||parseFloat(arr[i])===0){
				str.push(parseFloat(arr[i]))
			}
		}
		console.log(str)
		var num=0;
		for(var i=0;i<str.length;i++){
			if(num<str[i]){
				num=str[i];
			}
		}
		p.innerHTML=num;
	}

	btn[3].onclick=function(){
		str=[];
		p.innerHTML='';
		for(var i=0;i<arr.length;i++){
			if(typeof arr[i]==='number'&&isNaN(arr[i])){
				str.push(i)
			}
		}
		console.log(str)
		p.innerHTML=str.join(',')
	}

}