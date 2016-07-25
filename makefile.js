// 正则匹配{{module.js}}并替换对应内容
// fs.readFileSync(path,{'encoding':'utf-8'}) 读内容
// fs.writeFileSync(path,data,{'encoding':'utf-8'}) 写内容
// 使用方法 $ node makefile arg1 arg2 

const fs=require('fs');
let reg=/{{([^}]+)?}}/g;
let args=process.argv.slice(2);
/*
*	@param path:入口文件路径
*	@param output:输出文件路径
*/
function combo(path,output){
	var str=fs.readFileSync(path,{'encoding':'utf-8'});
	while(match=reg.exec(str)){
		reg.lastIndex=0; // 很重要，未加会导致个别文件无法替换
		var replaced=match[0],
			newStr=fs.readFileSync(match[1],{'encoding':'utf-8'});
		str=str.replace(replaced,newStr); // 匹配并替换
	}
	fs.writeFileSync(output,str,{'encoding':'utf-8'});
}

combo(args[0],args[1]);