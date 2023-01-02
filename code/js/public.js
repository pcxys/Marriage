function $(id){
	return document.getElementById(id); 
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