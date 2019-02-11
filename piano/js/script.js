toggleFullScreen();

var synth = new Tone.Synth().toMaster();

$(function() {

	var vHeight = $(window).height();
	$("body").css("height", vHeight);
	$("c4").append(vHeight);
	

	// $("#c4").click(function(){
	// 	console.log("C4");
	// 	synth.triggerAttackRelease("C4", "8n");
	// });

	$('body').children().each(function() {
		console.log($(this));

		$(this).click(function() {
			console.log(this.id + ": attack");
			synth.triggerAttackRelease(this.id, "8n");
		});
		$(this).mouseup(function() {
			console.log(this.id + ": release");
			// synth.triggerRelease(this.id);
		});
	});
});



function toggleFullScreen() {
	var doc = window.document;
	var docEl = doc.documentElement;

	var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
	var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

	if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
	  requestFullScreen.call(docEl);
	} else {
	  cancelFullScreen.call(doc);
	}
}