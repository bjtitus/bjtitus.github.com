/* Author: Brandon Titus

*/

$("footer a").hover(
	function () {
		$("#profile_link").html($(this).attr("title"));
	},
	function () {
		$("#profile_link").html("bjtitus.net");
	}
);





















