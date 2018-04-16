/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-11 15:22:02
 * @version $Id$
 */



/*
	需求:点击第一层菜单展开第一层菜单，
	再次点击第一层菜单收缩 解决方案:给每一个li标签设置自定义oonoff开关  
	
	点击其他兄弟节所有同父级的兄弟节点隐藏，
	当前显示   敲黑板关键点是从当前点击的元素去找父级 子级 兄弟节点关键
 	


 */

window.onload=function(){
	
	var json={'测试':'000','1':'aaa','2':'bbb','3':'ccc'};
	for(var arr in json){
		alert(json[arr])
	}
}