function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(";");
	for(let i = 0 ; i < ca.length ; i++) {
		let c = ca[i];
		while(c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.length , c.length);
		}
	}
	return "";
}
function getName() {
	let welcomeelement = document.getElementById("Welcome");
	let user = getCookie("StaffName");
	if(user != "")
		welcomeelement.innerText+= " " +user;
}
function logout() {
	console.log("Logging out");
	var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
}
if(window.location.href.split('/')[5] === "Home.html") {
	console.log("Getting Name");
	getName();
}
document.getElementById("Logoutbtn").onclick = function() {
	console.log("Logging out");
	logout();
	window.location="/WEB-DEV/Home.html";
}
document.getElementById("Backbtn").onclick = function() {
	var location = window.location.href.split("/");
	if(location[5].indexOf("Home") != -1)
		window.location = "/WEB-DEV/" + location[4] + "/Home.html";
	else {
		var year = location[5].indexOf("Year") + 4;
		var yearstr = location[5].substring(0,year);
		window.location = "/WEB-DEV/" + location[4] + "/" + yearstr + "Home.html";
	}
}
