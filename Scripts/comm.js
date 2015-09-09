//通用函數
function $(id)
{
    return document.getElementById(id);
}

//運行，保存，複製代碼
function runCode(obj)
{
    var winname = window.open("about:blank", "_blank", "height=100, width=400, top=300, left=300, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no");
    winname.document.open("text/html", "replace");
    winname.document.writeln($(obj).value);
    winname.document.close();
}

function saveCode(obj, filename)
{
    var winname = window.open("about:blank", "", "top=10000,left=10000");
    winname.document.open("text/html", "replace");
    winname.document.writeln($(obj).value);
    winname.document.execCommand("saveas", "", filename + ".htm");
    winname.close();
}

function copyCode(obj)
{
    var rng = document.body.createTextRange();
    rng.moveToElementText($(obj));
    rng.scrollIntoView();
    rng.select();
    rng.execCommand("Copy");
    rng.collapse(false);
}

//cookie寫入，讀取，刪除。
//寫入：setCookie("url","http://www.yongfa365.com"),讀取：getCookie("url"),刪除：setCookie("url","","0-1")
function setCookie(cookieName, cookieValue, seconds, path, domain, secure) {
	var expires = new Date();
	expires.setTime(expires.getTime() + (seconds ? seconds : 365*24*60*60*1000));
	document.cookie = escape(cookieName) + '=' + escape(cookieValue)
		+ (expires ? '; expires=' + expires.toGMTString() : '')
		+ (path ? '; path=' + path : '/')
		+ (domain ? '; domain=' + domain : '')
		+ (secure ? '; secure' : '');
}

function getCookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return "";
}



//複製到粘貼版
function copyToClipBoard(){
   var clipBoardContent=''; 
   clipBoardContent+=document.title.toString();
   clipBoardContent+='\r\n';
   clipBoardContent+=document.location.toString();
   window.clipboardData.setData("Text",clipBoardContent);
  }

function checkStatus(url)
{
	XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	XMLHTTP.open("HEAD",url,false);
	XMLHTTP.send();
	return XMLHTTP.status==200;
}

function ChangeCSS(strCSS){
$("NowCSS").href=strCSS;
setCookie("yongfa365_css", strCSS);
}

document.writeln("<script type='text\/javascript'> ");
document.writeln("cpro_client='yongfa365_cpr';");
document.writeln("cpro_location=3; ");
document.writeln("cpro_position=2; ");
document.writeln("cpro_follow=1; ");
document.writeln("cpro_close=1; ");
document.writeln("cpro_template='float_xuanfusld_120_270'; ");
document.writeln("cpro_contw=950; ");
document.writeln("cpro_w=120; ");
document.writeln("cpro_h=270; ");
document.writeln("cpro_float=1; ");
document.writeln("cpro_cad=1;");
document.writeln("<\/script>");
document.writeln("<script language='JavaScript' type='text\/javascript' src='http:\/\/cpro.baidu.com\/cpro\/ui\/float.js'><\/script>");