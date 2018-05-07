function myFunction1()
{
x=document.getElementById("change");  // 找到元素   getElementsByTagName("p");
x.innerHTML="Hello JavaScript!";    // 改变内容
}
function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("bulbon"))
  {
  element.src="./src/img/eg_bulboff.gif";
  }
else
  {
  element.src="./src/img/eg_bulbon.gif";
  }
}
function myFunction2()
{
x=document.getElementById("changestyle") // 找到元素
x.style.color="#ff0000";          // 改变样式
}
function myFunction3()
{
var x=document.getElementById("demo").value;
if(x==""||isNaN(x))
	{
	alert("Not Numeric");
	}
}
function checkCookies()
{
if (navigator.cookieEnabled==true)
	{
	alert("已启用 cookie")
	}
else
	{
	alert("未启用 cookie")
	}
}
function myFunction4()
{
var x=document.getElementById("fname");
x.value=x.value.toUpperCase();
}
function mOver(obj)
{
obj.innerHTML="谢谢你"
}

function mOut(obj)
{
obj.innerHTML="把鼠标指针移动到上面"
}
function mDown(obj)
{
obj.style.backgroundColor="#1ec5e5";
obj.innerHTML="松开鼠标"
}

function mUp(obj)
{
obj.style.backgroundColor="#D94A38";
obj.innerHTML="谢谢你"
}
// HTML DOM Style 对象
// Background 属性
// 属性	描述
// background	在一行中设置所有的背景属性
// backgroundAttachment	设置背景图像是否固定或随页面滚动
// backgroundColor	设置元素的背景颜色
// backgroundImage	设置元素的背景图像
// backgroundPosition	设置背景图像的起始位置
// backgroundPositionX	设置backgroundPosition属性的X坐标
// backgroundPositionY	设置backgroundPosition属性的Y坐标
// backgroundRepeat	设置是否及如何重复背景图像
// Border 和 Margin 属性
// 属性	描述
// border	在一行设置四个边框的所有属性
// borderBottom	在一行设置底边框的所有属性
// borderBottomColor	设置底边框的颜色
// borderBottomStyle	设置底边框的样式
// borderBottomWidth	设置底边框的宽度
// borderColor	设置所有四个边框的颜色 (可设置四种颜色)
// borderLeft	在一行设置左边框的所有属性
// borderLeftColor	设置左边框的颜色
// borderLeftStyle	设置左边框的样式
// borderLeftWidth	设置左边框的宽度
// borderRight	在一行设置右边框的所有属性
// borderRightColor	设置右边框的颜色
// borderRightStyle	设置右边框的样式
// borderRightWidth	设置右边框的宽度
// borderStyle	设置所有四个边框的样式 (可设置四种样式)
// borderTop	在一行设置顶边框的所有属性
// borderTopColor	设置顶边框的颜色
// borderTopStyle	设置顶边框的样式
// borderTopWidth	设置顶边框的宽度
// borderWidth	设置所有四条边框的宽度 (可设置四种宽度)
// margin	设置元素的边距 (可设置四个值)
// marginBottom	设置元素的底边距
// marginLeft	设置元素的左边距
// marginRight	设置元素的右边据
// marginTop	设置元素的顶边距
// outline	在一行设置所有的outline属性
// outlineColor	设置围绕元素的轮廓颜色
// outlineStyle	设置围绕元素的轮廓样式
// outlineWidth	设置围绕元素的轮廓宽度
// padding	设置元素的填充 (可设置四个值)
// paddingBottom	设置元素的下填充
// paddingLeft	设置元素的左填充
// paddingRight	设置元素的右填充
// paddingTop	设置元素的顶填充
// Layout 属性
// 属性	描述
// clear	设置在元素的哪边不允许其他的浮动元素
// clip	设置元素的形状
// content	设置元信息
// counterIncrement	设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器的增量。默认是1。
// counterReset	设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器被设置的值。默认是0。
// cssFloat	设置图像或文本将出现（浮动）在另一元素中的何处。
// cursor	设置显示的指针类型
// direction	设置元素的文本方向
// display	设置元素如何被显示
// height	设置元素的高度
// markerOffset	设置marker box的principal box距离其最近的边框边缘的距离
// marks	设置是否cross marks或crop marks应仅仅被呈现于page box边缘之外
// maxHeight	设置元素的最大高度
// maxWidth	设置元素的最大宽度
// minHeight	设置元素的最小高度
// minWidth	设置元素的最小宽度
// overflow	规定如何处理不适合元素盒的内容
// verticalAlign	设置对元素中的内容进行垂直排列
// visibility	设置元素是否可见
// width	设置元素的宽度
// List 属性
// 属性	描述
// listStyle	在一行设置列表的所有属性
// listStyleImage	把图像设置为列表项标记
// listStylePosition	改变列表项标记的位置
// listStyleType	设置列表项标记的类型
// Positioning 属性
// 属性	描述
// bottom	设置元素的底边缘距离父元素底边缘的之上或之下的距离
// left	置元素的左边缘距离父元素左边缘的左边或右边的距离
// position	把元素放置在static, relative, absolute 或 fixed 的位置
// right	置元素的右边缘距离父元素右边缘的左边或右边的距离
// top	设置元素的顶边缘距离父元素顶边缘的之上或之下的距离
// zIndex	设置元素的堆叠次序
// Printing 属性
// 属性	描述
// orphans	设置段落留到页面底部的最小行数
// page	设置显示某元素时使用的页面类型
// pageBreakAfter	设置某元素之后的分页行为
// pageBreakBefore	设置某元素之前的分页行为
// pageBreakInside	设置某元素内部的分页行为
// size	设置页面的方向和尺寸
// widows	设置段落必须留到页面顶部的最小行数
// Scrollbar 属性 (IE-only)
// 属性	描述
// scrollbar3dLightColor	设置箭头和滚动条左侧和顶边的颜色
// scrollbarArrowColor	设置滚动条上的箭头颜色
// scrollbarBaseColor	设置滚动条的底色
// scrollbarDarkShadowColor	设置箭头和滚动条右侧和底边的颜色
// scrollbarFaceColor	设置滚动条的表色
// scrollbarHighlightColor	设置箭头和滚动条左侧和顶边的颜色，以及滚动条的背景
// scrollbarShadowColor	设置箭头和滚动条右侧和底边的颜色
// scrollbarTrackColor	设置滚动条的背景色
// Table 属性
// 属性	描述
// borderCollapse	设置表格边框是否合并为单边框，或者像在标准的HTML中那样分离。
// borderSpacing	设置分隔单元格边框的距离
// captionSide	设置表格标题的位置
// emptyCells	设置是否显示表格中的空单元格
// tableLayout	设置用来显示表格单元格、行以及列的算法
// Text 属性
// 属性	描述
// color	设置文本的颜色
// font	在一行设置所有的字体属性
// fontFamily	设置元素的字体系列。
// fontSize	设置元素的字体大小。
// fontSizeAdjust	设置/调整文本的尺寸
// fontStretch	设置如何紧缩或伸展字体
// fontStyle	设置元素的字体样式
// fontVariant	用小型大写字母字体来显示文本
// fontWeight	设置字体的粗细
// letterSpacing	设置字符间距
// lineHeight	设置行间距
// quotes	设置在文本中使用哪种引号
// textAlign	排列文本
// textDecoration	设置文本的修饰
// textIndent	缩紧首行的文本
// textShadow	设置文本的阴影效果
// textTransform	对文本设置大写效果
// unicodeBidi	 
// whiteSpace	设置如何设置文本中的折行和空白符
// wordSpacing	设置文本中的词间距
// 标准属性
// 属性	描述
// dir	设置或返回文本的方向
// lang	设置或返回元素的语言代码
// title	设置或返回元素的咨询性的标题

