function $(id){
	return document.getElementById(id); 
}
function indexRead() {
	//alert ("成功调取");
	get();
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
	xhr.open("get","avatar.json",true);
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
					update += "<img";
					update += " ";
					update += "src= '";
					update += persons[number].url;
					update += "'";
					update += " ";
					update += "class = 'img'";
					update += " ";
					update += ">";
					update += "</img>";
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