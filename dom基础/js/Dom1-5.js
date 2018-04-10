/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-10 11:58:21
 * @version $Id$
 */

 /*
 
 	需求:鼠标移动到段落的每个a标签上面的时候出现弹窗

 	解决方案:
 			1 遍历所有的a标签给他绑定上自定义值 span[i].index=i
 			2 把每个a标签对应的文字存入数组当中 arr['文字1','文字2']
 			3 鼠标移动到a的时候出现弹窗 display='block'
 			4 鼠标移动a的位置为 当前a标签的位置  offsetleft  getboundingclientRect.left
			   top值要加上a标签自身的高度  offsetheight+offsetheight
			5 为了防止弹窗超出div的范围 
			6 给判断left值 当a标签的offsetleft+弹窗的offsetwidth>div的弹窗的offsetheight
			  如果想让弹窗的右侧挨着div的边上那么
			  left值为 a标签的offsetleft-a标签的offsetleft+弹窗的offsetwidth-div的offsetwidth
			
			7判断top值 当弹窗的getboundingclientRect.bottom> div的offsetheight
			 top值为 a标签getboundingclientRect.top-弹窗的offsetheight

		
	
  */
window.onload=function(){

	var a=document.querySelectorAll('.box a');
	var arr=[
			'赤道是地球表面的点随地球自转产生的轨迹中周长最长的圆周线。赤道半径6,378.2km，赤道周长40075.02千米（24,901英里）。',
			'位于亚洲、大洋洲、南极洲和南北美洲之间。南北最长约15900千米，东西最宽约19000千米，总面积16526万平方千米．平均深度3957米，最大深度11034米。',
			'台湾是中国不可分割的一部分。位于中国大陆东南沿海的大陆架上，总面积约3.6万平方千米，包括台湾岛及兰屿、绿岛、钓鱼岛等21个附属岛屿和澎湖列岛64个岛屿。',
			'热带气旋是发生在热带、亚热带地区海面上的气旋性环流，是地球物理环境中最具破坏性的天气系统之一。',
			'热带风暴（Tropical storm）是热带气旋的一种，其中心附近持续风力为每小时63-87公里，即烈风程度的风力。是所有自然灾害中最具破坏力的。',
			'三硝基甲苯（TNT）为白色或苋色淡黄色针状结晶，无臭，有吸湿性。主要危害是慢性中毒。局部皮肤刺激产生皮炎和黄染。慢性作用主要表现为中毒性胃炎、中毒性肝炎、再障、贫血、中毒性白内障'
	];

	var tanC=document.querySelector('.tanC');
	var timer=null;
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onmouseover=function(){
			clearInterval(timer);
			var aHeight=this.offsetHeight;   /*a自身的高度*/
			var alocation=this.getBoundingClientRect();   /*获取a标签当前的位置*/
			var divWlocation=this.parentNode.parentNode.offsetWidth;   /*获取div的宽*/
			var divHlocation=this.parentNode.parentNode.offsetHeight;  /*获取div的高*/
			tanC.style.left=alocation.left+'px';  /*得到left值*/
			tanC.style.top=alocation.top+aHeight+'px';  /*得到top值*/
			tanC.style.display='block';
			tanC.innerHTML=arr[this.index]+'<a href="javascript:;">详情</a> ';

			var tancalocation=tanC.getBoundingClientRect();    	/*获取弹窗当前的位置*/
			
			if(tancalocation.right>divWlocation){
				tanC.style.left=alocation.left-(tancalocation.right-divWlocation)+'px';
console.log(tanC.style.left);
			}
			if(tancalocation.bottom>divHlocation){
				tanC.style.top=alocation.top-tanC.offsetHeight+'px';
				console.log(tanC.style.top)
			}
			
		}

		a[i].onmouseout=function(){
			timer=setInterval(function(){
				tanC.style.display='none';
			}, 1000);
		}

	}

	tanC.onmouseover=function(){
		clearInterval(timer);
		this.style.display='block';
	}
	tanC.onmouseout=function(){
		this.style.display='none';
	}
	

}