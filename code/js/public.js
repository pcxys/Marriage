function exit() {
	alert("您已成功退出");
}
function UnregisteredReminder() {
	alert ("未注册，无法进行查看");
}
// 点击右上角用户名，更改用户名，并在控制台输出。
function Changeusername(xing,ming) {
	document.getElementById("username").innerHTML= xing + ming;
	console.log("已更改用户名");
}