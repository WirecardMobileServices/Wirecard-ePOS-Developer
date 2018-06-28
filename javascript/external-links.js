var anchors = document.getElementsByClassName("md-nav__list")[0].getElementsByTagName("a");
var baseUrl = window.location.origin ? window.location.origin + '/' : window.location.protocol + '/' + window.location.host + '/';
var firstPath = window.location.pathname.split('/')[1];
var url = firstPath ? baseUrl + firstPath + '/' : baseUrl;
for (i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    var sep = anchor.title.indexOf("|");
    console.log(anchor.title);
    console.log(sep);
	if (sep != -1) {
		var title = anchor.title.substring(0, sep);
		var href = anchor.title.substring(sep + 1, anchor.title.length);
		anchor.href = url + href;
		anchor.title = title;
		anchor.innerText = title;
	}
	if (anchor.innerText.indexOf("\uD83D\uDDD7") != -1) { // &#x1F5D7; = "new window" char, see http://www.fileformat.info/info/unicode/char/1f5d7/index.htm
		anchor.target = "_blank";
    }
}