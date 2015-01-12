var myApp = new Framework7({
});
var $$ = Dom7;
var template = document.getElementById('feed').innerHTML;
var compiledTemplate = Template7.compile(template);
function getfeed() {
	$$.getJSON ('http://pipes.yahoo.com/pipes/pipe.run?_id=627d60251fa8c9683f7c370fb7055f87&_render=json', function (json) {
	document.getElementById('content').innerHTML = compiledTemplate(json);
	});
};
getfeed();
var ptrContent = $$('.pull-to-refresh-content');
ptrContent.on('refresh', function (e) {
	setTimeout(function () {
		getfeed();
	myApp.pullToRefreshDone();
	}, 1000);
});
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});