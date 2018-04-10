/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-14 22:58:53
 * @version $Id$
 */

window.onload=function(){
	var btn=document.querySelector('.butoon');
	var text=document.querySelector('.text');
	console.log(text)
	btn.onclick=function(){
		var str=text.value;
		if(str===''){
			alert('1. 没有输入内容');
		}
		else if (isNaN(str)) {
			alert('2. 输入内容不是数字');
		}
		else if (str.charAt(0)==0) {
			alert('3. 输入内容不能以0开头')
		}
		else if (parseFloat(str)!=parseInt(str)) {
			alert('4. 输入内容不能是小数');
		}
		else if (str.length<6||str.length>10) {
			alert('5. 输入数字必须5位以上、10位以内');
		}
	}
}