x = new Date();
y = x.getFullYear();
m = x.getMonth()+1;
d = x.getDate();
dd = x.getDay();
yy = x.getHours();
mm = x.getMinutes();


window.onload = function(){ 	
	var x = document.getElementById("demo");
	x.innerHTML = "欢迎光临灯芯K2游戏平台，现在的时间是：" + y + "年" + m + "月" + d + "日" + "星期" + dd + " " + yy + "时" + mm + "分";
}

