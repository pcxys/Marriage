function $(id){
	return document.getElementById(id); 
}
function login() {
	console.log("登录成功");
	$("afterLogin").style.display= "block";
	$("beforeLogin").style.display= "none";
}
function exitLogin() {
	console.log("已成功退出");
	$("afterLogin").style.display= "none";
	$("beforeLogin").style.display= "block";
}
function register() {
	window.location.href = "register.html";
}
function basic() {
	get();
	//navlist();
}
function navlist() {
	//1.获取xhr
	var xhr = createXhr();
	//2.创建请求，使用get方式，异步请求
	xhr.open("get","data/navlist.json",true);
	//3.回调函数
	xhr.onreadystatechange = function(){
		// console.log(xhr.readyState + "," + xhr.status);
		if(xhr.readyState==4&&xhr.status==200){
			var resText = xhr.responseText;
			//将resText转换成js对象格式
			var persons = JSON.parse(resText);
			// 输出读取到的数据到控制台
			// console.log(persons);
			console.log (persons.length);
			// 遍历导航菜单项，并生成html语句进行显示
			for (j = 0; j<persons.length;j++) {
				let html = "";
				html += '<li class="nav-item"><a class="nav-link" href="'+ persons[j].url +'" onclick = "onNavlist(this.innerText)">'+ persons[j].name +'</a></li>';
				console.log (html);
				$("nav").innerHTML += html;
			}
		}
	}
	//4.发送请求
	xhr.send();
}
function onNavlist(navName) {
	if (navName == "主页") {
		window.location.href = "main.html";
	} else if (navName == "会员广场") {
		window.location.href = "membersquare.html";
	}else if (navName == "个人设置") {
		window.location.href = "user.html";
	}
	console.log("载入的网址是:" + navName);
}
function createXhr() {
	var xhr;
	//判断浏览器是否支持XMLHttpRequest
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
function get() {
	//1.获取xhr
	var xhr = createXhr();
	//2.创建请求，使用get方式，异步请求
	xhr.open("get","data/avatar.json",true);
	//3.回调函数
	xhr.onreadystatechange = function(){
		// console.log(xhr.readyState + "," + xhr.status);
		if(xhr.readyState==4&&xhr.status==200){
			var resText = xhr.responseText;
			//将resText转换成js对象格式
			var persons = JSON.parse(resText);
			// 输出读取到的数据到控制台
			// console.log(persons);
			let number = 0;
			let table = $("table");
			let rows = table.rows;
			// 遍历生成图片html语句，并将语句写入表格td中。
			for (j = 0; j<rows.length; j++) {
				for (k = 0; k<rows[j].cells.length; k++)
				{
					let update = "";
					update += "<img src = '" + persons[number].url + "' class = 'img' ></img>";
					// console.log (update);
					if (number<19) {
						number++;
					}
					// 将html图片标记写入表格td中
					rows[j].cells[k].innerHTML = update;
				}
			}
		}
	}
	//4.发送请求
	xhr.send();
}
function membersquare() {
	//1.获取xhr
	var xhr = createXhr();
	//2.创建请求，使用get方式，异步请求
	xhr.open("get","data/membersquare.json",true);
	//3.回调函数
	xhr.onreadystatechange = function(){
		// console.log(xhr.readyState + "," + xhr.status);
		if(xhr.readyState==4&&xhr.status==200){
			var resText = xhr.responseText;
			//将resText转换成js对象格式
			var persons = JSON.parse(resText);
			// 输出读取到的数据到控制台
			//console.log(persons);
			let focusNumber = $("focusNumber");
			let newNumber = $("newNumber");
			let recentNumber = $("recentNumber");
			let browseNumber = $("browseNumber");
			let focusNumberRows = focusNumber.rows;
			let newNumberRows = newNumber.rows;
			let recentNumberRows = recentNumber.rows;
			let browseNumberRows = browseNumber.rows;
			//alert(browseNumberRows[0].cells.length);
			// 遍历生成图片html语句，并将语句写入表格td中。
			for (var j = 0; j<focusNumberRows.length; j++) {
				for (var k = 0; k<focusNumberRows[j].cells.length; k++)
				{
					let update = "";
					update += "<img src = '" + persons.focususer[k].url + "' class = 'img' ></img>";
					//console.log(focusNumberRows[j].cells.length);
					//console.log(update);
					// 将html图片标记写入表格td中
					focusNumberRows[j].cells[k].innerHTML = update;
				}
			}
			var number2 = 0;
			for (var j = 0; j<newNumberRows.length; j++) {
				for (var k = 0; k<newNumberRows[j].cells.length; k++)
				{
					let update = "";
					update += "<img src = '" + persons.new[number2].url + "' class = 'img' ></img>";
					//console.log(newNumberRows[j].cells.length);
					newNumberRows[j].cells[k].innerHTML = update;
					number2++;
				}
			}
			for (var j = 0; j<recentNumberRows.length; j++) {
				for (var k = 0; k<recentNumberRows[j].cells.length; k++)
				{
					let update = "";
					update += "<img src = '" + persons.recent[k].url + "' class = 'img' ></img>";
					//console.log(recentNumberRows[j].cells.length);
					//.log(update);
					// 将html图片标记写入表格td中
					recentNumberRows[j].cells[k].innerHTML = update;
				}
			}
			for (var j = 0; j<browseNumberRows.length; j++) {
				for (var k = 0; k<browseNumberRows[j].cells.length; k++)
				{
					let update = "";
					update += "<img src = '" + persons.browse[k].url + "' class = 'img' ></img>";
					//console.log(persons.browse.length);
					//console.log(update);
					// 将html图片标记写入表格td中
					browseNumberRows[j].cells[k].innerHTML = update;
				}
			}
		}
	}
	//4.发送请求
	xhr.send();
}