# jq介绍
  Jq的底层就是Js
#   选择元素
#### - 模拟css选择元素
<<<<<<< HEAD

	$(obj) 跟原生的js有一个很明显的区别就是省略了循环,通过这种方法获取到的是一组这样的元素,在实际的开发过程中可以使用length去判断是否获取到的元素
	
	
#### - 独有表达式选择
    	$('li:first').css('background','red')  获取到的是li下面的第一个
		$('li:last').css('background','red')  获取到的是li下面的最后一个
		$('li:eq(2)').css('background','red')  获取到的是li下面的第二个
		js当中想做隔行换色,需要判断取模,而jq却可以很简单的找到奇 偶数行
		$('li:even').css('background','red')  获取到的是li下面的even 偶数行
   


#   JQ写法
#### - 方法函数化
	jq当中基本上可以忽略掉等号,原生当中我们很多都是赋值,但是在jq当中呢而是通过传参的形式来完成
	我们调用的时候一定要带上括号
	jq当中所有的方法都是封装起来的,所以必须通过调用,或者传参的形式去获取
	
#### - jq与js能共存但是不能混用
```javascript
  $(function(){
    	$('#div').click(function(){
    	$(this).html() ;  //纯jq写法 可行
    	this.innerHTML;   //纯js写法 可行
        $(this).innerHTML;   //不可行
    })
    })
```

#### - 链式操作

#### - 取值赋值合体
```javascript
 $('#div').html();   //取值
    $('#div').html('俺是赋值嘻嘻');   //赋值

    css()  //也是取值赋值合体的这样一个行为
    css('width','140px')  //赋值
    css('width')   //取值

    //取值赋值有一个细节需要注意,就是对一组元素操作是怎么样的
    alert($('li').html());  //只弹出第一个li的内容,所以说当一组元素的时候，取值是一组中的第一个,如果想取所有的话我们就可以利用循环来做
    $('li').html('hello')  //当一组元素的时候，赋值是所有的元素
```
 ```html
   <ul>
    	<li>aaa</li>
    	<li>bbb</li>
    	<li>ccc</li>
    	</ul>
```
#   JQ常用方法
#### - attr()
	attr()相当于是js当中的getAttribute(key) 获取元素的行间属性
```javascript
$('div').attr('id')  //获取div对象 id的行间属性
$('div').attr('id','666')  //设置div对象 id的行间属性
```
#### - filter()
	对一组元素进行筛选 ,在js当中filter是数组下面的方法:筛选出对应的值
```javascript
$(div).flter('.box').css('background','red')    //只会筛选出来div class带box的
```

#### - not()
	与filter的作用是相反的

#### - has()
	作用是用于包含

#### - next()
	next()跟我们原生js当中的nextElementSibling是一样,原生没有括号哦

#### - prev()
 	prev()跟我们原生js当中的prevElementSibling是一样,原生没有括号哦

#### - find()
	他是查找的意思

#### - eq()
	类似我们原生当中的下标

#### - index()
	类似我们原生当中的索引
```javascript
$(function(){
	alert($('#h2').index())    //索引就是当前元素在所有兄弟节点中的位置
})
``````html
<div>
	<h3>11</h3>
	<h3>22</h3>
	<h2 id='h2'>33</h2>
	<h3>44</h3>
</div>
```
#### - detach()
更remove一样,返回被删除之前的值,不同的是会保留他的事件
#### - get()
jq转换成原生js,默认的情况下获取的是原生的集合,那么可以通过次参数来找到集合中的指定项
#### - $()
等DOM加载完就可以执行了,性能好
#### - closest()
获取最近的指定的祖先节点(包括当前元素自己),必须写筛选参数,只能找到一个元素
#### - wrap()
包装
```javascript
$('li').wrap('<div>')
给每个li外面包上一个div

```
#### - wrapAll()
整体包装
```javascript
$('li').wrapAll('<div>')
所有li都包进一个div当中
```
#### - wrapInner()
内部包装
#### - unwrap()
删除父级:不包括body
#### - add()
#### - finish()
动画停止到指定的目标点
#### - delay()
动画延迟
#### - deleagte()
事件委托的方法
```javascript
$('li').on('click',function(){
		this.style.background='red';
	})

	$('ul').delegate('li','click',function(){
		this.style.background='red';
	})
	// 把事件加到ul身上,当我点击li的时候li本身是没有事件的，而是通过利用冒泡的原理
```
事件委托的好处就是
1省略的循环操作你只需要给ul加一个点击事件就行
2对后续添加的内容直接就拥有了事件操作
#### - undeleagte()
阻止事件委托
#### - trigger()
主动触发
```javascript
$('#div1').on('click',function(){alert(1)})
	$('#div1').trigger('click')
```
#### - extend()
对象继承操作,深拷贝操作
```javascript
var a = {
		name : "hello"
	};
	
	var b = {};
	
	$.extend( b , a , {age:20} );
	
	console.log(b);
	
	b.name = 'hi';
	console.log(b)
	alert( a.name );
```
深拷贝
```javascript
var a = {
		name : {age:20}
	};
	
	var b = {};
	
	$.extend( true , b , a );  //默认是浅拷贝的  , true代表深拷贝
	
	b.name.age = 30;
	
	alert( a.name.age );
```
以上所有方法只能给jq对象用 $().css()  $().val()
以下所有方法不仅可以给jq用还可以给js原生使用  $.XXX()  $.xxx() 我们叫他为工具方法
#### - tpye() 注意在原生当中可使用
判断数据类型与原生typeof不一样的地方就是它可以判断出更多的类型,比如json以及数组用原生typeof来判断都是obj,而jq不是
#### - trim() 注意在原生当中可使用
去掉前后空格,这个在获取到数据的时候有用
#### - inArray() 注意在原生当中可使用
类似于原生当中indexOf 找到字符串相应的位置,只不过他是作用于数组的,原生js当中也有indexof这方法
```javascript
var arr=['a','b','c']
	$.innArray('b',arr)
```
#### - prosy() 注意在原生当中可使用
改变this执行类似于原生当中call()
```javascript
function show(n1,n2){
		alert(n1);
		alert(n2);
		alert(this)
	}
	$.proxy(show,document,3,4)()
	// 第一个参数为调用函数
	// 第二个参数为指向
```
#### - noConflict() 注意在原生当中可使用
防止与$命名冲突的
```javascript
var miaov=$.noConflict();
	// miaov代替了$
	miaov(function(){
		miaov('body').css('background','red')
	})
```
#### - parseJson() 注意在原生当中可使用
与原生Json-parse相同
利用这个$,paeseJson我们就可以对ajax或者其他传入来的数据进行解析成真正的json
#### - makeArray() 注意在原生当中可使用
Array.from()
是ES6中的方法，用于将类数组转换为数组。
```javascript
var arr = Array.from(arguments);
```
只要有length属性的对象，都可以应用此方法转换成数组。

#   AJAX 他也是工具方法
```javascript
$.ajax({
		url:'xxx.php',  /*后台地址*/
		data:'name=hello&age=20', /*发送到服务器端的数据*/
		type:'POST', /*传输类型*/
		success:function(data){
			alert(data)
			/*data就是请求成功返回的内容*/
		}
		/*请求成功返回的回调函数*/
		error:function(){
			alert(2)
		}
		/*请求失败*/
	})
```
#### - get()
指定get()请求方式,ajax抽象出来的方法更加具体
```javascript
$.get('xxx.php',{},function(){

	})
	/*第一个参数后台地址
	 第二个参数传输的数据
	 第三个参数请求成功返回的数据
	*/
```
#### - post()
指定post()请求方式,ajax抽象出来的方法更加具体
```javascript
$.post('xxx.php',{},function(){

	})
	/*第一个参数后台地址
	 第二个参数传输的数据
	 第三个参数请求成功返回的数据
	*/
```
#### - getJSON()
请求json类型的数据,同样他也支持jsonp的形式,就是跨域的形式
返回的格式就是json
```javascript
$.getJSON('xxx.php',{},function(data){
		alert(data)
	})
	/*
		jsonp这种形式他需要有一个函数名字才能知道那个函数调用,在jq当中非常容易的就是'xxx.php?callback=show'相当于是这个地址会自动生成一个 show({}),jq当中还提供了写一个问号'xxx.php?callback=?'
		问号的作用就是不用关心这个名字了,他会自动生成一个名字,这个名字是随机的,这样更方便一些
	 
	*/
```
#### - param()
转化为提交给后台的格式字符串类型
```javascript
var obj={‘name’:'hello','age':'20'}；
OBJ=$.param(obj);
consloe.log(obj)
//转成的格式 'name=hello%age=20'
```
这个方法用的并不多,因为在前面我们讲过在ajax操作的过程当中
```javascript
$.ajax(
data:name=hello'&'age=20  //可以写这种格式
data:{"name":"hello","age":"20"}  //这种格式也可以,他会自动帮你转
)
```
#### -  serialize()
格式化表单数据针对form表单,他不是工具方法 ,注意这种方法只能是form当中的name和value的组合才能使用
```javascript
var a=$('form').serialize();
consloe.log(a)
//输出结果 a=1&b=2&c=3
```
```html
<form>
	<input type="text" name="a" value="1">
	<input type="text" name="b" value="2">
	<input type="text" name="c" value="3">
</form>
```

```javascript
var input=document.querySelectorAll('input');
		var arr=[];
		for(var i=0;i<input.length;i++){
			console.log(input[i].name)
			arr.push(input[i].name+'='+input[i].value);
		}

		 /*有个坑join不会改变原始数组*/
		var ddd=arr.join("&");  
		console.log(ddd)
```
#### -  serializeArray()
转换成json的格式
```javascript
//返回的格式
[{name:"a",value:"1"},{name:"b",value:"2"},{name:"c",value:"3"}]
```
#### - load()
相当于是往页面当中去添加数据,一般load头部尾部的页面
```javascript
$('#div1.box').load(
//第一个参数地址  .box代表筛选出.box类的
'data.html'，
//第二个参数是回调函数
	function(){
	
}
)
```
```html
<div id="div1"></div>
```
#### - getScript()
动态的去请求js文件  工具方法 按需加载js,可以让js按需去加载,用就加载不用就不加载
```javascript
$('#div').click($.getScript('data.js'))
//只有点击的时候才加载
```
#   扩展插件
#### - extend()
扩展工具方法下的形式
```javascript
$.extend({
		left:function(str){

		},
		aaa:function(){
			
		}
	})
```
#### - fn.extend()
扩展对象方法下的形式
#   JQ事件
#### - 鼠标事件()
- ##### click()
		当单击元素时，发生 click 事件。 


- ##### dblclick()
		当双击元素时，触发 dblclick 事件。
		提示：dblclick 事件也会产生 click 事件。如果这两个事件都被应用于同一个元素，则会产生问题
	
- ##### mouseenter()
		当鼠标指针穿过（进入）被选元素时，会发生 mouseenter 事件。
		注意：与 mouseover 事件不同，mouseenter 事件只有在鼠标指针进入被选元素时被触发，mouseover 事件在鼠标指针进入任意子元素时也会被触发。
	
- ##### mouseleave()
		当鼠标指针离开被选元素时，会发生 mouseleave 事件。
		注意：与 mouseout 事件不同，mouseleave 事件只有在鼠标指针离开被选元素时被触发，mouseout 事件在鼠标指针离开任意子元素时也会被触发。
	
	
#### - 键盘事件
	
- ##### keypress()
		keypress 事件与 keydown 事件类似。当按钮被按下时发生该事件。
		然而，keypress 事件不会触发所有的键（比如 ALT、CTRL、SHIFT、ESC）

- #####  keydown()

- #####keyup()
	
#### - 表单事件
- ##### keyup()
		当提交表单时，会发生 submit 事件。
		该事件只适用于 form 元素

- ##### change()
		当元素的值改变时发生 change 事件（仅适用于表单字段）
		注意：当用于 select 元素时，change 事件会在选择某个选项时发生。
		当用于 text field 或 text area 时，change 事件会在元素失去焦点时发生。
- ##### focus()
		当元素获得焦点时

- ##### blur()
		当元素失去焦点时

#### -文档/窗口事件()

- ##### resize()
	当调整浏览器窗口大小时，发生 resize 事件。

- ##### scroll()
	当用户滚动指定的元素时，会发生 scroll 事件
- ##### each()
遍历
回调函数的两个参数  i,elem
this指向每个elem
return false;  跳出循环

#   JQ效果
#### -  显示隐藏
- ##### hide() show()
		这个方法在原生来做的话style.display=block/none,
		如果想要有过度的话还需要在css中添加transition
语法:

  `  $(selector).hide(speed,callback);`
   ` $(selector).show(speed,callback);`
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

- ##### toggle()
		通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法
		这个方法可以在js原生当中来实现的话就必须要设置一个开关来进行判断了
语法:
  `  $(selector).toggle(speed,callback);`
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是隐藏或显示完成后所执行的函数名称。
		$(selector) 选中的元素的个数为 n 个，则 callback 函数会执行 n 次。
		对于这里，当 callback 函数加上括号时，函数立即执行，只会调用一次， 
		如果不加括号，元素显示或隐藏后调用函数，才会调用多次

#### -  淡入淡出
- #####  fadeIn()
 用于淡入已隐藏的元素
 语法:
```javascript
$(selector).fadeIn(speed,callback);
```
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是 fading 完成后所执行的函数名称。
- ##### fadeOut()
用于淡出可见元素。
- ##### fadeToggle()
这个效果如果要在原生js中实现的话就必须给判断
		jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。
		如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
		如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。
语法:
```javascript
$(selector).fadeToggle(speed,callback);
```
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是 fading 完成后所执行的函数名称
- ##### fadeTo()
 fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）
语法:
```javascript
$(selector).fadeTo(speed,opacity,callback);
```
必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
可选的 callback 参数是该函数完成后所执行的函数名称

#### -  滑动
- #####  slideDown()
用于向下滑动元素
语法:
```javascript
$(selector).slideDown(speed,callback);
```
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是滑动完成后所执行的函数名称。

- #####  slideUp()
用于向上滑动元素
- #####  slideToggle()
		jQuery slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换。
		如果元素向下滑动，则 slideToggle() 可向上滑动它们。
		如果元素向上滑动，则 slideToggle() 可向下滑动它们。

#### -  动画
- #####  animate()方法
用于创建自定义动画。
语法：
```javascript
$(selector).animate({params},speed,callback);
```
```javascript
必需的 params 参数定义形成动画的 CSS 属性。
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是动画完成后所执行的函数名称。
```
- #####  animate() - 使用相对值
```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left:'250px',
      opacity:'0.5',
      height:'150px',
      width:'150px'
    });
  });
});
```
- #####  animate() - 使用预定义的值
```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height:'toggle'
    });
  });
});
```
- #####  animate() - 使用队列功能
默认地，jQuery 提供针对动画的队列功能。
这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的"内部"队列。然后逐一运行这些 animate 调用。
```javascript
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```
#### -  停止动画
- ##### stop()
用于停止动画或效果，在它们完成之前。
stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。
语法:
```javascript
$(selector).stop(stopAll,goToEnd);
```
		可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，
		即仅停止活动的动画，允许任何排入队列的动画向后执行。
		可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。默认成
		因此，默认地，stop() 会清除在被选元素上指定的当前动画。

#### -  停止动画
Callback 函数在当前动画 100% 完成之后执行。这个东西就相当于是js原生当中transitionend过渡完成要执行的回调函数一样一样

#### -  链
提示：当进行链接时，代码行会变得很长。不过，jQuery 语法不是很严格；您可以按照希望的格式来写，包含换行和缩进。
如下书写也可以很好地运行
```javascript
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```
#  HTML
#### -  捕获
- ##### text()、html() 以及 val()
		text() - 设置或返回所选元素的文本内容   相当于是js当中的innerTEXT
		html() - 设置或返回所选元素的内容（包括 HTML 标记） 相当于是js当中的innerHTML
		val() - 设置或返回表单字段的值  相当于是js当中的value

#### -  设置
- ##### text()回调函数
		上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。
		回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。
		然后以函数新值返回您希望使用的字符串。
```javascript
 $("#btn1").click(function(){
    $("#test1").text(function(i,origText){
      return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")"; 
    });
  });

  $("#btn2").click(function(){
    $("#test2").html(function(i,origText){
      return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });
```
- ##### attr
attr() 方法也允许您同时设置多个属性。
```javascript
$("button").click(function(){
    $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
    });
});
```
- ##### attr() 的回调函数
jQuery 方法 attr()，也提供回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串
```javascript
$("button").click(function(){
  $("#runoob").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```

#### -  添加元素
- ##### append() 方法
 append() 方法在被选元素的结尾插入内容（仍然该元素的内部）这个方法类似于js原生当中的appendchild()方法一样
- ##### prepend() 方法
 prepend() 方法在被选元素的开头插入内容
- ##### 添加若干新元素
在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。
不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。
在下面的例子中，我们创建若干个新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）：
```javascript
function appendText(){
	var txt1="<p>文本。1</p>";              // 使用 HTML 标签创建文本
	var txt2=$("<p></p>").text("文本2。");  // 使用 jQuery 创建文本
	var txt3=document.createElement("p");
	txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
	$("body").append(txt1,txt2,txt3);        // 追加新元素
}
```
- ##### after() 和 before()
jQuery after() 方法在被选元素之后插入内容。
jQuery before() 方法在被选元素之前插入内容
- #####添加若干新元素
after() 和 before() 方法能够通过参数接收无限数量的新元素。可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建新元素。
在下面的例子中，我们创建若干新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 after() 方法把这些新元素插到文本中（对 before() 同样有效）
```javascript
function afterText()
{
    var txt1="<b>I </b>";                    // 使用 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("img").after(txt1,txt2,txt3);          // 在图片后添加文本
}
```

#### -  删除元素
- ##### remove()
remove() 方法删除被选元素及其子元素。
- ##### empty()
empty() 方法删除被选元素的子元素
- ##### 过滤被删除的元素
jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。
该参数可以是任何 jQuery 选择器的语法。
```javascript
$("p").remove(".italic");
```

#### -  获取并设置 CSS 类
- #####  addClass()
不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素
当然在选取多个元素的时候用空格隔开即可
这个方法类似于js原生当中className,只不过他有toggleClass这种便捷的方法
```javascript
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```
您也可以在 addClass() 方法中规定多个类：
```javascript
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```
- #####   removeClass()
如何在不同的元素中删除指定的 class 属性：
```javascript
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```
- #####   toggleClass()
 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作
```javascript
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```

#### -  css() 方法
- #####   返回 CSS 属性
如需返回指定的 CSS 属性的值，请使用如下语法：
```javascript
css("propertyname");
```
```javascript
$("p").css("background-color");
```
- #####   设置 CSS 属性
如需设置指定的 CSS 属性，请使用如下语法：
```javascript
css("propertyname","value");
```
```javascript
$("p").css("background-color","yellow");
```

- #####   设置多个 CSS 属性
如需设置多个 CSS 属性，请使用如下语法：
```javascript
css({"propertyname":"value","propertyname":"value",...});
```
```javascript
$("p").css({"background-color":"yellow","font-size":"200%"});
```

#### -  尺寸
- #####   width() 和 height() 方法
width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
- #####   innerWidth() 和 innerHeight() 方法
innerWidth() 方法返回元素的宽度（包括内边距）。
innerHeight() 方法返回元素的高度（包括内边距）。
- #####   outerWidth() 和 outerHeight() 方法
outerWidth() 方法返回元素的宽度（包括内边距和边框）。
outerHeight() 方法返回元素的高度（包括内边距和边框）。
outerHeight(true) 如果传入参数true的话返回元素的高度(包括内边距和外边距和边框)

#  遍历
jq遍历其实都是原生js DOM的操作
#### -  祖先
- #####   parent()
parent() 方法返回被选元素的直接父元素。
该方法只会向上一级对 DOM 树进行遍历。
- #####   parents()
parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)
您也可以使用可选参数来过滤对祖先元素的搜索。
```javascript
$(document).ready(function(){
  $("span").parents("ul");
});
```
- #####   parentsUntil()
parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。
```javascript
$(document).ready(function(){
  $("span").parentsUntil("div");
});
```

返回span于div之间的元素
#### -  后代
- #####   children()
children() 方法返回被选元素的所有直接子元素。
该方法只会向下一级对 DOM 树进行遍历
您也可以使用可选参数来过滤对子元素的搜索。
```javascript
$(document).ready(function(){
  $("div").children("p.1");
});
```

