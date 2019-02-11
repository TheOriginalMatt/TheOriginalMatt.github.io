var synth = new Tone.Synth().toMaster();

$(function() {
	

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