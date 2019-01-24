// Variables
var playBtn 	= $("#play-pause-button");
var playSymbol  = document.querySelector("#play-btn");
var playable = false;

// Wavesurfer Initialization
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#A239CA',
    progressColor: '#4717F6',
    barWidth: 10,
    height: 500
});

var audioLength = wavesurfer.getDuration();

wavesurfer.load('track.mp3');

// Trigger for when audio finishes
wavesurfer.on("finish", function()
{
	$("#play-btn").removeClass("fa-pause fa-play");
	$("#play-btn").addClass("fa-redo-alt");
});

// Pause/Play Button Controls
playBtn.click(function() {
	if (playable)
	{
		if (wavesurfer.isPlaying())
		{
			$("#play-btn").removeClass("fa-pause");
			$("#play-btn").addClass("fa-play");
		}
		else
		{
			$("#play-btn").removeClass("fa-play");
			$("#play-btn").addClass("fa-pause");
		}
		wavesurfer.playPause();
	}
});

// Loading signal to user
wavesurfer.on("ready", function()
{
	$("#play-btn").removeClass("fa-pulse");
	$("#play-btn").removeClass("fa-spinner");
	$("#play-btn").addClass("fa-play");
	playable = true;
});